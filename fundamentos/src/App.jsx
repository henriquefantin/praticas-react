import { useState } from 'react'

// Componets
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';
import Events from './components/Events';
import ChallengeEvent from './components/ChallengeEvent';

// Styles
import './App.css'

function App() {
  return (
    <div className="centralizar text-white">
      {/*
        <TemplateExpressions/>
        <FirstComponent/>
        <Events/>
      */}
        <ChallengeEvent/>
    </div>
  )
}

export default App
