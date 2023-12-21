<script lang="ts">
    import Teaser from '../components/Teaser.svelte'
    import { articleTeasers } from '../data/texts'
    import { getRandomInt } from '../commons/utils'
    const headlines = [
        'Maybe its a user error?',
        'We should refactor this.',
        'Thats hard to read',
        'Does it happen on staging aswell?',
        'Might be a typo',
    ]

    const headline = headlines[getRandomInt(0, headlines.length - 1)]
</script>

<div class="lg:px-8">
    <div class="lg:max-w-4xl">
        <div class="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
            <h1 class="text-2xl font-bold leading-7 text-slate-900">{headline}</h1>
        </div>
    </div>
</div>
<div class="divide-y divide-slate-200 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100">
    {#each articleTeasers as articleTeaser}
        <Teaser data={articleTeaser} />
    {/each}

    <article class="py-5 sm:py-6">
        <div class="lg:px-8">
            <div class="lg:max-w-4xl">
                <div class="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0 text-xs text-slate-400">
                    Verantwortlich: Alexander Milde | Pattweg 24 | 32051 Herford | USt-IdNr. DE268126828
                </div>
            </div>
        </div>
    </article>
</div>
