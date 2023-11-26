<script lang="ts">
    import type { Quotation } from '$lib/types';
    import { Textarea } from '@yababay67/sveltekit-components'

    export let revision: boolean = false, quotation: Quotation | undefined = undefined

    let foreign = ''
    let captionValue = ''
    let authorValue = ''

    if(quotation){
        const { russian } = quotation
        const { caption, author } = russian
        captionValue = caption
        authorValue = author
    }
</script>

<form method="post">
    <div><Textarea name="foreign" rows={4} value={foreign}/></div>
    <div><Textarea name="caption" rows={14} value={captionValue}/></div>
    <div class="author-holder">
        <span>Автор:</span>
        <input type="text" class="form-control" name="author" value={authorValue}>
    </div>
    <div class:quotation-controls-between={revision} class:quotation-controls-end={!revision}>
        {#if revision}
            <input type="submit" value="Удалить" class="btn btn-primary">
        {/if}
        <input type="submit" value="Сохранить" class="btn btn-primary">
    </div>
</form>

<style lang="scss">
    %quotation-controls {
        width: 100%;
        display: flex;
    }

    .author-holder {
        display: flex;
        justify-content: space-between;
        span {
            width: 10ch;
        }
    }

    form {
        width: 100%;
        height: 90%;
        max-width: 80ch;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .quotation-controls-between {
            @extend %quotation-controls;
            justify-content: space-between;
        }

        .quotation-controls-end {
            @extend %quotation-controls;
            justify-content: end;
        }
    }
</style>
