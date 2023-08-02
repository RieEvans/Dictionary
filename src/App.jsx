import React, { createContext, useState } from "react";
import { Header } from "./components/Header";
import { WordResult } from "./components/WordResult";

// Create a context
export const InputContext = createContext()

export default function App() {

  const [inputValue, setInputValue] = useState("")

  return (
    <InputContext.Provider value={{inputValue, setInputValue }}>
    <main>
      <Header />
      <WordResult />
    </main>
    </InputContext.Provider>
    
  )
}