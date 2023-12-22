import { getRandomInt } from '../../commons/utils'
import type { PageServerLoad } from './$types'

const headlines = [
    'Maybe its a user error?',
    'We should refactor this.',
    'Thats hard to read',
    'Does it happen on staging aswell?',
    'Might be a typo',
]

export const load: PageServerLoad = async () => {
    const headline = headlines[getRandomInt(0, headlines.length - 1)]

    return {
        headline,
    }
}
