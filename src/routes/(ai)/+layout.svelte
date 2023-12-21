<script lang="ts">
    import '../../app.pcss'
    import Footer from '../../components/Footer.svelte'
    import Header from '../../components/Header.svelte'
    import Main from '../../components/Main.svelte'
</script>

<div class="w-full font-[300]">
    <Header hideInfobarDeails></Header>
    <Main hideInfobarDeails>
        <slot />
    </Main>
</div>
<Footer />
