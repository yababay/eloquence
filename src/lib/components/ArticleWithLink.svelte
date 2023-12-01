<script lang="ts">
    import { base } from '$app/paths'

    export let 
        label: string = "Ещё цитата",
        next: number = 1
        
    </script>

<article>
    <slot />
    <p class="quotation-next"><a href={`${base}/page/${next}`}>{label}</a></p> 
</article>

<style lang="scss">
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
