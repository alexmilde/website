import { iconTypes } from './constants'

export const determineIconType = (url: string): string => {
    if (url.includes('github.com')) return iconTypes.git
    if (url.includes('/ai/')) return iconTypes.more
    if (url.includes('langchain.com')) return iconTypes.more

    return iconTypes.unknown
}
