import { useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import { CounterContext } from './context/counter'

function App() {
  const counterState = useContext(CounterContext)
  return (
    <>
      <div>
        <h1>Count is {counterState.count}</h1>
        <Counter/>
        <Counter/>
        <Counter/>
        <Counter/>
      </div>
    </>
  )
}

export default App
