import { useState } from 'react'
import './App.css'
import SignatureForm from './components/SignatureForm'
import SignaturePreview from './components/SignaturePreview'

export interface SignatureData {
  name: string
  position: string
  team: string
  phone: string
  email: string
  website: string
  fontFamily: string
}

function App() {
  const [signatureData, setSignatureData] = useState<SignatureData>({
    name: '',
    position: '',
    team: '',
    phone: '',
    email: '',
    website: '',
    fontFamily: 'Arial'
  })

  return (
    <div className="app">
      <header className="app-header">
        <h1>Email Signature Generator</h1>
        <p>Enter information and download as JPG file</p>
      </header>
      
      <main className="app-main">
        <div className="form-section">
          <SignatureForm 
            data={signatureData} 
            onChange={setSignatureData} 
          />
        </div>
        
        <div className="preview-section">
          <SignaturePreview data={signatureData} />
        </div>
      </main>
    </div>
  )
}

export default App
