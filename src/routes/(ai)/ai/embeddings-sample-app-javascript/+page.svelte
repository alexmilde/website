<script lang="ts">
    import { enhance } from '$app/forms'
    import Highlight from 'svelte-highlight'
    import typescript from 'svelte-highlight/languages/typescript'
    import github from 'svelte-highlight/styles/github'
    import { iconTypes } from '../../../../commons/constants'
    import { getRandomInt } from '../../../../commons/utils'
    import Icon from '../../../../components/Icon.svelte'

    let idSimilar = 0
    let loading = false
    let showCode = false

    const searches = ['I like meat', 'I like vegetables', 'I like trees']
    const styleTextAreaDefault =
        'block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-gray-300 focus:outline-1 focus:outline-gray-300 sm:text-sm sm:leading-6'

    let search = searches[getRandomInt(0, searches.length - 1)]

    const evaluate = () => {
        loading = true
        return async ({ result }) => {
            loading = false
            idSimilar = result.data.id
        }
    }

    const styleIsSimilar = (id: number, idSimilar: number): string => {
        return id === idSimilar ? 'ring-inset ring-2 ring-green-600' : ''
    }

    const code = `
import { HuggingFaceTransformersEmbeddings } from 'langchain/embeddings/hf_transformers'
import { MemoryVectorStore } from 'langchain/vectorstores/memory'

const model = new HuggingFaceTransformersEmbeddings({
        modelName: 'Xenova/all-MiniLM-L6-v2',
    })

const data = await request.formData()

// Create embedding vectors
const embeddings = await model.embedDocuments([
    data.get('document1') as string,
    data.get('document2') as string,
    data.get('document3') as string,
])

// Vector Store
const vectorStore = new MemoryVectorStore(new HuggingFaceTransformersEmbeddings())

// Add the embedding vectors
await vectorStore.addVectors(embeddings, [
    { metadata: { id: 1 }, pageContent: 'first content' },
    { metadata: { id: 2 }, pageContent: 'second content' },
    { metadata: { id: 3 }, pageContent: 'third content' },
])

// Query the store
const id = (await vectorStore.similaritySearch(data.get('search') as string, 1))
    .map((d) => {
        return d.metadata.id
    })
    .shift()

console.log(id)
    `
</script>

<svelte:head>
    {@html github}
</svelte:head>

<div class="mx-auto mb-10 px-4 sm:px-6 md:px-4 md:mr-10">
    <form method="POST" action="?/evaluate" use:enhance={evaluate}>
        <div class="grid grid-cols-3 gap-4">
            <div>
                <label for="document1" class="block text-sm font-bold leading-6 text-gray-900">Document 1</label>
                <div class="mt-2">
                    <textarea class="{styleTextAreaDefault} {styleIsSimilar(1, idSimilar)}" name="document1"
                        >I like beef</textarea
                    >
                </div>
            </div>

            <div>
                <label for="document2" class="block text-sm font-bold leading-6 text-gray-900">Document 2</label>
                <div class="mt-2">
                    <textarea class="{styleTextAreaDefault} {styleIsSimilar(2, idSimilar)}" name="document2"
                        >I like apples</textarea
                    >
                </div>
            </div>

            <div>
                <label for="document3" class="block text-sm font-bold leading-6 text-gray-900">Document 3</label>
                <div class="mt-2">
                    <textarea class="{styleTextAreaDefault} {styleIsSimilar(3, idSimilar)}" name="document3"
                        >I like nature</textarea
                    >
                </div>
            </div>
        </div>

        <div class="mt-4">
            <input class={styleTextAreaDefault} value={search} name="search" />
            <button
                type="submit"
                disabled={loading}
                class="mt-4 inline-flex items-center rounded-md bg-slate-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 disabled:bg-slate-300"
            >
                {#if loading}
                    Loading
                {:else}
                    Find the most similar text{/if}
            </button>
            <button
                type="button"
                on:click={() => {
                    showCode = !showCode
                }}
                class="mt-4 inline-flex items-center rounded-md bg-slate-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 disabled:bg-slate-300"
            >
                {#if showCode}
                    Hide Code
                {:else}
                    Show Code{/if}
            </button>

            <div class="{styleTextAreaDefault} mt-4 text-xs {showCode ? '' : 'hidden'}">
                <Highlight language={typescript} {code} />
            </div>
            <a
                class="mt-4 flex items-center gap-x-2 text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900"
                aria-label="embeddings-and-query.zip"
                href="https://github.com/alexmilde/website/tree/main/src/routes/(ai)/ai/embeddings-sample-app-javascript"
            >
                <Icon type={iconTypes.git}></Icon>
                <span>Diese Seite auf Github</span>
            </a>

            <a
                class="flex items-center gap-x-2 text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900"
                aria-label="embeddings-and-query.zip"
                href="/downloads/embeddings-and-query.zip"
            >
                <Icon type={iconTypes.more}></Icon>
                <span>Download Node.js Version</span>
            </a>
        </div>
    </form>
</div>
