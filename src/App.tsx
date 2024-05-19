import React, {FC} from 'react';
import './App.css';
import Chrachter from "./components/charachter/Chrachter";

const App:FC=()=>{
  return(
      <>
         <Chrachter name = {'bart'}
                    image = {'https://freepngimg.com/thumb/bart_simpson/8-2-bart-simpson-transparent.png'}/>
      </>

  );
}
export default App;
