import { auth } from '../firebase/config'

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'

import { useState, useEffect } from 'react'

export const useAuthentication = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    // cleanup
    // deal with memory leak
    const [cancelled, setCancelled] = useState(null)

    function checkIfIsCancelled() {
        if (cancelled) {
            return;
        }
    }

    // Register
    const createUser = async (data) => {
        checkIfIsCancelled()
        setLoading(true)
        setError(null);

        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )
            await updateProfile(user, {
                displayName: data.displayName
            })
            setLoading(false)
            return user
        } catch (error) {
            let systemErrorMessage;
            if (error.message.includes("Password")) {
                systemErrorMessage = "Senha fraca. A senha precisa conter pelo menos 6 caracteres.";
            } else if (error.message.includes("email-already")) {
                systemErrorMessage = "E-mail já cadastrado."
            } else {
                systemErrorMessage = "Ocorreu um erro. Por favor tente novamente mais tarde."
            }
            setError(systemErrorMessage);
            setLoading(false);
        }
    }

    // Login
    const login = async (data) => {
        checkIfIsCancelled();
        setLoading(true);
        setError(false);

        try {
            await signInWithEmailAndPassword(auth, data.email, data.password);
            setLoading(false);
        } catch (error) {
            let systemErrorMessage;
            if (error.message.includes("user-not-found.")) {
                systemErrorMessage = "Usuário não encontrado";
            } else if (error.message.includes("wrong-password")) {
                systemErrorMessage = "Senha incorreta.";
            } else if (error.message.includes("invalid-credential")) {
                systemErrorMessage = "Usuário ou senha incorreto(s).";
            } else {
                systemErrorMessage = "Ocorreu um erro. Por favor tente novamente mais tarde."
            }
            setError(systemErrorMessage);
            setLoading(false);
        }
    }

    // Logout
    const logout = () => {
        checkIfIsCancelled();
        signOut(auth);
    }

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return {
        auth,
        createUser,
        error,
        loading,
        login,
        logout,
    }
}
