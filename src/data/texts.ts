import { pathGithubExperiments } from '../commons/constants'
import type { Article, Teaser } from '../commons/types'

export const metaData = {
    title: 'Alex Milde | Fullstack developer',
    description: 'Software engineer, Architect – Fullstack developer. I do nerd things.',
    image: '/images/alex_milde.jpg',
    url: 'https://alexmilde.de',
}

export const lastWork = {
    headline: 'Letzte Buchung',
    copy: `Dem wunderbaren Hamburger Modelabel <a class="underline" href="https://www.closed.com/">CLOSED</a> habe ich geholfen technical Debt abzubauen und eine Headless Commerce Architektur aufzubauen.<br/>Aktuell habe ich Zeit für Neues.`,
}

const teaserAIColors: Teaser = {
    date: '04.01.2024',
    slug: 'ai-colors',
    headline: 'Wie funktioniert AI?',
    copy: 'Anhand eines Farbfilters versuche ich für Laien zu erklären wie AI funktioniert.',
}

const teaserSvelteBasics: Teaser = {
    date: '21.12.2023',
    slug: 'svelte-basics',
    headline: 'Hallo Svelt(e) – Warum ich Fan bin',
    copy: 'In letzter Zeit habe ich viel mit Svelte, und SvelteKit gearbeitet. Dafür gab es ein paar gute Gründe.',
    links: [
        {
            title: 'Code dieser Website',
            url: 'https://github.com/alexmilde/website',
        },
    ],
}

const teaserAIWithoutAIAdvanced: Teaser = {
    date: '03.01.2024',
    slug: 'without-ai-similar-color',
    headline: 'KI ohne KI Advanced',
    copy: 'Aus einer Liste von Farben suchen wir mehrere ähnliche Farben, mit verschiedenen Algorithmen. ',
    hidemore: true,
    links: [
        {
            title: 'Ausprobieren',
            url: '/ai/without-ai-similar-color-advanced',
        },
        {
            title: 'Code auf Github',
            url: pathGithubExperiments + '/without-ai-similar-color-advanced',
        },
    ],
}

const teaserAIWithoutAI: Teaser = {
    date: '02.02.2024',
    slug: 'without-ai-similar-color',
    headline: 'KI ohne KI',
    copy: 'Aus einer Liste von Farben suchen wir die ähnlichste Farbe.',
    hidemore: true,
    links: [
        {
            title: 'Ausprobieren',
            url: '/ai/without-ai-similar-color',
        },
        {
            title: 'Code auf Github',
            url: pathGithubExperiments + '/without-ai-similar-color',
        },
    ],
}

const teaserAIBasicsEmbeddings: Teaser = {
    date: '22.12.2023',
    slug: 'embeddings-sample-app-javascript',
    headline: 'KI Textsuche zum Selber testen',
    copy: 'Eine Javascript Anwendung als Startpunkt für eine eigene KI Anwendung',
    hidemore: true,
    links: [
        {
            title: 'Ausprobieren',
            url: '/ai/embeddings-sample-app-javascript',
        },
        {
            title: 'Quelle: Langchain',
            url: 'https://js.langchain.com/docs/integrations/text_embedding/transformers',
        },
        {
            title: 'Code auf Github',
            url: pathGithubExperiments + '/embeddings-sample-app-javascript',
        },
    ],
}

export const articles: Array<Article> = [
    {
        teaser: teaserAIColors,
        content: [
            {
                headline: 'Wann ist eine Farbe ähnlich?',
                copy: `Sagen wir es gibt folgende RGB Farben. Wie finden wir das ähnlichste Rot?
                <pre>
let redOriginal = [255, 0, 0]
let red1 = [235, 0, 0]
let red2 = [245, 5, 20]
let red3 = [240, 10, 15] </pre>
                Wir können die Differenz jedes einzelnen Kanals ermitteln und aufsummieren.<br/>Die <strong>kleinste Zahl</strong> sollte die ähnlichste Farbe sein.
                <pre>
let redOriginal = [255, 0, 0]
let red1Diff = [20, 0, 0] // Sum: 20
let red2 = [10, 5, 20] // Sum : 35
let red3 = [15, 10, 15] // Sum: 40</pre>

                Das kannst du <a href="/ai/without-ai-similar-color">hier testen</a>
                 `,
            },
            {
                headline: 'Wir denken in Pfeilen',
                copy: `Jetzt stellen wir uns ein <a href="https://de.wikipedia.org/wiki/3D">3D Koordinatensystem</a> vor. Mit X,Y,Z.<br />
                Eine Farbe könnte nun ein Pfeil sein.<br/>Es gibt nun verschiedene Methoden um zu vergleichen wie "ähnlich" diese Pfeile sind. z.b.
                 vergleicht die Kosinus Similarität die Richtung der Pfeile, aber nicht die Länge.<br/>
                 <pre>
// Kosinus Similarität
let orig = [123, 231, 64]
let color1 = [122, 230, 63] // Sehr ähnlich
let color2 = [12, 23, 6] // Auch sehr ähnlich weil r,g,b geteilt durch 10</pre>
                Das kannst du <a href="/ai/without-ai-similar-color-advanced">hier testen</a>`,
            },
            {
                headline: 'Unendliche Weiten! Und Dimensionen',
                copy: `Der Clou ist nun: Das funktioniert für beliebige Dimensionen, nicht nur 3. <strong>So können Texte verglichen werden</strong>. Zum Beispiel
                sind sich die Worte <strong>mountains</strong> und <strong>nature</strong> ähnlicher als <strong>mountains</strong> und <strong>ocean</strong>.<br/>
                Das kannst du <a href="/ai/embeddings-sample-app-javascript">hier testen</a>
                <br/>
                Hier werden Texte in Embeddings [0.12321,0.231212,0.123124....] verwandelt. Das Gleiche geschieht mit der Eingabe. Anschließend werden die Embeddings / Vektoren verglichen.
                <br/>
                <strong>Wichtig: Das ganze Thema hab ich hier bewusst sehr sehr stark vereinfacht.</strong>
                <br/><br/>
                Fertig! Ich hoffe das Ganze war halbwegs verständlich.<br/>
                Natürlich war das nur die "Spitze des Eisberges."

                `,
            },
        ],
        details: [
            {
                title: 'Langchain',
                url: 'https://js.langchain.com/docs/get_started/introduction',
                copy: 'LangChain is a framework for developing applications powered by language models.',
            },
            {
                title: 'Huggingface',
                url: 'https://huggingface.co/',
                copy: 'Modelle und Datensets',
            },
        ],
    },
    {
        teaser: teaserSvelteBasics,
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
                copy: `Diese Seite wurde mit Svelte und SvelteKit gebaut und zu Vercel deployed. <a href="https://github.com/alexmilde/website">https://github.com/alexmilde/website</a>`,
            },
        ],
        details: [
            {
                title: 'Vercel',
                url: 'https://vercel.com/',
                copy: 'Kostenlos eine Fullstack Website hosten. Deployed in ein paar Minuten. Funfact: Diese Seite liegt bei Vercel.',
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

export const aiTeasers: Array<Teaser> = [teaserAIWithoutAIAdvanced, teaserAIWithoutAI, teaserAIBasicsEmbeddings]
