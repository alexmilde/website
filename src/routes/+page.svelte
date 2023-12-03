<script lang="ts">
    const headline = 'font-bauhaus text-3xl'
    const container = 'mx-5'
    const wrapper = 'mt-20'

    const texts = {
        about: {
            hl: 'über mich',
            cpy: 'Moin, ich bin Alex. Software engineer, Architect – Fullstack developer. I do nerd things.',
            cta: 'kontakt',
        },
        debateable: {
            hl: 'debatebale',
            cpy: 'Nach sehr vielen Jahren und etlichen Projekten sammelt man Einsichten und Ansichten. Zu Software und Leadership. Subjektiv und debatebale.',
            cta: 'kontakt',
        },
        contact: {
            hl: 'kontakt',
            cpy: 'Lass uns gern sprechen. Vielleicht kann ich ja weiter helfen. ',
        },
    }
</script>

<div class={container}>
    <div class={wrapper}>
        <h1 class={headline}>{texts.about.hl}</h1>
        <p>{texts.about.cpy}</p>
        <button>{texts.about.cta}</button>
    </div>

    <div class={wrapper}>
        <h1 class={headline}><a href="/debateable">{texts.debateable.hl}</a></h1>
        <p>{texts.debateable.cpy}</p>
        <button>{texts.debateable.cta}</button>
    </div>

    <div class={wrapper}>
        <h1 class={headline}>{texts.contact.hl}</h1>
        <p>{texts.contact.cpy}</p>
    </div>
</div>
