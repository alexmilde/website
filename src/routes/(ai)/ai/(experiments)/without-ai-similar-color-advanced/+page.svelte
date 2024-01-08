<script lang="ts">
    import { iconTypes, pathGithubExperiments } from '../../../../../commons/constants'
    import { pink } from '../../../../../commons/styles/link'
    import Icon from '../../../../../components/Icon.svelte'
    import colors from '../../../../../data/colors'

    let red = 123
    let green = 231
    let blue = 64

    let showDetails = true
    let sorted: Array<{ [key: number]: { name: string } }> = []

    const cosineSimilarity = (vectorA: Array<number>, vectorB: Array<number>): number => {
        // Berechne das Skalarprodukt der beiden Vektoren
        const dotProduct = vectorA.reduce((acc, val, index) => acc + val * vectorB[index], 0)

        // Berechne die Länge der Vektoren
        const magnitudeA = Math.sqrt(vectorA.reduce((acc, val) => acc + val ** 2, 0))
        const magnitudeB = Math.sqrt(vectorB.reduce((acc, val) => acc + val ** 2, 0))

        // Berechne die Kosinus-Ähnlichkeit
        const similarity = dotProduct / (magnitudeA * magnitudeB)
        return similarity
    }

    const squaredEuclideanDistance = (vectorA: Array<number>, vectorB: Array<number>): number => {
        return vectorA.reduce((acc, val, index) => acc + Math.pow(val - vectorB[index], 2), 0)
    }

    const linearDistance = (vectorA: Array<number>, vectorB: Array<number>): number => {
        return vectorA.reduce(function (r, b, i) {
            return r + Math.abs(vectorB[i] - b)
        }, 0)
    }

    const similarityMethods = [
        {
            title: 'Kosinus Similarität',
            method: cosineSimilarity,
        },
        {
            title: 'Quadratische Euklidische Distanz',
            method: squaredEuclideanDistance,
        },
        {
            title: 'Lineare Distanz',
            method: linearDistance,
        },
    ]

    let similarityMethodSelected: {
        title: string
        method: (vectorA: Array<number>, vectorB: Array<number>) => number
    } = similarityMethods[0]

    const onColorChange = () => {
        let colorsWithScores = colors.map((color: { name: string; rgb: Array<number> }) => {
            return {
                name: color.name,
                rgb: color.rgb,
                score: similarityMethodSelected.method([red, green, blue], color.rgb),
            }
        })

        sorted = colorsWithScores
            .sort((colorWithScoresA, colorWithScoresB) => {
                if (similarityMethodSelected.method === cosineSimilarity) {
                    return colorWithScoresB.score - colorWithScoresA.score
                }

                return colorWithScoresA.score - colorWithScoresB.score
            })
            .slice(0, 8)
    }

    $: if (similarityMethodSelected) {
        onColorChange()
    }
</script>

<h2 class="mt-2 text-lg font-bold text-slate-900">Anleitung</h2>
<p class="mt-1 text-base leading-7 text-slate-700">
    Sucht eine möglichst ähnliche Farbe aus einer
    <a class="underline" href="https://github.com/alexmilde/website/blob/main/src/data/colors.ts"
        >Liste von {colors.length} Farben.</a
    ><br />
    Verschiebe die Regler und die ähnlichsten gefundenen Farben werden angezeigt.<br />
    Ändere die Methode für eine andere Gewichtung.
</p>

<h2 class="mt-6 text-lg font-bold text-slate-900">Farbe einstellen</h2>
<div
    class="grid grid-cols-1 sm:grid-cols-3 gap-x-8 sm:w-8/12 px-4 py-4 mt-2 border-b-[50px]"
    style="border-color: rgb({red},{green},{blue});"
>
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
<h2 class="mt-6 text-lg font-bold text-slate-900">Methode einstellen</h2>
<div class="grid grid-cols-1 sm:grid-cols-3 gap-x-8 sm:w-8/12 mt-2">
    <div class="col-span-2">
        <select class="border px-2 py-1" bind:value={similarityMethodSelected}>
            {#each similarityMethods as similarityMethod}
                <option value={similarityMethod}>{similarityMethod.title}</option>
            {/each}
        </select>
    </div>
    <div class="col-span-1">
        <label class="">
            <input id="showDetails" type="checkbox" bind:checked={showDetails} />
            Mehr Details
        </label>
    </div>
</div>

<h2 class="mt-6 text-lg font-bold text-slate-900">Ähnlichste Farben</h2>
<div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-x-2 sm:gap-x-4 gap-y-2 mt-2">
    {#each sorted as color}
        <div
            class="w-full h-full aspect-square truncate"
            style="background-color: rgb({color.rgb[0]},{color.rgb[1]},{color.rgb[2]});"
        >
            <span class="bg-white text-xs ml-2 mt-1 px-1 py-0.5" class:hidden={!showDetails}>{color.name}</span><br />
            <span class="bg-white text-xs ml-2 mt-1 px-1 py-0.5" class:hidden={!showDetails}
                >{color.score.toFixed(5)}</span
            ><br />
            <span class="bg-white text-xs ml-2 mt-1 px-1 py-0.5" class:hidden={!showDetails}>R: {color.rgb[0]}</span><br
            />
            <span class="bg-white text-xs ml-2 mt-1 px-1 py-0.5" class:hidden={!showDetails}>G: {color.rgb[1]}</span><br
            />
            <span class="bg-white text-xs ml-2 mt-1 px-1 py-0.5" class:hidden={!showDetails}>B: {color.rgb[2]}</span><br
            />
        </div>
    {/each}
</div>

<div class="divide-y divide-slate-200 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100">
    <div class="mt-4 flex items-center gap-x-8 gap-y-2 flex-wrap">
        <a
            class={pink}
            aria-label="embeddings-and-query.zip"
            href={pathGithubExperiments + '/without-ai-similar-color-advanced'}
        >
            <Icon type={iconTypes.git}></Icon>
            <span>Diese Seite auf Github</span>
        </a>
    </div>
</div>
