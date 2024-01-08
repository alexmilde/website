<script lang="ts">
    import Icon from '../../../components/Icon.svelte'
    import { iconTypes } from '../../../commons/constants'
    import Teaser from '../../../components/Teaser.svelte'
    import { aiTeasers } from '../../../data/texts'
</script>

{#each aiTeasers as aiTeaser}
    <Teaser data={aiTeaser} prefix="ai" />
{/each}

<div class="pt-8 lg:px-8 ml-4">
    <a
        class="flex items-center gap-x-2 text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900"
        aria-label="Ausprobieren"
        href="/"
    >
        <Icon type={iconTypes.back}></Icon><span>Startseite</span>
    </a>
</div>
