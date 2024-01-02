<script lang="ts">
    import '../../app.pcss'
    import Footer from '../../components/Footer.svelte'
    import Header from '../../components/Header.svelte'
    import Main from '../../components/Main.svelte'
</script>

<div class="w-full font-[300]">
    <Header hideInfobarDeails></Header>
    <Main hideInfobarDeails>
        <div class="divide-y divide-slate-200 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100">
            <slot />
        </div>
    </Main>
</div>
<Footer />
