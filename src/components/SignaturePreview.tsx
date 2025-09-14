import React, { useRef, useEffect } from 'react'
import type { SignatureData } from '../App'
import ulvacLogo from '../assets/ulvac_logo.png'

interface SignaturePreviewProps {
  data: SignatureData
}

const SignaturePreview: React.FC<SignaturePreviewProps> = ({ data }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const drawSignature = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Canvas 크기 설정
    canvas.width = 600
    canvas.height = 200

    // 배경을 흰색으로 설정
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // 폰트 설정 (선택된 폰트 사용)
    const selectedFont = data.fontFamily || 'Arial'
    const nameFont = `bold 22px ${selectedFont}, sans-serif`
    const positionFont = `12px ${selectedFont}, sans-serif`
    const contactFont = `12px ${selectedFont}, sans-serif`

    let yPosition = 40

    // ULVAC 로고 이미지 로드 및 그리기
    const logo = new Image()
    logo.onload = () => {
      const logoHeight = 35
      const logoWidth = (logo.width * logoHeight) / logo.height
      
      ctx.drawImage(logo, 20, yPosition - logoHeight, logoWidth, logoHeight)
      
      // 나머지 텍스트 그리기
      drawTextContent(ctx, yPosition + 10, nameFont, positionFont, contactFont)
    }
    logo.src = ulvacLogo
  }

  const drawTextContent = (ctx: CanvasRenderingContext2D, startY: number, nameFont: string, positionFont: string, contactFont: string) => {
    let yPosition = startY + 20

    // 이름과 직무
    if (data.name) {
      ctx.fillStyle = '#000000'
      ctx.font = nameFont
      ctx.fillText(data.name, 20, yPosition)
      const nameWidth = ctx.measureText(data.name).width
      
      if (data.position) {
        ctx.font = positionFont
        ctx.fillText(data.position, 20 + nameWidth + 15, yPosition)
      }
      yPosition += 30
    }

    // 연락처 정보
    const contactInfo = [
      { icon: '🏢', text: data.team },
      { icon: '📞', text: data.phone },
      { icon: '✉️', text: data.email },
      { icon: '🌐', text: data.website }
    ]

    ctx.font = contactFont
    contactInfo.forEach(({ icon, text }) => {
      if (text) {
        ctx.fillStyle = '#000000'
        ctx.fillText(`${icon} ${text}`, 20, yPosition)
        yPosition += 20
      }
    })
  }

  const downloadSignature = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Canvas를 JPG 이미지로 변환
    const link = document.createElement('a')
    link.download = `${data.name || 'signature'}.jpg`
    link.href = canvas.toDataURL('image/jpeg', 0.9)
    link.click()
  }


  useEffect(() => {
    drawSignature()
  }, [data])  

  const hasData = Object.values(data).some(value => 
    typeof value === 'string' && value.trim() !== ''
  )

  return (
    <div className="signature-preview">
      <h2>Signature Preview</h2>
      
      <div className="preview-container">
        <canvas
          ref={canvasRef}
          className="signature-canvas"
          style={{
            border: '1px solid #ddd',
            backgroundColor: '#ffffff',
            maxWidth: '100%',
            height: 'auto'
          }}
        />
      </div>

      {hasData && (
        <button 
          className="download-button"
          onClick={downloadSignature}
        >
          Download as JPG file
        </button>
      )}

      {!hasData && (
        <p className="preview-placeholder">
          Enter information in the left form to display the preview.
        </p>
      )}

      <div className="feedback-section">
        <p>For bug reports and suggestions, <br/> please email: <a href="mailto:ui-gwon_jeong@ulvac.com" className="feedback-email">ui-gwon_jeong@ulvac.com</a></p>
      </div>
    </div>
  )
}

export default SignaturePreview
