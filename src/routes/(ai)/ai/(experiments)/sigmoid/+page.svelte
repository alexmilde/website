<script lang="ts">
    import Plotly from '@aknakos/sveltekit-plotly'
    import { onMount } from 'svelte'
    import { loadtxt } from '../../../../../ai-utils/loader'
    import { plotLayout, markers, lines } from '../../../../../ai-utils/plot'
    import { predict, train } from '../../../../../ai-utils/methods'

    let data: object[] = []
    let reloadPlot = 0 //change this to force reload the plot
    let loaded // use this to know when the plot is fully loaded

    let layout = plotLayout('Pizzas', 'Reservations')

    onMount(async () => {
        const [x, y] = await loadtxt('/data/pizza.txt')
        let w = train(x, y, 1000000, 0.01)

        if (!w) {
            console.log('Issue while training')
            return
        }

        let xMax = Math.max(...x)
        data = [markers(x, y, 'Raw Data'), lines([0, xMax], [predict([0], w)[0], predict([xMax], w)[0]], 'Prediction')]
    })
</script>

<div class="[&_.main-svg]:absolute [&_.main-svg]:pointer-events-none">
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
