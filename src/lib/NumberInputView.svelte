<script lang="ts">
    import { firstInput, operator, secondInput } from "../store/store";
</script>

<div class="inputView">
    {#if $firstInput === ""}
        <p class="inputNumber">0</p>
    {:else}
        <p class="inputNumber">{$firstInput}</p>
    {/if}
</div>

<style>
    .inputView {
        background-color: hsl(224, 36%, 15%);
        min-height: 100px;
        margin-bottom: 20px;
        margin-top: 30px;
        border-radius: 8px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 20px;
    }

    .inputNumber {
        color: white;
        font-size: 40px;
        text-align: right;
        font-family: "League Spartan", sans-serif;
    }
</style>
