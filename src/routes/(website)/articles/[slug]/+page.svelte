<script lang="ts">
    import Icon from '../../../../components/Icon.svelte'
    import { iconTypes } from '../../../../commons/constants'
    import type { Article } from '../../../../commons/types'
    import { page } from '$app/stores'

    export let data: { article: Article }
    $: article = data.article
    $: urlFull = $page.url
</script>

<svelte:head>
    <title>Alex Milde | {article.teaser.headline}</title>
    <meta name="description" content={article.teaser.copy} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={article.teaser.headline} />
    <meta property="og:site_name" content={article.teaser.headline} />
    <meta property="og:description" content={article.teaser.copy} />
    <meta property="og:url" content={urlFull} />
</svelte:head>

<div class="mt-4 sm:mt-0 lg:px-8">
    <div class="lg:max-w-4xl">
        <div class="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
            <header class="flex flex-col">
                <div class="flex items-center gap-6">
                    <Icon class="w-8 h-8 sm:h-16 sm:w-16 fill-slate-400 " type={iconTypes.git}></Icon>

                    <div class="flex flex-col">
                        <h1 class="mt-2 text-xl sm:text-4xl font-bold text-slate-900">{article.teaser.headline}</h1>
                        <time
                            datetime="2022-02-24T00:00:00.000Z"
                            class="order-first font-mono text-sm leading-7 text-slate-500">{article.teaser.date}</time
                        >
                    </div>
                </div>
                <p class="ml-16 sm:ml-24 mt-3 text-base leading-6 sm:text-lg font-medium sm:leading-8 text-slate-700">
                    {article.teaser.copy}
                </p>
            </header>
            <hr class="my-6 sm:my-12 border-gray-200" />
            <div
                class="prose prose-slate mt-6 sm:mt-14 [&>h2:nth-of-type(3n)]:before:bg-violet-200 [&>h2:nth-of-type(3n+2)]:before:bg-indigo-200 [&>h2]:mt-12 [&>h2]:flex [&>h2]:items-center [&>h2]:font-mono [&>h2]:text-sm [&>h2]:font-medium [&>h2]:leading-7 [&>h2]:text-slate-900 [&>h2]:before:mr-3 [&>h2]:before:h-3 [&>h2]:before:w-1.5 [&>h2]:before:rounded-r-full [&>h2]:before:bg-cyan-200 [&>ul]:mt-6 [&>ul]:list-['\2013\20'] [&>ul]:pl-5"
            >
                {#each article.content as content}
                    <h2>{content.headline}</h2>
                    {#if content.copy}
                        <p>
                            <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                            {@html content.copy}
                        </p>
                    {/if}

                    {#if content.list}
                        <ul>
                            {#each content.list as item}
                                <li>
                                    {item}
                                </li>
                            {/each}
                        </ul>
                    {/if}
                {/each}

                {#if article.details}
                    <h2>Details</h2>
                    <ul>
                        {#each article.details as detail}
                            <li>
                                <a href={detail.url} aria-label={detail.title}>{detail.title}</a> — {detail.copy}
                            </li>
                        {/each}
                    </ul>
                {/if}

                {#if article.links}
                    <h2>Links</h2>
                    <ul>
                        {#each article.links as link}
                            <li><a href={link.url} aria-label={link.title}>{link.title}</a></li>
                        {/each}
                    </ul>
                {/if}
            </div>
        </div>
    </div>
</div>
