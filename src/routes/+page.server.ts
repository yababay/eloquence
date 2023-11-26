import { parseForm } from '$lib/server'
import MongoQuotation from '$lib/server/Quotation'

export const actions = {

    default: async function({ request }) {
        const content = await parseForm(request)
        const quot = new MongoQuotation(content)
        await quot.save()
        return null
    }
}
