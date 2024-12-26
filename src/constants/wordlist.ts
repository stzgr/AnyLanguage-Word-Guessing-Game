import { CONFIG } from './config'

export const WORDS = [
'MAUER',
'DUELL',
'BULLE',
'KAMIN',
'TROSS',
'TREUE',
'AKTIE',
'KEHLE',
'LADEN',
'SPIEL',
'BLATT',
'MINUS',
'HACKE',
'KONTO',
'DRAHT',
'ZENIT',
'LYRIK',
'BRAUN',
'SPEER',
'TITEL',
'GNADE',
'FUENF',
'VORIG',
'BONUS',
'PASTA',
'HALDE',
'HANDY',
'PERLE',
'CIRKA',
'STOFF',
'KABEL',
'MENSA',
'ABZUG',
'GEBEN',
'STUCK',
'DUETT',
'UNTEN',
'EINIG',
'ANGEL',
'STIEL',
'JUBEL',
'JACKE',
'POLAR',
'WEISE',
'MONAT',
'LATTE',
'DRANG',
'STARK',
'REGIE',
'SALDO',
]

if (CONFIG.normalization) {
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

if (CONFIG.shuffle) {
  shuffle(WORDS)
}
