<script lang="ts">
    import type { WithHtml } from "@yababay67/sveltekit-components/types";
    import ArticleWithLink from "$lib/components/ArticleWithLink.svelte";
    export let data: WithHtml
    const { html } = data
</script>

<ArticleWithLink label="Начать просмотр">
    <div>{@html html}</div>
</ArticleWithLink>
