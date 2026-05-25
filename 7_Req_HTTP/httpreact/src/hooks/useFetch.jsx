import { useState, useEffect } from "react";

// 4 - custom hook
export const useFetch = (url) => {
  const [data, setData] = useState(null);

  // 5 - refatorando post e delete
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

  // 6 - loading
  const [loading, setLoading] = useState(false);

  // 7 - tratando erros
  const [error, setError] = useState(null);

  // 8 - desafio 6
  const [itemId, setItemId] = useState(null);

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      setMethod(method);
    } else if (method === "DELETE") {
      setConfig({
        method,
        headers: {
          "Content-Type": "application/json"
        }
      });
      setMethod(method);
      setItemId(data);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      // 6 - loading
      setLoading(true);

      // 7 - limpando erro antes
      setError(null);

      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
      } catch {
        setError("Houve algum erro ao carregar os dados");
      }

      setLoading(false);
    };

    fetchData();
  }, [url, callFetch]);

  // 5 e 8 - POST e DELETE
  useEffect(() => {
    const httpRequest = async () => {
      if (!config) return;

      let fetchUrl = url;

      if (method === "DELETE" && itemId) {
        fetchUrl = `${url}/${itemId}`;
      }

      try {
        await fetch(fetchUrl, config);
        setCallFetch(prev => !prev);
      } catch {
        setError("Houve algum erro ao enviar os dados");
      }
    };

    httpRequest();
  }, [config, method, url, itemId]);

  return { data, httpConfig, loading, error };
};
