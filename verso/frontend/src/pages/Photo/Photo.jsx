import './Photo.css';

import { uploads } from '../../utils/config';
import { v4 as uuid } from 'uuid';

// Components
import Message from '../../components/Message';
import PhotoItem from '../../components/PhotoItem';
import LikeContainer from '../../components/LikeContainer';
import { Link } from 'react-router-dom';

// Hooks
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useResetComponentMessage } from '../../hooks/useResetComponentMessage';

// Redux
import { comment, getPhoto, like } from '../../slices/photoSlice';

const Photo = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const { photo, loading, error, message } = useSelector((state) => state.photo);
    const resetComponentMessage = useResetComponentMessage(dispatch);

    const [commentText, setCommentText] = useState("");

    // Load photo data
    useEffect(() => {
        dispatch(getPhoto(id));
    }, [dispatch, id]);

    // Like a photo
    const handleLike = () => {
        dispatch(like(photo._id));
        resetComponentMessage();
    };

    // Comment a photo
    const handleComment = (e) => {
        e.preventDefault()

        const commentData = {
            comment: commentText,
            id: photo._id
        }

        dispatch(comment(commentData));
        setCommentText("");
        resetComponentMessage();
    }

    if (loading) {
        return <p>Carregando...</p>
    }
    return (
        <div id="photo">
            <PhotoItem photo={photo} />
            <LikeContainer photo={photo} user={user} handleLike={handleLike} />
            <div className="message-container">
                {error && <Message msg={error} type="error" />}
                {message && <Message msg={message} type="success" />}
            </div>
            <div className="comments">
                {
                    photo.comments && (
                        <>
                            <h3>Comentários: ({photo.comments?.length || 0})</h3>
                            <form onSubmit={handleComment}>
                                <input type="text" placeholder="Escreva um comentário..." onChange={(e) => setCommentText(e.target.value)} value={commentText || ""} />
                                <input type="submit" value="Comentar" />
                            </form>
                            {photo.comments.length === 0 && <p>Não há comentários...</p>}
                            {
                                photo.comments && photo.comments.map((comment) => (
                                    <div className="comment" key={uuid()}>
                                        <div className="author">
                                            {comment.userImage && (
                                                <img
                                                    src={`${uploads}/users/${comment.userImage}`}
                                                    alt={comment.userName}
                                                />
                                            )}
                                            <Link to={`/users/${comment.userId}`}>
                                                {comment.userName}
                                            </Link>
                                        </div>
                                        <p>{comment.comment}</p>
                                    </div>
                                ))
                            }
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default Photo
