import { useState } from 'react'
import './App.css'
import SignatureForm from './components/SignatureForm'
import SignaturePreview from './components/SignaturePreview'
// import AdBanner from './components/AdBanner'

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
      
      <div className="app-container">
        {/* 좌측 광고 */}
        {/* <div className="ad-sidebar ad-left">
          <AdBanner 
            adSlot="5539210947"
            adFormat="vertical"
            adStyle={{ display: 'block', width: '160px', height: '600px' }}
            className="sidebar-ad"
          />
        </div> */}

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

        {/* 우측 광고 */}
        {/* <div className="ad-sidebar ad-right">
          <AdBanner 
            adSlot="5539210947"
            adFormat="vertical"
            adStyle={{ display: 'block', width: '160px', height: '600px' }}
            className="sidebar-ad"
          />
        </div> */}
      </div>
    </div>
  )
}

export default App
