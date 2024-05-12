export interface Movie {
  uid: string,
  title: string,
  mainDirector: {
    uid: string,
    name: string
  },
  titleBulgarian: string | null,
  titleCatalan: string | null,
  titleChineseTraditional: string | null,
  titleGerman: string | null,
  titleItalian: string | null,
  titleJapanese: string | null,
  titlePolish: string | null,
  titleRussian: string | null,
  titleSerbian: string | null,
  titleSpanish: string | null,
  stardateFrom: number,
  stardateTo: number,
  yearFrom: number,
  yearTo: number,
  usReleaseDate: string | null,
}

