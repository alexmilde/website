<script lang="ts">
    import { iconTypes, pathGithubExperiments } from '../../../../../commons/constants'
    import { pink } from '../../../../../commons/styles/link'
    import Icon from '../../../../../components/Icon.svelte'
    import colors from '../../../../../data/colors'
    const colorRgbs = colors.map((c) => c.rgb)
    let color = { name: 'undefined', rgb: [220, 220, 220] }

    let red = 123
    let green = 231
    let blue = 64

    const onColorChange = () => {
        // find the most similar color

        let scores = colorRgbs.map((a) => {
            // very simple algorithm:
            // calculates the difference for
            // each color channel and sums all
            // three channels up.

            return [red, green, blue].reduce(function (r, b, i) {
                return r + Math.abs(a[i] - b)
            }, 0)
        })

        let indexOfLowestScore = scores.indexOf(Math.min(...scores))
        color = colors[indexOfLowestScore]
    }

    onColorChange()
</script>

<h2 class="mt-2 text-lg font-bold text-slate-900">Anleitung</h2>
<p class="mt-1 text-base leading-7 text-slate-700">
    Sucht eine möglichst ähnliche Farbe aus einer
    <a class="underline" href="https://github.com/alexmilde/website/blob/main/src/data/colors.ts"
        >Liste von {colors.length} Farben.</a
    ><br />
    Verschiebe die Regler und die ähnlichste gefundene Farbe wird angezeigt.
</p>
<h2 class="mt-6 text-lg font-bold text-slate-900">Farbe einstellen</h2>
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

<h2 class="font-bold text-xs mt-8">Ähnlichste Farbe</h2>
<h1 class="mt-2 text-lg font-bold text-slate-900">{color.name ?? '-'}</h1>
<div class="flex gap-x-8">
    <span>Red: {color.rgb[0] ?? '-'}</span>
    <span>Green: {color.rgb[1] ?? '-'}</span>
    <span>Blue: {color.rgb[2] ?? '-'}</span>
</div>
<div class="flex gap-x-8 mt-4">
    <div>
        <h2 class="font-bold text-xs mt-4">Eingestellte Farbe</h2>
        <div class="mt-2 w-32 h-32" style="background-color: rgb({red},{green},{blue});"></div>
    </div>
    <div>
        <h2 class="font-bold text-xs mt-4">Gefundene Farbe</h2>
        <div class="mt-2 w-32 h-32" style="background-color: rgb({color.rgb[0]},{color.rgb[1]},{color.rgb[2]});"></div>
    </div>
</div>

<div class="divide-y divide-slate-200 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100">
    <div class="mt-4 flex items-center gap-x-8 gap-y-2 flex-wrap">
        <a
            class={pink}
            aria-label="embeddings-and-query.zip"
            href={pathGithubExperiments + '/without-ai-similar-color'}
        >
            <Icon type={iconTypes.git}></Icon>
            <span>Diese Seite auf Github</span>
        </a>
    </div>
</div>
