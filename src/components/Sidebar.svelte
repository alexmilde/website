<script lang="ts">
    export let target = 'desktop'
    const contact = 'Contact'
    const eMail = 'E-mail'
    const phone = 'Phone'
</script>

{#if target === 'desktop'}
    <div
        class="hidden lg:sticky lg:top-0 lg:flex lg:w-16 lg:flex-none lg:items-center lg:whitespace-nowrap lg:py-12 lg:text-sm lg:leading-7 lg:[writing-mode:vertical-rl]"
    >
        <span class="font-mono text-slate-500">{contact}</span>
        <span class="mt-6 flex gap-6 font-bold text-slate-900 uppercase">
            <a href="mailto:alex@finekost.com">{eMail}</a>
            <span aria-hidden="true" class="text-slate-400">/</span>
            <a href="tel:+491789263669">{phone}</a>
        </span>
    </div>
{/if}

{#if target === 'mobile'}
    <h2 class="mt-8 flex items-center font-mono text-sm font-medium leading-7 text-slate-900">
        <svg aria-hidden="true" viewBox="0 0 11 12" class="h-3 w-auto fill-slate-300"
            ><path
                d="M5.019 5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm3.29 7c1.175 0 2.12-1.046 1.567-2.083A5.5 5.5 0 0 0 5.019 7 5.5 5.5 0 0 0 .162 9.917C-.39 10.954.554 12 1.73 12h6.578Z"
            ></path></svg
        ><span class="ml-2.5">{contact}</span>
    </h2>
    <div class="mt-2 flex gap-6 text-sm font-bold leading-7 text-slate-900 uppercase">
        <a href="mailto:alex@finekost.com">{eMail}</a>
        <span aria-hidden="true" class="text-slate-400">/</span>
        <a href="tel:+491789263669">{phone}</a>
    </div>
{/if}
