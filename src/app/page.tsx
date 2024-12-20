import ReclaimQRCode from './components/ReclaimQRCode'
import ReclaimService from './service/ReclaimService'

export default async function ReclaimDemoPage() {
  const {
    NEXT_PUBLIC_APP_ID,
    NEXT_PUBLIC_APP_SECRET,
    NEXT_PUBLIC_PROVIDER_ID,
  } = process.env

  if (
    !NEXT_PUBLIC_APP_ID ||
    !NEXT_PUBLIC_APP_SECRET ||
    !NEXT_PUBLIC_PROVIDER_ID
  ) {
    return <p>Reclaim credentials are not set in the environment variables.</p>
  }

  try {
    const reclaimService = new ReclaimService(
      NEXT_PUBLIC_APP_ID,
      NEXT_PUBLIC_APP_SECRET,
      NEXT_PUBLIC_PROVIDER_ID
    )
    const requestUrl = await reclaimService.getVerificationRequestUrl()

    return <ReclaimQRCode requestUrl={requestUrl} />
  } catch (error) {
    console.error('Error generating Reclaim request URL:', error)
    return <p>Failed to generate QR Code. Please try again later.</p>
  }
}
