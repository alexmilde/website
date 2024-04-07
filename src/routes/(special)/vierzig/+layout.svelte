<script lang="ts">
    import '../../../app.pcss'
    const style = `<style>
        html {
        background-color: black;
    } </style>`
</script>

{@html style}

<div class="bg-black cursor-cake">
    <slot />
</div>

<style>
</style>
