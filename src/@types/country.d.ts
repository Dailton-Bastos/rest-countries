export interface Country {
  name: {
    common: string
    official: string
  }
  population: number
  region: string
  subregion: string
  capital: string[]
  latlng: number[]
  flags: {
    png: string
    svg: string
    alt?: string
  }
  currencies: {
    [key: string]: {
      name: string
    }
  }
  languages: {
    [key: string]: string
  }
  tld: string[]
  independent: boolean
  borders: string[]
}
