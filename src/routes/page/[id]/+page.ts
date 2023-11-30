import { PUBLIC_PAGE_COUNT } from "$env/static/public";
import { derived } from "svelte/store"; 
import { page } from "$app/stores";

export const ssr = false

const quotation = derived(page, async $page => {
    let { id } = $page.params
    while(id.length < 3) id = `0${id}`
    const url = `/quotations-${id}.json`
    const res = await fetch(url)
    if(res.status > 299) throw 'bad bundle'
    const bundle = await res.json()
    if(!Array.isArray(bundle)) throw 'no array'
    const n = Math.floor(Math.random() * bundle.length)
    return bundle[n]
})

const next = derived(page, $page => {
    const { id } = $page.params
    return id === PUBLIC_PAGE_COUNT ? 1 : (parseInt(id) + 1)
})

export function load(){
    return {next, quotation}
}
