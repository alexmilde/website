<script lang="ts">
    import { HuggingFaceTransformersEmbeddings } from 'langchain/embeddings/hf_transformers'
    import { MemoryVectorStore } from 'langchain/vectorstores/memory'
    import { onMount } from 'svelte'
    import { iconTypes, pathGithubExperiments } from '../../../../../commons/constants'
    import Icon from '../../../../../components/Icon.svelte'
    import { pink } from '../../../../../commons/styles/link'
    import { gray } from '../../../../../commons/styles/textarea'

    let initialised = false
    let embeddings: Array<Array<number>>
    let document1Text = 'I like meat'
    let document2Text = 'I like apples'
    let document3Text = 'I like nature'
    let searchNeedle = 'Lets hug a tree'
    let idSimilar = 0

    const model = new HuggingFaceTransformersEmbeddings({
        modelName: 'Xenova/all-MiniLM-L6-v2',
    })

    const vectorStore = new MemoryVectorStore(new HuggingFaceTransformersEmbeddings())

    onMount(async () => {
        await refreshEmbeddingsAndStore()
        initialised = true
    })

    const refreshEmbeddingsAndStore = async () => {
        await createEmbeddings()
        await addEmbeddings()
    }
    const createEmbeddings = async () => {
        embeddings = await model.embedDocuments([document1Text, document2Text, document3Text])
    }

    const addEmbeddings = async () => {
        await vectorStore.addVectors(embeddings, [
            { metadata: { id: 1 }, pageContent: 'first' },
            { metadata: { id: 2 }, pageContent: 'second' },
            { metadata: { id: 3 }, pageContent: 'third' },
        ])
    }

    const startSearch = async () => {
        const id = (await vectorStore.similaritySearch(searchNeedle, 1))
            .map((d) => {
                return d.metadata.id
            })
            .shift()
        idSimilar = id
    }

    const styleIsSimilar = (id: number, idSimilar: number): string => {
        return id === idSimilar ? 'ring-inset ring-2 ring-green-600' : ''
    }
</script>

<h2 class="text-right mt-2 text-lg font-bold text-slate-900">{initialised ? '.' : 'Loading'}</h2>
<div class={initialised ? '' : 'pointer-events-none opacity-30'}>
    <h2 class="mt-2 text-lg font-bold text-slate-900">Anleitung</h2>
    <p class="mt-1 text-base leading-7 text-slate-700">
        Gib beliebige Texte in die drei Textfelder ein.<br />
        Anschließend eine beliebige Suchphrase wählen und „Suchen“<br />
        Das ähnlichste Textfeld wird <b>Grün</b> markiert.
    </p>
    <div class="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
            <div class="block text-sm font-bold leading-6 text-gray-900">Document 1</div>
            <div class="mt-2">
                <textarea
                    bind:value={document1Text}
                    on:blur={refreshEmbeddingsAndStore}
                    class="{gray} {styleIsSimilar(1, idSimilar)}"
                    name="document1"
                />
            </div>
        </div>

        <div>
            <div class="block text-sm font-bold leading-6 text-gray-900">Document 2</div>
            <div class="mt-2">
                <textarea
                    bind:value={document2Text}
                    on:blur={refreshEmbeddingsAndStore}
                    class="{gray} {styleIsSimilar(2, idSimilar)}"
                    name="document2"
                />
            </div>
        </div>

        <div>
            <div class="block text-sm font-bold leading-6 text-gray-900">Document 3</div>
            <div class="mt-2">
                <textarea
                    bind:value={document3Text}
                    on:blur={refreshEmbeddingsAndStore}
                    class="{gray} {styleIsSimilar(3, idSimilar)}"
                    name="document3"
                />
            </div>
        </div>
    </div>

    <div class="mt-4">
        <div class="block text-sm font-bold leading-6 text-gray-900">Suchbegriff</div>
        <input class={gray} bind:value={searchNeedle} name="search" />
        <button
            on:click={startSearch}
            class="mt-4 inline-flex items-center rounded-md bg-slate-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 disabled:bg-slate-300"
        >
            Suchen
        </button>

        <div class="divide-y divide-slate-200 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100">
            <div class="mt-4 flex items-center gap-x-8 gap-y-2 flex-wrap">
                <a
                    class={pink}
                    aria-label="embeddings-and-query.zip"
                    href={pathGithubExperiments + '/embeddings-sample-app-javascript'}
                >
                    <Icon type={iconTypes.git}></Icon>
                    <span>Diese Seite auf Github</span>
                </a>

                <a class="flex {pink}" aria-label="embeddings-and-query.zip" href="/downloads/embeddings-and-query.zip">
                    <Icon type={iconTypes.more}></Icon>
                    <span>Download Node.js Version</span>
                </a>
            </div>
        </div>
    </div>
</div>
