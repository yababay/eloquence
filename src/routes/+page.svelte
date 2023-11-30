<script lang="ts">
    import type { WithHtml } from "@yababay67/sveltekit-components/types";
    import { Article } from "@yababay67/sveltekit-components";
    export let data: WithHtml
    const { html } = data
</script>

<Article {html} />
