import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import  './Movie.css'
import './App.css'
import ComponentFavoritos from './components/ComponentFavoritos'
import ComponentMovie from './components/ComponentMovie'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Aula 1 React</h1>
      <ComponentMovie/>
      <ComponentFavoritos/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
