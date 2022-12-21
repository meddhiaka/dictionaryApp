import { useState, useEffect, useContext } from "react"
import { InputContext } from "../App"
import MeaningList from "./subComp/MeaningList"
import Example from "./subComp/Example"

export default function Result() {
    
    const [response, setReponse] = useState(null)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const { inputValue, setInputValue } = useContext(InputContext)

    async function fetchData(word) {
        try{
            setLoading(true)
            let URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/'
            let fullURL = `${URL}${word}`
            let jsonFile= await fetch(fullURL)
            jsonFile = await jsonFile.json()
            setReponse(jsonFile)
            setError(false)
        }
        catch (err) {
            let b = true
            setError(b)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if(inputValue.length) {
            fetchData(inputValue)
        }
    }, [inputValue])
    
    if(loading){
        
        return (
            <div className="flex flex-col space-y-3 animate-pulse p-4 container mx-auto max-w-2xl">
                <div className="h-6 bg-gray-400 mt-5 rounded-md"></div>
                <div className="h-20 bg-gray-400 mt-5 rounded-md"></div>
                <div className="h-8 bg-gray-400 mt-5 rounded-md"></div>
                <div className="h-10 bg-gray-400 mt-5 rounded-md"></div>
            </div>
        )
    }

    if(error == true){
        return <h3 className="text-center p-10">no data found</h3>
    }
    console.log(response)
    return (
        <div className='container mx-auto p-4 max-w-2xl'>
            {
                response && 
                (
                    <div>
                        <h3 className="text-xl font-semibold mt-4 mb-2">Meaning & Definitions :</h3>
                        <MeaningList obj={response}/>
                        <h3 className="text-xl font-semibold mt-4">Example :</h3>
                        <Example obj={response}/>
                    </div>
                )
            }
        </div>
    )
}