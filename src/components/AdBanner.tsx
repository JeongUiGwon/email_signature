import React, { useEffect } from 'react'

interface AdBannerProps {
  adSlot: string
  adFormat?: string
  adStyle?: React.CSSProperties
  className?: string
}

const AdBanner: React.FC<AdBannerProps> = ({ 
  adSlot, 
  adFormat = 'auto', 
  adStyle = { display: 'block' },
  className = ''
}) => {
  useEffect(() => {
    try {
      // AdSense 광고 초기화
      if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({})
      }
    } catch (error) {
      console.log('AdSense not available:', error)
    }
  }, [])

  return (
    <div className={`ad-banner ${className}`}>
      <ins 
        className="adsbygoogle"
        style={adStyle}
        data-ad-client="ca-pub-6267757502761238"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      />
    </div>
  )
}

export default AdBanner
