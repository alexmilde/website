<script lang="ts">
    import { iconTypes } from '../commons/constants'
    import { determineIconType } from '../commons/mappers'
    import { pink } from '../commons/styles/link'
    import type { Teaser } from '../commons/types'
    import Icon from './Icon.svelte'
    export let data: Teaser
    export let prefix: string = ''
</script>

<article class="py-10 sm:py-12">
    <div class="lg:px-8">
        <div class="lg:max-w-4xl">
            <div class="mx-0 px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
                <div class="flex flex-col items-start">
                    <h2 class="mt-2 text-lg font-bold text-slate-900">
                        <a href="/{prefix}/{data.slug}">{data.headline}</a>
                    </h2>
                    <time class="order-first font-mono text-sm leading-7 text-slate-500">
                        {data.date}
                    </time>
                    <p class="mt-1 text-base leading-7 text-slate-700">
                        {data.copy}
                    </p>
                    <div class="mt-4 flex items-center gap-x-8 gap-y-2 flex-wrap">
                        {#if data.hidemore !== true}
                            <a href="/{prefix}/{data.slug}" aria-label={data.headline} class={pink}>
                                <Icon type={iconTypes.more}></Icon>
                                <span aria-hidden="true">Mehr</span>
                            </a>
                        {/if}
                        {#if data.links}
                            {#each data.links as link}
                                <a class={pink} aria-label={link.title} href={link.url}>
                                    <Icon type={determineIconType(link.url)}></Icon>
                                    <span>{link.title}</span>
                                </a>
                            {/each}
                        {/if}
                    </div>
                </div>
            </div>
        </div>
    </div>
</article>
