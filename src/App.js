//?       App.js
//*       [IMPORT]
import React, { useEffect, useState } from "react";
import Conch from "./Conch";

function Skeleton() {
  return (
    <>
      <div className="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
        <div className="h-48 rounded-t bg-gray-700"></div>
        <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-900">
          <div className="w-full h-6 rounded bg-gray-700"></div>
          <div className="w-full h-6 rounded bg-gray-700"></div>
          <div className="w-3/4 h-6 rounded bg-gray-700"></div>
        </div>
      </div>
    </>
  );
}


function App({ kbve }) {

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
        //setData(data.slice(0, _limit));
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
        setError("error fetching from KBVE");
      });
  }, [_dataJSON, _limit]);



  return (
    <>
      {loading && <Skeleton />}
      {!loading && <Conch />}
    </>
  );
}

export default App;
