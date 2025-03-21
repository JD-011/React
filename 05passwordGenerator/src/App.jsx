import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
    const [length, setLength] = useState(8)
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [charAllowed, setCharAllowed] = useState(false)
    const [password, setPassword] = useState("")
    const passwordRef = useRef(null)
    const passwordGenerator = useCallback(() => {
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if(numberAllowed) str += "0123456789"
        if(charAllowed) str += "~!@#$%^&*()_+{}`-=[]"
        for(let i = 0; i < length; i++) {
            pass += str[Math.floor(Math.random() * str.length)]
        }
        setPassword(pass)
    }, [length, numberAllowed, charAllowed, setPassword])
    const copyPasswordToClipboard = useCallback(() => {
        passwordRef.current?.select()
        // passwordRef.current?.setSelectionRange(0, 3)
        window.navigator.clipboard.writeText(password)
    }, [password])
    useEffect(() => {passwordGenerator()}, [length, charAllowed, numberAllowed, passwordGenerator]) // Interesting: it still works with deps: [passwordGenerator] only, you know why???
    return (
        <>
            <h1 className={"text-4xl text-center font-bold text-white mt-4"}>Password Generator</h1>
            <div className={"w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-700"}>
                <div className={"flex w-full shadow rounded-lg overflow-hidden my-4"}>
                    <input
                    type={"text"}
                    value={password}
                    className={"outline-none w-full px-3 py-1 bg-white text-gray-700 font-bold"}
                    placeholder="Password"
                    readOnly
                    ref={passwordRef}
                    />
                    <button
                        onClick={copyPasswordToClipboard}
                        className={"outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer"}
                    >copy</button>
                </div>
                <div className={"flex text-sm gap-x-2"}>
                    <div className={"flex items-center gap-x-2"}>
                        <input
                            type={"range"}
                            min={6}
                            max={100}
                            value={length}
                            className={"cursor-pointer"}
                            onChange={(e) => {setLength(e.target.value)}}
                        />
                        <label className={"font-semibold"}>Length: {length}</label>
                    </div>
                    <div className={"flex items-center gap-x-1"}>
                        <input
                            type={"checkbox"}
                            defaultChecked={numberAllowed}
                            className={"cursor-pointer"}
                            id="numberInput"
                            onChange={() => {setNumberAllowed((prev) => !prev)}}
                        />
                        <label htmlFor={"numberInput"} className={"font-semibold"}>Number</label>
                    </div>
                    <div className={"flex items-center gap-x-1"}>
                        <input
                            type={"checkbox"}
                            defaultChecked={charAllowed}
                            className={"cursor-pointer"}
                            id="charInput"
                            onChange={() => {setCharAllowed((prev) => !prev)}}
                        />
                        <label htmlFor={"charInput"} className={"font-semibold"}>Character</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
