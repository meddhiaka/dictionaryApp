import Header from './Components/Header'
import Result from './Components/Result'
import { createContext, useState } from 'react'
import Credits from './Components/Credits'

export const InputContext = createContext()


export default function App() {

  const [inputValue, setInputValue ] = useState("")
  
  const value = { 
    inputValue, setInputValue
  }

  return (
    <InputContext.Provider value={value}>
      <div className="App font-poppins">
        <Header />
        <Result />
        <Credits />
      </div>
    </InputContext.Provider>
  )
}