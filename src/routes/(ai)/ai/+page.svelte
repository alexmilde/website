<script lang="ts">
    import Teaser from '../../../components/Teaser.svelte'
    import { aiTeasers } from '../../../data/texts'
</script>

<div class="divide-y divide-slate-200 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100">
    {#each aiTeasers as aiTeaser}
        <Teaser data={aiTeaser} prefix="ai" />
    {/each}
</div>
