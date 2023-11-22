<script lang="ts">
    import type { EnglishRussian } from '$lib/types'
    export let data: EnglishRussian
    const { english, russian } = data
    const [ russianText, russianAuthor ] = russian.split('--')
</script>

<article>
    <blockquote>
        <p class="russian">{russianText.trim()}</p>
        {#if english}
            <p class="english">{english.split('--')[0].trim()}</p>
        {/if}
    </blockquote>
    <p>{russianAuthor.trim()}</p>
</article>
