// Performs general stasistics across data.
import cache from './cache';
import {CONTRACTIONS,EMOTICON} from './lists';

const CACHE = new cache();

// Stripts to semantically meaningful parts
//  split into sentences > tokens:
// * emoticon
// *| [alpha-_] | len > 2
const SENTENCE_TERMINATORS = /\s*(.|!|?|\n\n)\s*/;
const MEANINGLESS = ["the"];

export function NORMALIFY(DATA) {
    DATA = DATA.toLowerCase(); // simplified things so much
    
    // Handle contractions
    CONTRACTIONS.forEach((V, K) => {
        DATA = DATA.replace(new RegExp(K, "g"), V);
    });
    
    
    return DATA;
}