<script lang="ts">
    import colors from '../../../../data/colors'
    const colorRgbs = colors.map((c) => c.rgb)

    let colorInput = '123,231,64'
    let input = colorInput.trim().split(',')
    let color = { name: 'undefined', rgb: [220, 220, 220] }

    const onColorChange = () => {
        input = colorInput.trim().split(',')

        // find the most similar color
        let scores = colorRgbs.map(function (a) {
            return input.reduce(function (r, b, i) {
                return r + Math.abs(a[i] - b)
            }, 0)
        })

        let indexOfLowestScore = scores.indexOf(Math.min(...scores))
        color = colors[indexOfLowestScore]
    }

    onColorChange()
</script>

<h2 class="font-bold text-xs">Enter color RGB</h2>
<input
    class="mt-2 block rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-gray-300 focus:outline-1 focus:outline-gray-300 sm:text-sm sm:leading-6"
    bind:value={colorInput}
    on:input={onColorChange}
/>

<h2 class="font-bold text-xs mt-8">Similar Color Found</h2>
<h1 class="font-normal text-xl mb-4 mt-2">{color.name ?? '-'}</h1>
<div class="flex gap-x-8">
    <span>Red: {color.rgb[0] ?? '-'}</span>
    <span>Green: {color.rgb[1] ?? '-'}</span>
    <span>Blue: {color.rgb[2] ?? '-'}</span>
</div>
<div class="flex gap-x-8 mt-4">
    <div>
        <h2 class="font-bold text-xs mt-4">Searched Color</h2>
        <div class="mt-2 w-64 h-64" style="background-color: rgb({input[0]},{input[1]},{input[2]});"></div>
    </div>
    <div>
        <h2 class="font-bold text-xs mt-4">Found Color</h2>
        <div class="mt-2 w-64 h-64" style="background-color: rgb({color.rgb[0]},{color.rgb[1]},{color.rgb[2]});"></div>
    </div>
</div>
