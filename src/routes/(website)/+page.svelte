<script lang="ts">
    import Teaser from '../../components/Teaser.svelte'
    import { articles, metaData } from '../../data/texts'
    export let data
    const { headline } = data
    const articleTeasers = articles.map((article) => article.teaser)
</script>

<svelte:head>
    <title>{metaData.title}</title>
    <meta name="description" content={metaData.description} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={metaData.title} />
    <meta property="og:site_name" content={metaData.title} />
    <meta property="og:description" content={metaData.description} />
    <meta property="og:image" content={metaData.image} />
    <meta property="og:url" content={metaData.url} />
</svelte:head>

<div class="hidden sm:block lg:px-8">
    <div class="lg:max-w-4xl">
        <div class="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
            <h1 class="text-2xl font-bold leading-7 text-slate-900">{headline}</h1>
        </div>
    </div>
</div>
<div class="divide-y divide-slate-200 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100">
    {#each articleTeasers as articleTeaser}
        <Teaser data={articleTeaser} prefix="articles" />
    {/each}

    <article class="py-5 sm:py-6">
        <div class="lg:px-8">
            <div class="lg:max-w-4xl">
                <div class="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0 text-xs text-slate-400">
                    Alex Milde | Pattweg 24 | 32051 Herford | USt-IdNr. DE268126828
                </div>
            </div>
        </div>
    </article>
</div>
