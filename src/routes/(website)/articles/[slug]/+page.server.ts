import { error } from '@sveltejs/kit'
import { articleTeasers, articles } from '../../../../data/texts'
import type { PageServerLoad } from './$types'
import type { Article } from '../../../../commons/types'

export const load: PageServerLoad = (async ({ params }) => {
    const slugs = articleTeasers.map((articleTeaser) => articleTeaser.slug)
    const article: Article | undefined = articles
        .filter((article: Article) => article.teaser.slug === params.slug)
        .shift()

    if (!slugs.includes(params.slug) || article === undefined) {
        throw error(500)
    }

    return { article }
}) satisfies PageServerLoad
