<script lang="ts">
    export let title: string
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<a class="group flex items-center" {...$$restProps}>
    <slot />
    <span class="hidden sm:ml-3 sm:block">{title}</span>
</a>
