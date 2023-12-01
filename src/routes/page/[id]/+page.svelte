<script lang="ts">
    import type { Quotation } from "$lib/types";
    import type { Readable } from "svelte/motion";
    import { fade } from 'svelte/transition';
    import ArticleWithLink from "$lib/components/ArticleWithLink.svelte";

   export let data: {next: Readable<number>, quotation: Readable<Promise<Quotation>>}
   const { next, quotation } = data
</script>

<ArticleWithLink label="Начать просмотр" next={$next}>
    {#await $quotation}
        &nbsp;
    {:then {foreign, russian} } 
        <blockquote in:fade={{ delay: 250, duration: 2000 }}>
            <p class="quotation-russian">{russian.caption.trim()}</p>
            {#if foreign}
                <p class="quotation-english">{foreign.trim()}</p>
            {/if}
            <p class="quotation-author">{russian.author.trim()}</p>
        </blockquote>
    {:catch err}
    <p>{err}</p>
    {/await}
</ArticleWithLink>
