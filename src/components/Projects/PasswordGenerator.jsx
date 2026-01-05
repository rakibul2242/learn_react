import { useCallback, useEffect, useRef, useState } from "react";

function PasswordGenerator() {
  const [length, setLength] = useState(10);
  const [includeNumber, setIncludeNumber] = useState(false);
  const [includeCharacter, setIncludeCharacter] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let num = "0123456789";
    let chars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    if (includeNumber) str += num;
    if (includeCharacter) str += chars;

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(randomIndex);
    }
    setPassword(pass);
  }, [length, includeNumber, includeCharacter]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  const copyToClipboard = () => {
    console.log(passwordRef);
    if (!password || !passwordRef.current) return;
    passwordRef.current.select();
    passwordRef.current.setSelectionRange(0,password.length)
    window.navigator.clipboard.writeText(password);
  };
  return (
    <>
      <div className="bg-gray-900 h-screen w-full p-10 flex justify-center">
        <div className="bg-gray-700 rounded-md p-4 h-fit w-2/5">
          <div className="">
            <div className="rounded-lg flex justify-between items-center">
              <input
                type="text"
                className="bg-gray-200 w-full px-3 py-2 font-semibold text-orange-600 focus-visible:outline-0 rounded-l-lg"
                placeholder="Text Generate"
                value={password} ref={passwordRef} readOnly
              />
              <span
                className="px-3 py-2 rounded-r-lg select-none bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition font-semibold text-white text-base cursor-pointer"
                onClick={copyToClipboard}
              >
                copy
              </span>
            </div>
            <div className="pt-3 flex items-center gap-3 text-orange-500 font-semibold">
              <div className="flex items-center gap-1.5">
                <input
                  type="range"
                  id="length"
                  value={length}
                  className="cursor-pointer"
                  min={8}
                  max={100}
                  onChange={(event) => setLength(Number(event.target.value))}
                />
                <label htmlFor="length">Length: {length}</label>
              </div>
              <div className="flex items-center gap-1.5">
                <input
                  type="checkbox"
                  id="number"
                  checked={includeNumber}
                  onChange={(event) => setIncludeNumber(event.target.checked)}
                />
                <label htmlFor="number" className="cursor-pointer">
                  Number
                </label>
              </div>
              <div className="flex items-center gap-1.5">
                <input
                  type="checkbox"
                  id="character"
                  checked={includeCharacter}
                  onChange={(event) =>
                    setIncludeCharacter(event.target.checked)
                  }
                />
                <label htmlFor="character" className="cursor-pointer">
                  Character
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default PasswordGenerator;
