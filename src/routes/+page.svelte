<script lang="ts">
    import type { Quotation } from '$lib/types'
    export let data: Quotation
    const { foreign, russian } = data
    const { caption, author } = russian
</script>

<form method="post">
    <blockquote>
        <p class="quotation-russian">{caption.trim()}</p>
        {#if foreign}
            <p class="quotation-english">{foreign.trim()}</p>
        {/if}
        <p class="quotation-author">{author.trim()}</p>
    </blockquote>
    <input type="submit" value="Еще цитата" 
        class="btn btn-secondary quotation-next" 
        formaction="?/next"
    >
</form>

<style lang="scss">
    form {
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
        color:#616b71;border:0px #000 solid;background-color:#444d53;
        background-image: url('/vegniette.svg');
        background-repeat: no-repeat;
        background-position: bottom center;
        background-size: cover;
        height: 5rem;
        font-size: smaller;
        &:hover {
            color: #91999f;
        }
    }
</style>
