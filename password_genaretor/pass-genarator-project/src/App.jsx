import { useCallback, useEffect, useState,useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null)
  const passwordgen = useCallback(() => {
    let pass = "";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789"
    if (character) str += "~!@#$%^&*(){}+-"
    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length );
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, number, character, setPassword]);

  const copyClipboard= useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,50);
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
      passwordgen()
  },[length, number, character, setPassword,passwordgen])
  return (
    <>
      <h1 className="text-4xl text-center">PassWord Genaretor</h1>
      <div className="w-full max-w-md  mx-auto shadow-md rounded-xl px-5 py-6 my-8 text-gray-300 bg-gray-400 text-center">
        <div className="flex shadow rounded-md overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="bg-white text-gray-400 font-semibold text-2xl outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyClipboard} className=" outline-none bg-blue-500 px-2 text-2xl hover:bg-blue-700 shrink-0">
            copy
          </button>
        </div>
        <div className="flex text-sm sm:flex-row gap-x-2 flex-col">
          <div className="flex items-center gap-x-1 flex-col sm:flex-row">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className="cursor-pointer "
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className=" text-blue-700 text-md">Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1 ">
            <input
              type="checkbox"
              defaultChecked={number}
              id="numberInput"
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            />
            <label className=" text-blue-700 text-md"> Numbers</label>
          </div>
          <div className="flex items-center gap-x-1 ">
            <input
              type="checkbox"
              defaultChecked={character}
              id="charecterInput"
              onChange={() => {
                setCharacter((prev) => !prev);
              }}
            />
            <label className=" text-blue-700 text-md"> Charecters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
