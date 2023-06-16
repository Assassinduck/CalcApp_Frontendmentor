<script lang="ts">
    import ThemeSlide from "./ThemeSlide.svelte";
</script>

<div class="calcHeader">
    <p class="calcHeaderText">calc</p>
    <ThemeSlide />
</div>

<style>
    .calcHeaderText {
        color: white;
        font-size: 25px;
        font-family: "League Spartan", sans-serif;
    }

    .calcHeader {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: flex-end;
    }
</style>
