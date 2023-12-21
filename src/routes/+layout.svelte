<script lang="ts">
    import '../app.pcss'
    import Footer from '../components/Footer.svelte'
    import Header from '../components/Header.svelte'
    import Main from '../components/Main.svelte'

    const metaData = {
        title: 'Alex Milde | Fullstack developer',
        description: 'Software engineer, Architect – Fullstack developer. I do nerd things.',
        image: '/images/alex_milde.jpg',
        url: 'https://alexmilde.de',
    }
</script>

<svelte:head>
    <title>{metaData.title}</title>
    <meta name="description" content={metaData.description} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={metaData.title} />
    <meta property="og:site_name" content={metaData.title} />
    <meta property="og:description" content={metaData.description} />
    <meta property="og:image" content={metaData.image} />
    <meta property="og:url" content={metaData.url} />
</svelte:head>

<div class="w-full font-[300]">
    <Header></Header>
    <Main>
        <slot />
    </Main>
</div>
<Footer />
