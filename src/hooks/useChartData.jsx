// CustomHook.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const useApiData = (URL) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.post(URL)
      .then(resp => {
        if (resp.status === 200) {
            const res = JSON.parse(resp.data.data)
            setData(res);
        }
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });

  }, [URL]);

  return { data, loading, error };
};

export default useApiData;
