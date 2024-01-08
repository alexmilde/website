<script lang="ts">
    import { lastWork } from '../data/texts'
    import { info as infoLinks } from '../data/links'
    import Icon from './Icon.svelte'
    import LinkInfo from './LinkInfo.svelte'
    const name = 'Alex Milde'
    const info = 'Software engineer, Architect – Fullstack developer. <strong>I do nerd things.</strong>'
</script>

<div
    class="relative z-10 mx-auto px-4 pb-2 sm:pb-4 pt-5 sm:pt-10 sm:px-6 md:max-w-2xl md:px-4 lg:min-h-full lg:flex-auto lg:border-x lg:border-slate-300 lg:px-8 lg:py-12 xl:px-12"
>
    <a
        class="relative mx-auto block w-16 overflow-hidden rounded-lg bg-slate-200 shadow-xl shadow-slate-300 sm:w-64 sm:rounded-xl lg:w-auto lg:rounded-2xl"
        aria-label="Homepage"
        href="/"
        ><img src="/images/alex_milde.jpg" alt="Alex Milde" />
        <div class="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10 sm:rounded-xl lg:rounded-2xl"></div></a
    >
    <div class="mt-4 sm:mt-10 text-center lg:mt-12 lg:text-left">
        <p class="text-xl font-bold text-slate-900"><a href="/">{name}</a></p>
        <!-- eslint-disable-next-line svelte/no-at-html-tags -->
        <p class="mt-1 sm:mt-3 text-base sm:text-lg font-medium sm:leading-8 text-slate-700">{@html info}</p>
    </div>
    <section class="mt-12 hidden lg:block">
        <h2 class="flex items-center font-mono text-sm font-medium leading-7 text-slate-900">
            <svg aria-hidden="true" viewBox="0 0 10 10" class="h-2.5 w-2.5"
                ><path d="M0 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5Z" class="fill-violet-300"
                ></path><path
                    d="M6 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1Z"
                    class="fill-pink-300"
                ></path></svg
            ><span class="ml-2.5">{lastWork.headline}</span>
        </h2>
        <p class="mt-2 text-base leading-7 text-slate-700">
            <!-- eslint-disable-next-line svelte/no-at-html-tags -->
            {@html lastWork.copy}
        </p>
    </section>
    <section class="mt-4 sm:mt-10 lg:mt-12">
        <div class="h-px bg-gradient-to-r from-slate-300/0 via-slate-300 to-slate-300/0 lg:hidden"></div>
        <ul
            role="list"
            class="mt-2 sm:mt-4 flex justify-center gap-5 text-base font-medium leading-7 text-slate-700 sm:gap-8 lg:flex-col lg:gap-4"
        >
            {#each infoLinks as link}
                <li class="flex">
                    <LinkInfo href={link.url} aria-label={link.title} title={link.title}>
                        <Icon type={link.icon} class={link.iconClass} />
                    </LinkInfo>
                </li>
            {/each}
        </ul>
    </section>
</div>
