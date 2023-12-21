<script lang="ts">
    import Infobar from './Infobar.svelte'
    import Sidebar from './Sidebar.svelte'
</script>

<header
    class="bg-slate-100 lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-112 lg:items-start lg:overflow-y-auto xl:w-120"
>
    <Sidebar target="desktop" />
    <Infobar />
</header>
