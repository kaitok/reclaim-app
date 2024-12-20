import { ReclaimProofRequest } from '@reclaimprotocol/js-sdk'

export default class ReclaimService {
  private appId: string
  private appSecret: string
  private providerId: string
  private reclaimProofRequest?: ReclaimProofRequest

  constructor(appId: string, appSecret: string, providerId: string) {
    if (!appId || !appSecret || !providerId) {
      throw new Error('Reclaim credentials are not properly set.')
    }

    this.appId = appId
    this.appSecret = appSecret
    this.providerId = providerId
  }

  private async initialize() {
    this.reclaimProofRequest = await ReclaimProofRequest.init(
      this.appId,
      this.appSecret,
      this.providerId
    )
  }

  async getVerificationRequestUrl(): Promise<string> {
    if (!this.reclaimProofRequest) {
      await this.initialize()
    }

    if (!this.reclaimProofRequest) {
      throw new Error('Failed to initialize ReclaimProofRequest.')
    }

    return await this.reclaimProofRequest.getRequestUrl()
  }
}
