import type { Article, Teaser } from '../commons/types'

export const lastWork = {
    headline: 'Letzte Buchung',
    copy: `Dem wunderbaren Hamburger Modelabel <a class="underline" href="https://www.closed.com/">CLOSED</a> habe ich geholfen technical Debt abzubauen und eine Headless Commerce Architektur aufzubauen.`,
}

export const articleTeasers: Array<Teaser> = [
    {
        date: '21.12.2023',
        slug: 'svelte-basics',
        headline: 'Hallo Svelt(e) – Warum ich Fan bin',
        copy: 'In letzter Zeit habe ich viel mit Svelte, und SvelteKit gearbeitet. Dafür gab es ein paar gute Gründe. ',
        links: [
            {
                title: 'Code dieser Website',
                url: 'https://github.com/alexmilde/website',
            },
        ],
    },
]

export const articles: Array<Article> = [
    {
        teaser: articleTeasers[0],
        content: [
            {
                headline: 'Es fühlt sich elegant an',
                copy: `Tech zu wählen ist oft ein Gefühl. Bei Tailwindcss hatte ich das Gefühl: „Hey, dass ist irgendwie elegant und content agnostisch.
                 Eigentlich wäre es cool, wenn der Browser das – Out of the Box – könnte.“</br>
                 Ähnlich fühlt sich Svelte an. Warum kann Javascript nicht einfach reaktive Variablen haben. Anstelle von</br>
                 <pre>let hsv = „Uff“</pre>
                 Etwas wie
                 <pre>letRx hsv = „Huii“</pre>
                 Und sobald die Variable neu zugewiesen wird wird die Stelle an der Sie verwendet wird neu gerendert / evaluiert.
                 <blockquote>Svelte kommt dieser Idee am nächsten.</blockquote>
                Die Einfachheit kombiniert mit der „Magie“ dass Reaktivität einfach funktioniert macht es zu einem Idealen Kandidaten um ein neues
                Projekt aufzubauen. Vor allem wenn bestehende Html Komponenten integriert werden sollen, da man das Html einfach kopieren kann.</br></br>
                Der simple Aufbau bietet auch den Vorteil, dass man die Svelte Welt relativ leicht bei Bedarf verlassen kann.
                 `,
            },
            {
                headline: 'DX (Developer Experience) > Everything',
                copy: `Svelte gehört zu den aktuell beliebtesten Frameworks. Bei Tailwindcss schrieb mal jemand: „Ich kenne niemanden der es benutzt
                hat und zurück wechseln wollte“
                Wenn über längere Zeit viele Entwickler etwas mögen hat das meist einen Grund. Unbeliebte Meinung: <blockquote>jQuery hat sich aus guten Gründen
                sehr lange gehalten.</blockquote>
                Tech der gemocht wird bleibt meist sehr sehr lange. Gute Frameworks ermöglichen einem schnell Ergebnisse zu erzielen und dabei
                <strong>so wenig Code wie nötig</strong> zu schreiben.`,
            },
            {
                headline: 'Ok, zeig mal!',
                copy: `Diese Seite wurde mit Svelte und SvelteKit gebaut und zu Cloudflare Pages deployed. <a href="https://github.com/alexmilde/website">https://github.com/alexmilde/website</a>`,
            },
        ],
        details: [
            {
                title: 'Cloudflare Pages',
                url: 'https://pages.cloudflare.com',
                copy: 'Kostenlos eine Fullstack Website hosten. Deployed in ein paar Minuten. Funfact: Diese Seite liegt bei Cloudflare pages.',
            },
            {
                title: 'Svelte Kit',
                url: 'https://kit.svelte.dev',
                copy: 'Das Next/Nuxt von Svelte. Von der Philosophie sehr ähnlich zu Remix. Es setzt auf Webstandards. Leicht zu lernen und zu verstehen.',
            },
            {
                title: 'Remix',
                url: 'https://remix.run',
                copy: 'Eine Alternative zu Next. Einfach gesprochen: Setzt auf serverseitiges Daten holen.',
            },
        ],
        links: [
            {
                title: 'Svelte reddit Diskussion',
                url: 'https://www.reddit.com/r/sveltejs/comments/r6blov/what_makes_svelte_special_besides_nextjs_or_remix/',
            },
            {
                title: 'Svelte code Beispiele',
                url: 'https://svelte.dev/examples/spread-props',
            },
            {
                title: 'Viele Entwickler mögen es',
                url: 'https://survey.stackoverflow.co/2023/#section-admired-and-desired-web-frameworks-and-technologies',
            },
            {
                title: 'Code dieser Website',
                url: 'https://github.com/alexmilde/website',
            },
        ],
    },
]
