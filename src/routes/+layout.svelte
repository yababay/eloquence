<script lang="ts">
    import '@yababay67/sveltekit-components/styles/publications.scss'
    import './+layout.scss'
    import { Layout } from '@yababay67/sveltekit-components'
    import type { SeoProps, BootstrapSource } from '@yababay67/sveltekit-components/types'
    import { author, title, subtitle, description, keywords, license, url, bootstrap as BOOTSTRAP_SOURCE } from '../app.json'

    const bootstrap = BOOTSTRAP_SOURCE as BootstrapSource
    const seo: SeoProps = { author, title, subtitle, description, keywords, license, url }
</script>

<Layout {seo} {bootstrap} >
    <slot />
</Layout>
