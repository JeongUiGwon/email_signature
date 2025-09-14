import React from 'react'
import type { SignatureData } from '../App'

interface SignatureFormProps {
  data: SignatureData
  onChange: (data: SignatureData) => void
}

const SignatureForm: React.FC<SignatureFormProps> = ({ data, onChange }) => {
  const handleInputChange = (field: keyof SignatureData, value: string) => {
    onChange({
      ...data,
      [field]: value
    })
  }

  return (
    <div className="signature-form">
      <h2>Signature Information Input</h2>
      <form className="form">
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            value={data.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            placeholder="JEONG UI-GWON"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="position">Position *</label>
          <input
            type="text"
            id="position"
            value={data.position}
            onChange={(e) => handleInputChange('position', e.target.value)}
            placeholder="Software Eng'"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="team">Team Name *</label>
          <input
            type="text"
            id="team"
            value={data.team}
            onChange={(e) => handleInputChange('team', e.target.value)}
            placeholder="Control Center Soft Design Team 1 Part"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            value={data.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            placeholder="+82 10- xxxx-xxxx"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            value={data.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            placeholder="ui-gwon_jeong@ulvac.com"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="website">Company Website *</label>
          <input
            type="url"
            id="website"
            value={data.website}
            onChange={(e) => handleInputChange('website', e.target.value)}
            placeholder="https://www.ulvackorea.co.kr"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="fontFamily">Font Family</label>
          <select
            id="fontFamily"
            value={data.fontFamily}
            onChange={(e) => handleInputChange('fontFamily', e.target.value)}
            className="font-select"
          >
            <option value="Arial">Arial</option>
            <option value="Helvetica">Helvetica</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Georgia">Georgia</option>
            <option value="Verdana">Verdana</option>
            <option value="Tahoma">Tahoma</option>
            <option value="Calibri">Calibri</option>
            <option value="Trebuchet MS">Trebuchet MS</option>
            <option value="Open Sans">Open Sans</option>
            <option value="Roboto">Roboto</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default SignatureForm
