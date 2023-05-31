//?       App.js
//*       [IMPORT]
import React, { useEffect, useState } from "react";
import Conch from "./Conch";
import VE from "./VE";
function App({ kbve }) {
  const _ve = new VE();
  const _limit = kbve.getAttribute("data-limit");
  const _dataJSON = kbve.getAttribute("data-json");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://kbve.com/${_dataJSON}/${_dataJSON}.json`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setData(data.slice(0, _limit));
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
        setError("error fetching from KBVE");
      });
  }, [_dataJSON, _limit]);



  return (
    <>
      {loading && _ve.skeleton()}
      {!loading && <Conch />}
    </>
  );
}

export default App;
