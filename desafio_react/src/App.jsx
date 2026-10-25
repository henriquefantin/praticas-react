import { useEffect, useRef, useState } from 'react'
import './App.css'

const DRAW_DURATION = 2000
const SLOT_COUNT = 6
const HISTORY_KEY = 'mega-sena-draw-history'

function readDrawHistory() {
  try {
    const savedHistory = JSON.parse(window.localStorage.getItem(HISTORY_KEY) || '[]')
    return Array.isArray(savedHistory) ? savedHistory : []
  } catch {
    return []
  }
}

function drawUniqueNumbers() {
  const numbers = Array.from({ length: 60 }, (_, index) => index + 1)

  for (let index = numbers.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1))
    ;[numbers[index], numbers[randomIndex]] = [numbers[randomIndex], numbers[index]]
  }

  return numbers.slice(0, SLOT_COUNT).sort((a, b) => a - b)
}

function App() {
  const [numbers, setNumbers] = useState(Array(SLOT_COUNT).fill(null))
  const [isDrawing, setIsDrawing] = useState(false)
  const [hasDrawn, setHasDrawn] = useState(false)
  const [history, setHistory] = useState(readDrawHistory)
  const [betsDirectory, setBetsDirectory] = useState(null)
  const [fileStatus, setFileStatus] = useState('')
  const intervalRef = useRef(null)
  const timeoutRef = useRef(null)

  useEffect(() => () => {
    window.clearInterval(intervalRef.current)
    window.clearTimeout(timeoutRef.current)
  }, [])

  useEffect(() => {
    try {
      window.localStorage.setItem(HISTORY_KEY, JSON.stringify(history))
    } catch {
      // The history remains available for the current session if storage is unavailable.
    }
  }, [history])

  useEffect(() => {
    if (!betsDirectory) return

    async function saveHistoryFile() {
      try {
        const fileHandle = await betsDirectory.getFileHandle('historico-apostas.json', { create: true })
        const writable = await fileHandle.createWritable()
        await writable.write(JSON.stringify(history, null, 2))
        await writable.close()
        setFileStatus('Histórico salvo na pasta apostas.')
      } catch {
        setFileStatus('Não foi possível gravar o arquivo. Selecione a pasta novamente.')
      }
    }

    saveHistoryFile()
  }, [betsDirectory, history])

  async function chooseBetsDirectory() {
    if (!window.showDirectoryPicker) {
      setFileStatus('Use Chrome ou Edge para salvar diretamente em uma pasta.')
      return
    }

    try {
      const directory = await window.showDirectoryPicker({ mode: 'readwrite' })
      setBetsDirectory(directory)
      setFileStatus('')
    } catch (error) {
      if (error.name !== 'AbortError') {
        setFileStatus('Não foi possível acessar a pasta selecionada.')
      }
    }
  }

  function handleDraw() {
    if (isDrawing) return

    setIsDrawing(true)
    setHasDrawn(false)
    setNumbers(Array.from({ length: SLOT_COUNT }, () => Math.ceil(Math.random() * 60)))

    intervalRef.current = window.setInterval(() => {
      setNumbers(Array.from({ length: SLOT_COUNT }, () => Math.ceil(Math.random() * 60)))
    }, 75)

    timeoutRef.current = window.setTimeout(() => {
      window.clearInterval(intervalRef.current)
      const gameNumbers = drawUniqueNumbers()
      setNumbers(gameNumbers)
      setHistory((games) => [
        ...games,
        {
          id: `${Date.now()}-${Math.random()}`,
          numbers: gameNumbers,
          createdAt: new Date().toISOString(),
        },
      ])
      setIsDrawing(false)
      setHasDrawn(true)
    }, DRAW_DURATION)
  }

  return (
    <main className="page-shell">
      <section className="draw-card" aria-labelledby="page-title">
        <div className="brand-mark" aria-hidden="true">✳</div>
        <p className="eyebrow">SORTEADOR • 1 A 60</p>
        <h1 id="page-title">Mega-Sena</h1>
        <p className="intro">Seis números, escolhidos ao acaso. Deixe a sorte girar.</p>

        <div className="number-grid" aria-label="Números sorteados" aria-live="polite" aria-atomic="true">
          {numbers.map((number, index) => (
            <div
              className={`number-ball${isDrawing ? ' is-spinning' : ''}${number ? ' has-number' : ''}`}
              key={index}
            >
              {number ? String(number).padStart(2, '0') : <span className="placeholder">—</span>}
            </div>
          ))}
        </div>

        <button className="draw-button" type="button" onClick={handleDraw} disabled={isDrawing}>
          <span className={isDrawing ? 'button-spinner' : 'button-sparkle'} aria-hidden="true">
            {isDrawing ? '' : '✦'}
          </span>
          {isDrawing ? 'Sorteando…' : hasDrawn ? 'Sortear novamente' : 'Sortear números'}
        </button>

        <p className="helper-text" role="status">
          {isDrawing
            ? 'Os números estão girando…'
            : hasDrawn
              ? 'Boa sorte! Os números não se repetem.'
              : 'Cada número gira por 2 segundos.'}
        </p>
      </section>
      <section className="history-card" aria-labelledby="history-title">
        <div className="history-heading">
          <div>
            <p className="eyebrow">SEUS SORTEIOS</p>
            <h2 id="history-title">Histórico de jogos</h2>
          </div>
          <span className="history-count">{history.length} {history.length === 1 ? 'jogo' : 'jogos'}</span>
        </div>
        <button className="folder-button" type="button" onClick={chooseBetsDirectory}>
          {betsDirectory ? 'Pasta apostas selecionada' : 'Escolher pasta apostas'}
        </button>
        <p className="file-status" role="status">
          {fileStatus || 'Selecione a pasta desafio_react/src/apostas para salvar uma cópia em JSON.'}
        </p>
        {history.length === 0 ? (
          <p className="empty-history">Seus jogos gerados aparecerão aqui.</p>
        ) : (
          <ol className="history-list">
            {[...history].reverse().map((game) => (
              <li className="history-item" key={game.id}>
                <time dateTime={game.createdAt}>
                  {new Date(game.createdAt).toLocaleString('pt-BR', {
                    day: '2-digit', month: '2-digit', year: 'numeric',
                    hour: '2-digit', minute: '2-digit',
                  })}
                </time>
                <div className="history-numbers" aria-label={`Números: ${game.numbers.join(', ')}`}>
                  {game.numbers.map((number, index) => (
                    <span className="history-number" key={`${game.id}-${index}`}>
                      {String(number).padStart(2, '0')}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        )}
      </section>
      <footer>Um jogo de sorte. Jogue com responsabilidade.</footer>
    </main>
  )
}

export default App
