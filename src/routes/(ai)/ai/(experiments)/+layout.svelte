<script lang="ts">
    import { iconTypes } from '../../../../commons/constants'
    import Icon from '../../../../components/Icon.svelte'
</script>

<div class="mx-auto my-10 px-4 sm:px-6 md:px-4">
    <slot />
    <div class="mt-8">
        <a
            class="flex items-center gap-x-2 text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900"
            aria-label="Ausprobieren"
            href="/ai"
        >
            <Icon type={iconTypes.back}></Icon><span>Übersicht</span>
        </a>
    </div>
</div>
