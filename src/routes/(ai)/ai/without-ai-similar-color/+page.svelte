<script lang="ts">
    import { gray } from '../../../../commons/styles/textarea'
    import colors from '../../../../data/colors'
    const colorRgbs = colors.map((c) => c.rgb)

    let color = { name: 'undefined', rgb: [220, 220, 220] }

    let red = 123
    let green = 231
    let blue = 64

    let searchNeedle = ''

    const onColorChange = () => {
        // find the most similar color
        let scores = colorRgbs.map(function (a) {
            return [red, green, blue].reduce(function (r, b, i) {
                return r + Math.abs(a[i] - b)
            }, 0)
        })

        let indexOfLowestScore = scores.indexOf(Math.min(...scores))
        color = colors[indexOfLowestScore]
    }

    onColorChange()
</script>

<div class=" mx-auto my-10 px-4 sm:px-6 md:px-4 md:mr-10">
    <h2 class="mt-2 text-lg font-bold text-slate-900">Enter color RGB</h2>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-x-8 sm:w-8/12">
        <div class="">
            <span class="block">Red: {red}</span>
            <input type="range" min="0" max="255" bind:value={red} on:input={onColorChange} />
        </div>
        <div class="">
            <span class="block">Green: {green}</span>
            <input type="range" min="0" max="255" bind:value={green} on:input={onColorChange} />
        </div>
        <div class="">
            <span class="block">Blue: {blue}</span>
            <input type="range" min="0" max="255" bind:value={blue} on:input={onColorChange} />
        </div>
    </div>

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
            <div class="mt-2 w-32 h-32" style="background-color: rgb({red},{green},{blue});"></div>
        </div>
        <div>
            <h2 class="font-bold text-xs mt-4">Found Color</h2>
            <div
                class="mt-2 w-32 h-32"
                style="background-color: rgb({color.rgb[0]},{color.rgb[1]},{color.rgb[2]});"
            ></div>
        </div>
    </div>
</div>
