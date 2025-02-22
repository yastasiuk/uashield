export interface ProxyData {
  auth: string
  id: number
  ip: string
}

export interface SiteData {
  atack: number
  id: number
  // eslint-disable-next-line camelcase
  need_parse_url: number
  page: string
  // eslint-disable-next-line camelcase
  page_time: number
  url: string
}

export interface TargetData {
  site: SiteData
  proxy: Array<ProxyData>
}

export type DoserEventType = 'atack' | 'error'
