import React, { useEffect, useRef } from "react";
import { useCallback } from "react";
import { useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState("gfnf");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "@#$%^&*!/<>";
    }
    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length + 1);
      let val = str.charAt(index);
      pass += val;
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);
  let passwordRef = useRef(null)
  useEffect(() => {
    passwordGenerator()
  },
    [length,numberAllowed,charAllowed,passwordGenerator])
  let copyToClipboard = () => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,length)
    window.navigator.clipboard.writeText(Password)
  }
  return (
    <>
      <div className="w-full h-screen text-center bg-black text-white text-3xl">
        <h1 className="relative top-5">Password Generator</h1>
        <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-10 py-10  text-orange-800 bg-gray-800 my-6">
          <div className="flex overflow-hidden my-2 ">
            <input
              type="text"
              className="outline-none w-full my-4 text-black"
              value={Password}
              ref={passwordRef}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              readOnly
            />
            <button onClick={copyToClipboard} className="bg-blue-800 text-[24px] text-white rounded-lg my-3 px-1.5">
              copy
            </button>
          </div>

          <div className="flex gap-x-6 text-lg">
            <div className="flex items-center gap-x-2">
              <input
                type="range"
                className="cursor-pointer"
                id="range"
                min={8}
                max={15}
                value={length}
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />

              <label htmlFor="range">Length:{length}</label>
            </div>
            <div className="flex  items-center">
              <input 
                className="gap-x-4" 
                type="checkbox" 
                defaultChecked = {numberAllowed}
                id="numberInput"
                onChange={() => {
                  setNumberAllowed((prev) => !prev)
                }}
              
              
              
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className="flex  items-center">
              <input 
                className="gap-x-4" 
                type="checkbox" 
                defaultChecked = {charAllowed}
                id="numberChar"
                onChange={() => {
                  setCharAllowed((prev) => !prev)
                }}
              
              
              
              />
              <label htmlFor="numberChar">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
