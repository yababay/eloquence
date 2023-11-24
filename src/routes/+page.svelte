<script lang="ts">
    import { Textarea } from '@yababay67/sveltekit-components'
    import type { EnglishRussian } from '$lib/types'
    export let data: EnglishRussian, form: EnglishRussian
    const { english, russian } = (form ? form : data)

</script>

<form method="post">
    <Textarea name="english" caption={english || ''} rows={6}/>
    <Textarea name="russian" caption={russian || ''} rows={12}/>
    <div class="quotation-controls">
        <input type="submit" value="Следующая" class="btn btn-primary" formaction="?/next">
        <input type="submit" value="Сохранить" class="btn btn-primary" formaction="?/save">
    </div>
</form>

<style lang="scss">
    form {
        width: 100%;
        max-width: 80ch;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .quotation-controls {
            margin-top: 3rem;
            width: 100%;
            display: flex;
            justify-content: space-between;
        }
    }
</style>
