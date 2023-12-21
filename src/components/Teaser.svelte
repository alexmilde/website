<script lang="ts">
    import { determineIconType } from '../commons/mappers'
    import type { Teaser } from '../commons/types'
    import Icon from './Icon.svelte'
    export let data: Teaser
</script>

<article class="py-10 sm:py-12">
    <div class="lg:px-8">
        <div class="lg:max-w-4xl">
            <div class="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
                <div class="flex flex-col items-start">
                    <h2 class="mt-2 text-lg font-bold text-slate-900">
                        <a href="/articles/{data.slug}">{data.headline}</a>
                    </h2>
                    <time class="order-first font-mono text-sm leading-7 text-slate-500">
                        {data.date}
                    </time>
                    <p class="mt-1 text-base leading-7 text-slate-700">
                        {data.copy}
                    </p>
                    <div class="mt-4 flex items-center gap-4">
                        <a
                            href="/articles/{data.slug}"
                            aria-label={data.headline}
                            class="flex items-center gap-x-2 text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900"
                            ><svg aria-hidden="true" viewBox="0 0 10 10" class="h-2.5 w-2.5 fill-current"
                                ><path
                                    d="M8.25 4.567a.5.5 0 0 1 0 .866l-7.5 4.33A.5.5 0 0 1 0 9.33V.67A.5.5 0 0 1 .75.237l7.5 4.33Z"
                                ></path></svg
                            ><span aria-hidden="true">Lesen</span>
                        </a>
                        {#if data.links}
                            {#each data.links as link}
                                <span aria-hidden="true" class="text-sm font-bold text-slate-400">/</span>

                                <a
                                    class="flex items-center gap-x-2 text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900"
                                    aria-label={link.title}
                                    href={link.url}
                                >
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
