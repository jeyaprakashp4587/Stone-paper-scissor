import React, { createContext, useContext, useState } from 'react'

const Export = createContext();

export const Dataexport = ({children}) => {
    const [paperdata, setPaper] = useState("");
    const [scissordata, setScissor] = useState("");
    const [rockdata, setRock] = useState("");
    const [score, setScore] = useState(0);
    const [mainclick,setMainclick] = useState(true);
  return (
    <Export.Provider value={{paperdata, setPaper,scissordata, setScissor, rockdata, setRock,score, setScore,mainclick,setMainclick}}>
      {children}
    </Export.Provider>
  )
}

export const useData = () =>{
    return useContext(Export)
}