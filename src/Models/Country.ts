export interface Country {
    capital : string
    independent : boolean
    name: string
    population: number
    region: string
    flags: FlagsType
}

type FlagsType = {
    png: string
    svg: string
}