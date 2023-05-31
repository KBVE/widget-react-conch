import React, { useEffect, useState } from "react";
// import * as ReactDOM from 'react-dom';
import useSound from "use-sound";


const Conch = ({ conchMsg }) => {

    const [playYes] = useSound("./yes.mp3"); // useSound("https://kbve.com/assets/audio/yes.ogg");
    const [playNo] = useSound("./no.mp3"); // useSound("https://kbve.com/assets/audio/no.ogg");
      

}

export default Conch;