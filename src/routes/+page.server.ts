import { getArticle } from '@yababay67/sveltekit-components/markdown'
import type { WithHtml } from '@yababay67/sveltekit-components/types'

export async function load({ fetch }): Promise<WithHtml>{
    const [ html ] = await getArticle(fetch, 'README')
    return { html }
}

