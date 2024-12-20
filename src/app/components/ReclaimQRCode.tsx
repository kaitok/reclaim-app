'use client'

import type React from 'react'
import QRCode from 'react-qr-code'

interface ReclaimQRCodeProps {
  requestUrl: string
}

const ReclaimQRCode: React.FC<ReclaimQRCodeProps> = ({ requestUrl }) => {
  return (
    <div>
      <h1>Reclaim QR Code</h1>
      {requestUrl ? (
        <div style={{ margin: '20px 0' }}>
          <QRCode value={requestUrl} />
        </div>
      ) : (
        <p>Failed to generate QR Code.</p>
      )}
    </div>
  )
}

export default ReclaimQRCode
