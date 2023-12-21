<script lang="ts">
    import '../../app.pcss'
    import Footer from '../../components/Footer.svelte'
    import Header from '../../components/Header.svelte'
    import Main from '../../components/Main.svelte'
</script>

<div class="w-full font-[300]">
    <Header></Header>
    <Main>
        <slot />
    </Main>
</div>
<Footer />
