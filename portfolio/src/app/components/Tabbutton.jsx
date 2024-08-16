import React from 'react'

const Tabbutton = ({active,selecttab,children}) => {
const buttonclasses = active  ?"text-white border-b border-blue-500" : "text-[#ADB7BE]";

  return (
    <button onClick={selecttab}>
        <p className =  {`mr-3 font-semibold hover:text-white ${buttonclasses}`}  >
        {children}
        </p>
        </button>
  )
}

export default Tabbutton