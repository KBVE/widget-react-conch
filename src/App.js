//?       App.js
//*       [IMPORT]
import React, { useEffect, useState } from "react";
import Conch from "./Conch.js";
import Util from "./lib/Util.js";
import { user$, funky } from "./lib/API.js";
import { useStore } from '@nanostores/react';


function App({ kbve }) {
  //const _limit = kbve.getAttribute("data-limit");
  //const _dataJSON = kbve.getAttribute("data-json");

  const [loading, setLoading] = useState(true);

  //const $user = useStore(user$);

  useEffect(() => {
    const fetchUser = async () => {
      await Util.sleep(1000); //Forced Pause
      
      //auth();
      setLoading(false);
    };
      fetchUser();
  }, []);

  return (
    <>
      {loading && Util.skeleton()}
      {!loading && <Conch />}
      
      
    </>
  );
}

export default App;
