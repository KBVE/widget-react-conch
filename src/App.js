//?       App.js
//*       [IMPORT]
import React, { useEffect, useState } from "react";
import Conch from "./Conch.js";

function App({ kbve }) {
  //const _limit = kbve.getAttribute("data-limit");
  //const _dataJSON = kbve.getAttribute("data-json");

  const [loading, setLoading] = useState(true);

  const Skeleton = () => {
    return (
      <>
        <div className="flex flex-col rounded shadow-md w-full animate-pulse h-128">
          <div className="h-48 rounded-t bg-gray-700"></div>
          
          <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-900">
            <div className="w-full h-6 rounded bg-gray-700"></div>
            <div className="w-full h-6 rounded bg-gray-700"></div>
            <div className="w-3/4 h-6 rounded bg-gray-700"></div>
          </div>
        </div>
     </>
    );
  };

  useEffect(() => {
    const fetchUser = async () => {      
      //auth();
      setLoading(false);
    };
      fetchUser();
  }, []);

  return (
    <>
      {loading && <Skeleton />}
      {!loading && <Conch />}
      
      
    </>
  );
}

export default App;
