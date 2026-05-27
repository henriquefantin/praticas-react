import style from './Home.module.css'

// hooks
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';

// components
import PostDetail from '../../components/PostDetail';

const Home = () => {
  const [query, setQuery] = useState("");
  const { documents: posts, loading } = useFetchDocuments('posts');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query) {
      return navigate(`/search?q=${query}`);
    }
  }

  console.log(posts)

  return (
    <div className={style.home}>
      <h2>Veja os nossos posts mais recentes</h2>
      <form onSubmit={handleSubmit} className='display-flex flex-direction-row'>
        <input
          type="text"
          placeholder='Busque por tags...'
          className='w-60'
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn">Pesquisar</button>
      </form>
      <div className={`${style.posts} mt-4`}>
        {loading && <p>Carregando...</p>}
        {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
        {posts && posts.length === 0 && (
          <div className="center">
            <p className='mb-4'>Nenhuma publicação encontrada</p>
            <Link to="/post/create" className='btn'>Criar primeiro post</Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
