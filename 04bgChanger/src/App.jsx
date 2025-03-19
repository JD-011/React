import {useState} from "react";

function App() {
    const [color, setColor] = useState("black");
    return (
        <div className={"w-full h-screen"} style={{backgroundColor: color}}>
            <div className={"fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"}>
                <div className={"flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-2xl font-bold"}>
                    <button onClick={() => setColor("red")} className={"cursor-pointer outline-none px-4 py-1 rounded-full bg-red-500 text-white shadow-xl"}>Red</button>
                    <button onClick={() => setColor("green")} className={"cursor-pointer outline-none px-4 py-1 rounded-full bg-green-500 text-white shadow-xl"}>Green</button>
                    <button onClick={() => setColor("blue")} className={"cursor-pointer outline-none px-4 py-1 rounded-full bg-blue-500 text-white shadow-xl"}>Blue</button>
                    <button onClick={() => setColor("olive")} className={"cursor-pointer outline-none px-4 py-1 rounded-full text-white shadow-xl "} style={{backgroundColor : "olive"}}>Olive</button>
                    <button onClick={() => setColor("gray")} className={"cursor-pointer outline-none px-4 py-1 rounded-full bg-gray-500 text-white shadow-xl"}>Gray</button>
                    <button onClick={() => setColor("yellow")} className={"cursor-pointer outline-none px-4 py-1 rounded-full bg-yellow-500 text-white shadow-xl"}>Yellow</button>
                    <button onClick={() => setColor("pink")} className={"cursor-pointer outline-none px-4 py-1 rounded-full bg-pink-500 text-white shadow-xl"}>Pink</button>
                    <button onClick={() => setColor("purple")} className={"cursor-pointer outline-none px-4 py-1 rounded-full bg-purple-500 text-white shadow-xl"}>Purple</button>
                    <button onClick={() => setColor("lavender")} className={"cursor-pointer outline-none px-4 py-1 rounded-full shadow-xl"} style={{backgroundColor : "lavender"}}>Lavender</button>
                    <button onClick={() => setColor("white")} className={"cursor-pointer outline-none px-4 py-1 rounded-full bg-white shadow-xl"}>White</button>
                    <button onClick={() => setColor("black")} className={"cursor-pointer outline-none px-4 py-1 rounded-full bg-black text-white shadow-xl"}>Black</button>
                </div>
            </div>
        </div>
    )
}

export default App
