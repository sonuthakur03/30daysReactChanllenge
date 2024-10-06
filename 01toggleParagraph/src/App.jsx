import { useState } from 'react'
import './App.css'

function App() {
  const [visibility, setVisibility] = useState(true)

  return (
    <>
      {visibility && <p className="read-the-docs">
        Click on the Toggele Paragraph to toggle the visibility of paragraph
      </p>}
        <button onClick={() => setVisibility(!visibility)}>
          Toggle Paragraph
        </button>
    </>
  )
}

export default App