<script lang="ts">
    import { lastWork } from '../data/texts'
    import Sidebar from './Sidebar.svelte'
</script>

<footer class="border-t border-slate-300 bg-slate-100 py-10 pb-40 sm:py-16 sm:pb-32 lg:hidden">
    <div class="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4">
        <section>
            <h2 class="flex items-center font-mono text-sm font-medium leading-7 text-slate-900">
                <svg aria-hidden="true" viewBox="0 0 10 10" class="h-2.5 w-2.5"
                    ><path
                        d="M0 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5Z"
                        class="fill-violet-300"
                    ></path><path
                        d="M6 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1Z"
                        class="fill-pink-300"
                    ></path></svg
                ><span class="ml-2.5">{lastWork.headline}</span>
            </h2>
            <p class="mt-2 text-base leading-7 text-slate-700 lg:line-clamp-4">
                <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                {@html lastWork.copy}
            </p>
        </section>
        <Sidebar target="mobile" />
    </div>
</footer>
