<script lang="ts">
    import Infobar from './Infobar.svelte'
    import Sidebar from './Sidebar.svelte'

    export let hideInfobarDeails: boolean = false
    const headerStyle = (hideInfobarDeails: boolean): string => {
        const styleDefault =
            'bg-slate-100 lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-112 lg:items-start lg:overflow-y-auto xl:w-120'
        const styleHidden = 'bg-slate-100 lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:items-start lg:overflow-y-auto'
        return hideInfobarDeails ? styleHidden : styleDefault
    }
</script>

<header class={headerStyle(hideInfobarDeails)}>
    <Sidebar target="desktop" />
    {#if !hideInfobarDeails}
        <Infobar />
    {/if}
</header>
