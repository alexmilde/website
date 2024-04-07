<script lang="ts">
    const gradient = `
    text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600
    bg-gradient-to-l
    from-blue-400
    to-orange-500
    via-purple-500
    animate-gradient-x
    `
</script>

<svelte:head>
    <title>AM40</title>
</svelte:head>

<div
    class="py-2 sm:py-10 md:py-20 mx-2 sm:mx-14 md:mx-20 text-[35px] sm:text-7xl md:text-8xl leading-tight 12md:leading-[100px] cursor-drink"
>
    <div class="max-w-[1280px]">
        <h1 class="font-inter font-black text-white">
            Man wird nur <span class={gradient}>einmal 40 im Leben.</span> Aber 37 oder so ja auch. Egal: diesen Fetisch
            der Null möchte ich <span class={gradient}>mit dir feiern.</span>
            <br />
            Bügel schon mal deine Socken für den
            <a href="/vierzig/Alex_Geburtstag.ics" class="border-b-[5px] md:border-b-8 border-[#FF00C2]">
                <span class={gradient}>11.Mai. Ab 16:00</span>
            </a>
            spielen wir ne Partie Bingo oder Bierpong. Natürlich im
            <a
                href="https://maps.app.goo.gl/i69CaVCo5ttKX4un9"
                target="_blank"
                class="border-b-[5px] md:border-b-8 border-[#FF00C2]"
            >
                <span class={gradient}>Pattweg, Herford.</span>
            </a>
            Eins noch: Du bist aber sowas von dabei?! <span class={gradient}>Gib kurz Bescheid.</span> Das hilft mir die
            Größe des Mettigels zu planen.
        </h1>
    </div>
</div>
