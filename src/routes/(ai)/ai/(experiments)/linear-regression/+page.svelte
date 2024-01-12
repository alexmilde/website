<script lang="ts">
    import Plotly from '@aknakos/sveltekit-plotly'
    import { onMount } from 'svelte'
    import { loadtxt } from '../../../../../ai-utils/loader'
    import { plotLayout, markers, lines } from '../../../../../ai-utils/plot'
    import { predict, train } from '../../../../../ai-utils/methods'

    import * as tf from '@tensorflow/tfjs'

    let data: object[] = []
    let reloadPlot = 0
    let loaded = false
    let trainingFinished = false

    let layout = plotLayout('Pizzas', 'Reservations')

    let t = tf.tensor1d([1, 2, 3, 4])

    let r = tf.mul(t, t)
    r.print()

    onMount(async () => {
        const [x, y] = await loadtxt('/data/pizza.txt')
        let trainingResult = train(x, y, 10000, 0.01)
        trainingFinished = true

        if (!trainingResult) {
            console.log('Issue while training')
            return
        }

        let [w, b] = trainingResult

        let xMax = Math.max(...x)
        data = [
            markers(x, y, 'Raw Data'),
            lines([0, xMax], [predict([0], w, b)[0], predict([xMax], w, b)[0]], 'Prediction'),
        ]
    })
</script>

{#if !trainingFinished}
    Training, please wait
{:else}
    Training finished
{/if}

<p>Öffne die Konsole für mehr details</p>

<div class="mt-8 [&_.main-svg]:absolute [&_.main-svg]:pointer-events-none">
    <Plotly
        id="id"
        {data}
        {layout}
        on:hover={() => {}}
        on:unhover={() => {}}
        on:click={() => {}}
        on:selected={() => {}}
        on:relayout={() => {}}
        bind:loaded
        {reloadPlot}>Loading plotly..</Plotly
    >
</div>
