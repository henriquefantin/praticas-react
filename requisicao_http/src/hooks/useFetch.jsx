import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState(null);

    // Refatorar o POST
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(null);

    // Refatorar o DELETE
    const [id, setId] = useState(null);

    // Loading
    const [loading, setLoading] = useState(false);

    // Tratar erros
    const [error, setError] = useState(null);

    const httpConfig = (data, method, id) => {
        if (method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data),
            });
            setMethod(method);
        } else if (method === "DELETE") {
            setConfig({
                method,
                headers: {
                    "Content-Type": "application/json"
                },
            });
            setMethod(method);
            setId(id);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url);
                const json = await response.json();
                setData(json);
            } catch (error) {
                setError("Houve algum erro ao carregar os dados!");
            }

            setLoading(false);
        }
        fetchData();
    }, [url, callFetch]);

    useEffect(() => {
        const httpRequest = async () => {
            if (method === "POST" || method === "DELETE") {
                let fetchOptions = [];
                if (method === "POST") {
                    fetchOptions = [url, config];
                }else if (method === "DELETE") {
                    const deleteUrl = `${url}/${id}`;
                    fetchOptions = [deleteUrl, config];
                }
                const response = await fetch(...fetchOptions);
                const json = await response.json();
                setCallFetch(json);
            }
        }
        httpRequest();
    }, [config, method, url]);

    return { data, httpConfig, loading, error };
}