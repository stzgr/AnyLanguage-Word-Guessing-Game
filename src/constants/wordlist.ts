import { CONFIG } from './config'

export const WORDS = [
'mauer',
'bauer',
'duell',
'bulle',
'kamin',
'tross',
'treue',
'aktie',
'kehle',
'laden',
'spiel',
'blatt',
'minus',
'hacke',
'konto',
'draht',
'zenit',
'lyrik',
'braun',
'speer',
'titel',
'gnade',
'fuenf',
'vorig',
'bonus',
'pasta',
'halde',
'handy',
'perle',
'cirka',
'stoff',
'kabel',
'mensa',
'abzug',
'geben',
'stuck',
'duett',
'unten',
'einig',
'angel',
'stiel',
'jubel',
'jacke',
'polar',
'weise',
'monat',
'latte',
'drang',
'stark',
'regie',
'saldo', 
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
