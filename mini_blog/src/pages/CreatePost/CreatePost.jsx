import styles from "./CreatePost.module.css"

import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useInsertDocument } from '../../hooks/useInsertDocument';
import { useFetchDocument } from '../../hooks/useFetchDocument';
import { useUpdateDocument } from "../../hooks/useUpdateDocument";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");
  const [formError, setFormError] = useState("");

  const { user } = useAuthValue();

  const navigate = useNavigate();

  // inserir nova publicação
  const { insertDocument, response } = useInsertDocument('posts');

  // atualizar publicação
  const { id } = useParams();
  const isEditing = !!id;

  const { document: post } = useFetchDocument("posts", id);
  const { updateDocument, response: updateResponse } = useUpdateDocument("posts");

  useEffect(() => {
    if (post && isEditing) {
      setTitle(post.title);
      setImage(post.image);
      setBody(post.body);
      setTags(post.tags.join(", "));
    }
  }, [post, isEditing]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    // validar url da image
    try {
      new URL(image);
    } catch {
      setFormError("A imagem precisa ser uma URL.");
      return;
    }

    // criar array de tags
    const tagsArray = tags
      .split(",")
      .map((tag) => tag.trim().toLowerCase())
      .filter(Boolean);

    // checar todos os valores
    if (!title || !image || !body || tagsArray.length === 0) {
      setFormError("Por favor, preencha todos os campos.");
      return;
    }

    if (isEditing) {
      const updatedPost = await updateDocument(id, {
        title,
        image,
        body,
        tags: tagsArray,
      });

      if (updatedPost) {
        navigate("/dashboard");
      }

      return;
    }

    const insertedPost = await insertDocument({
      title,
      image,
      body,
      tags: tagsArray,
      uid: user.uid,
      createdBy: user.displayName
    });

    // redirect home
    if (insertedPost) {
      navigate("/");
    }
  }

  return (
    <div>
      <h2>{!isEditing ? "Criar Publicação" : "Editar Publicação"}</h2>
      <p className="center">Escreva o que quiser e compartilhe suas ideias.</p>
      <form onSubmit={handleSubmit} className='display-flex flex-direction-column'>
        <label>
          <span>Título</span>
          <input
            type="text"
            name="title"
            placeholder='Informe um título claro'
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>URL da imagem</span>
          <input
            type="text"
            name="image"
            placeholder='Informe o link de sua imagem'
            required
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>
        {post && (
          <>
            <p>Preview da imagem atual:</p>
            <img
              className={styles.image_preview}
              src={post.image}
              alt={post.title}
            />
          </>
        )}
        <label>
          <span>Conteúdo</span>
          <textarea
            name="body"
            placeholder='Informe o conteudo de sua publicação'
            required
            onChange={(e) => setBody(e.target.value)}
            value={body}
          ></textarea>
        </label>
        <label>
          <span>Tags</span>
          <input
            type="text"
            name="tags"
            placeholder='Informe as tags de sua publicação separadas por vírgulas'
            required
            onChange={(e) => setTags(e.target.value)}
            value={tags}
          />
        </label>
        {!response.loading && <button className="btn">{!isEditing ? "Cadastrar" : "Salvar"}</button>}
        {response.loading && (
          <button className="btn" disabled>Aguarde...</button>
        )}
        {response.error && <div className="error">{response.error}</div>}
        {formError && <div className="error">{formError}</div>}
      </form>
    </div>
  )
}

export default CreatePost
