<script lang="ts">
    import colors from '../../../../data/colors'
    const colorRgbs = colors.map((c) => c.rgb)

    let colorInput = '123,231,64'
    let color = { name: 'undefined', rgb: [220, 220, 220] }

    const onColorChange = () => {
        let input = colorInput.trim().split(',')

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

<h2 class="font-bold text-xs">Color</h2>
<input class="border" bind:value={colorInput} on:input={onColorChange} />

<h2 class="font-bold text-xs mt-4">Similar Color Found</h2>
<h1 class="font-normal text-xl my-4">{color.name ?? '-'}</h1>
<div class="flex gap-x-8">
    <span>Red: {color.rgb[0] ?? '-'}</span>
    <span>Green: {color.rgb[1] ?? '-'}</span>
    <span>Blue: {color.rgb[2] ?? '-'}</span>
</div>
<div class="mt-4 w-64 h-64" style="background-color: rgb({color.rgb[0]},{color.rgb[1]},{color.rgb[2]});"></div>
