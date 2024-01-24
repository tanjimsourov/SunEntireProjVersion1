import React, { useEffect, useState } from 'react';
import useApiData from '../hooks/useApiData';
import setCookie from '../hooks/setCookie';
import getCookies from '../hooks/getCookies';
import Box from '../components/Box';
import { getFrData, getNlData, getData } from '../data';

const URL = "https://uatapi.display-anywhere.com/api/getenergysummary";

export default function Boxes({props}) {
  const [title, setTitle] = useState(getData())
  const { data, loading, error } = useApiData(URL);
  const [cookieData, setCookieData] = useState([]);

  useEffect(() => {

    setCookieData(getCookies());
    if(props == 'nl'){
      setTitle(getNlData())
    }else if(props == 'fr'){
      setTitle(getFrData())
    }

  }, [props.ln]);

  useEffect(() => {
    if (cookieData.length === 0 && !loading) {

        let result = data;
  
        result.map((item) => {
          return setCookie(item.title, item.speed);
        });
  
        setCookieData(result); // Update cookieData after setting the cookies
    }
  }, [cookieData, data, loading]);

  return (
    <>
      <div className="grid-3" id="boxes">
        {loading && cookieData.length === 0 && <h1>Loading...</h1>}
        {cookieData.map((item, idx) => {
          return <Box key={idx} title={title[idx].title} speed={item.speed} />;
        })}
      </div>
    </>
  );
}
