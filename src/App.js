import Header from './Components/Header'
import Result from './Components/Result'
import { createContext, useState } from 'react'

export const InputContext = createContext()


export default function App() {

  const [inputValue, setInputValue ] = useState("")
  const value = { 
    inputValue, setInputValue
  }
  console.log(inputValue)
  return (
    <InputContext.Provider value={value}>
      <div className="App">
        <Header />
        <Result />
      </div>
    </InputContext.Provider>
  )
}