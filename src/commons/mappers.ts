import { iconTypes } from './constants'

export const determineIconType = (url: string): string => {
    if (url.includes('github.com')) return iconTypes.git

    return iconTypes.unknown
}
