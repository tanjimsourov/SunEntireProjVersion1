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
          const res = JSON.parse(resp.data.data);

          const formattedData = Object.entries(res[0]).map(([title, speed]) => ({
            title: title.charAt(0).toUpperCase() + title.slice(1), // Capitalize the first letter
            speed: `${speed} ${title === 'yearly' ? 'MWh' : 'kWh'}`
          }));
          setData(formattedData);
        }
        setLoading(false); // Move setLoading(false) outside the conditional block
      })
      .catch(error => {
        setError(error);
        setLoading(false); // Move setLoading(false) here as well
      });

  }, [URL]);

  return { data, loading, error };
};

export default useApiData;
