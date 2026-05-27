import styles from './Post.module.css'

// hooks
import { useFetchDocument } from '../../hooks/useFetchDocument';
import { useParams } from 'react-router-dom';

const Post = () => {
    const { id } = useParams();
    const { document: post, loading } = useFetchDocument('posts', id);
    console.log(post)
    return (
        <div className={styles.post}>
            <div className={styles.container}>
                {loading && <p>Carregando publicação</p>}
                {post && (
                    <>
                        <h2 className='center'>{post.title}</h2>
                        <img src={post.image} alt={post.title} />
                        <p>{post.body}</p>
                        <h4>Este post trata sobre:</h4>
                        <div className={styles.tags}>
                            {post.tags.map((tag) => (
                                <p key={tag}>
                                    <span>#</span>
                                    {tag}
                                </p>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Post