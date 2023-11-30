<script lang="ts">
    import type { Quotation } from "$lib/types";
    import type { Readable } from "svelte/motion";
    import { fade } from 'svelte/transition';

   export let data: {next: Readable<number>, quotation: Readable<Promise<Quotation>>}
   const { next, quotation } = data
</script>


<article>
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
    <p class="quotation-next"><a href={`/page/${$next}`}>Еще цитата</a></p> 
</article>

<style lang="scss">
    article {
        width: 100%;
        max-width: 80ch;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 80%;
        position: relative;
        margin-bottom: 10%;

        blockquote {
            margin-top: 3rem;
            border-left: 5px solid grey;
            padding-left: 2rem;
        }
    }

    .quotation-russian {
        font-size: larger;
        white-space: pre-line;
    }

    .quotation-english {
        font-size: smaller;
    }

    .quotation-author {
        padding-left: 30%;
        text-align: end;
        font-style: italic;
        margin: 3rem 2rem 0 0;
    }

    .quotation-next {
        position: absolute bottom center;
        background-image: url('/vegniette.svg');
        background-repeat: no-repeat;
        background-position: bottom center;
        background-size: cover;
        height: 3rem;
        font-size: smaller;
        text-align: center;
        a {
            color:#616b71;
            text-decoration: none;
            &:hover {
                color: #91999f;
            }
        }
    }
</style>