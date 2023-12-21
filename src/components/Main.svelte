<script lang="ts">
    export let hideInfobarDeails: boolean = false
    const mainStyle = (hideInfobarDeails: boolean): string => {
        const styleDefault = 'border-t border-slate-300 lg:relative lg:mb-28 lg:ml-112 lg:border-t-0 xl:ml-120'
        const styleHidden = 'border-t border-slate-300 lg:relative lg:mb-28 lg:border-t-0 lg:ml-28 '
        return hideInfobarDeails ? styleHidden : styleDefault
    }
</script>

<main class={mainStyle(hideInfobarDeails)}>
    <div class="relative">
        <div class="pb-12 sm:pt-16 sm:pb-4 lg:pt-12">
            <slot />
        </div>
    </div>
</main>
