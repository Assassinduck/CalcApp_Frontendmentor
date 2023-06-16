<script lang="ts">
    import NumberInput from "./lib/NumberKeypad.svelte";
    import NumberInputView from "./lib/NumberInputView.svelte";
    import CalcHeader from "./lib/calcHeader/CalcHeader.svelte";
</script>

<main>
    <div class="container">
        <CalcHeader />
        <NumberInputView />
        <NumberInput />
    </div>
</main>

<style>
    main {
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        background-color: hsl(222, 26%, 31%);
        flex: 1;
        height: 100dvh;
    }

    .container {
        max-width: 450px;
    }
</style>
