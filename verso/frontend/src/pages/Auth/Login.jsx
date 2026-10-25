import "./Auth.css";

// Components 
import { Link } from "react-router-dom";
import Message from "../../components/Message";

// Hooks
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Reducer
import { login, reset } from "../../slices/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const { login, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefoult();

    const user = {
      email,
      password
    }

    dispatch(login(user));
  }

  // Clean all auth states
  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  return (
    <div id="login">
      <h2>Verso</h2>
      <p className="subtitle">Realize login para fazer posts, curtir e comentar</p>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} value={email || ""} />
        <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} value={password || ""} />
        {!loading && <input type="submit" value="Cadastrar" />}
        {loading && <input type="submit" value="Aguarde..." disabled />}
        {error && <Message msg={error} type="error"/>}
      </form>
    </div>
  )
}

export default Login