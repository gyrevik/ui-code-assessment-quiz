import { DOUBLE_QUOTE, APOSTROPHE } from './const'

export function cleanString(str: String) {
    str = str.replace(/&quot;/gi, DOUBLE_QUOTE)
    str = str.replace(/&#039;/gi, APOSTROPHE)
    return str;
}