<script lang="ts">
    import '@yababay67/sveltekit-components/styles/dummy.scss'
    import './+layout.scss'
    import { Layout } from '@yababay67/sveltekit-components'
    import type { SeoProps, BootstrapSource } from '@yababay67/sveltekit-components/types'
    import { author, brand, title, subtitle, description, keywords, 
        license, url, bootstrap as WITH_BOOTSTRAP } from '../app.json'

    const bootstrap = WITH_BOOTSTRAP as BootstrapSource
    const seo: SeoProps = { author, brand, title, subtitle, description, keywords, license, url }
</script>

<Layout {seo} {bootstrap} >
    <slot />
</Layout>
