import type { Actions, PageServerLoad } from './$types'
import { HuggingFaceTransformersEmbeddings } from 'langchain/embeddings/hf_transformers'
import { MemoryVectorStore } from 'langchain/vectorstores/memory'

export const load: PageServerLoad = (async () => {
    return {}
}) satisfies PageServerLoad

export const actions = {
    default: async ({ request }) => {
        return { id: 1 }

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

        return { id: id }
    },
} satisfies Actions
