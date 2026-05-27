import style from './Search.module.css'

import { Link } from 'react-router-dom';

// hooks
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { useQuery } from '../../hooks/useQuery';

// components
import PostDetail from '../../components/PostDetail';

const Search = () => {
    const query = useQuery();
    const search = query.get('q');

    const { documents: posts } = useFetchDocuments('posts', search);

    return (
        <div>
            <h2>Resultado da busca</h2>
            <div className={`${style.posts} mt-4`}>
                {posts && posts.length === 0 && (
                    <div className="center">
                        <p className='mb-4'>Nenhuma publicação encontrada a partir de sua busca</p>
                        <Link to="/" className={style.btnVoltar}>Voltar</Link>
                    </div>
                )}
                {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
            </div>
        </div>
    )
}

export default Search