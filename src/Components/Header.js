import { useState, useContext } from "react"
import { InputContext } from "../App"

export default function Header() {

    const [value, setValue] = useState("")

    const { inputValue, setInputValue } = useContext(InputContext)

    const handleInput = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = () => {
        setInputValue(value)
        setValue("")
    }

    const handleInputKeyDown = (e) => {
        if(e.key === "Enter"){
            setInputValue(value)
            setValue("")
        }
    }

    return (
        <div className="bg-purple-600">
            <div className="container mx-auto py-8">
                <h1 className="text-4xl font-bold text-center text-white">A Dictionary</h1>
                <p className="text-center mt-1 mb-10 text-slate-300 text-lg">Find definitions for words</p>
                <div className="flex items-center justify-center mt-5 ">
                    <div className="flex border-4 border-gray-200 rounded">
                        
                        <input 
                            className="outline-none px-4 md:w-80" 
                            type="text" 
                            placeholder="Type anything ..."
                            onChange={handleInput}
                            value={value}
                            onKeyDown={handleInputKeyDown}
                        />
                        
                        <button 
                            className="bg-purple-900 py-2 px-4 text-white"
                            onClick={handleSubmit}
                        >
                            Search
                        </button>

                    </div>
                </div>
            </div>
            {inputValue && (
                <h3 className="text-gray-100 text-center py-4">Result for <span className="text-white font-semibold">{inputValue}</span></h3>
            )}
        </div>
    )
}