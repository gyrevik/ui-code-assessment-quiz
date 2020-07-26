import { DOUBLE_QUOTE } from './const'

export function cleanString(str: String) {
    str = str.replace(/&quot;/gi, DOUBLE_QUOTE)
    return str;
}