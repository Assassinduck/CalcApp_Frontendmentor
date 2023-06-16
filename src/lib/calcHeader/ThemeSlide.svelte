<script lang="ts">
    import { get } from "svelte/store";
    import { themeClass, themeNumber } from "../../store/store";
    import { onMount } from "svelte";
    function incrementTheme() {
        let themeStore = get(themeNumber);
        console.log(themeStore);

        themeNumber.update((theme) => {
            if (theme === 3) {
                return 1;
            } else {
                console.log("dwadwa");

                return theme + 1;
            }
        });

        giveTheme();
    }

    onMount(() => {
        giveTheme();
    });

    function giveTheme() {
        let theme = get(themeNumber);
        console.log(theme);

        if (theme === 1) {
            themeClass.update(() => "themebuttonOne");
        }
        if (theme === 2) {
            themeClass.update(() => "themebuttonTwo");
        }
        if (theme === 3) {
            themeClass.update(() => "themebuttonThree");
        }

        console.log(get(themeClass));
    }
</script>

<div class="sliderContainer">
    <p class="themeText">THEME</p>
    <div>
        <div class="sliderNumberContainer">
            <p>1</p>
            <p>2</p>
            <p>3</p>
        </div>
        <div class="sliderBody">
            <div
                class={$themeClass}
                on:keypress={() => incrementTheme()}
                on:click|preventDefault={() => incrementTheme()}
            />
        </div>
    </div>
</div>

<style>
    .sliderNumberContainer {
        display: flex;
        flex-direction: row;
        font-family: "League Spartan", sans-serif;
        color: white;
        font-size: 12px;
        margin-bottom: 5px;
        justify-content: space-evenly;
        gap: 9px;
    }

    .sliderBody {
        background-color: hsl(224, 36%, 15%);
        min-height: 15px;
        min-width: 70px;
        border-radius: 15px;
        display: flex;
    }

    .themebuttonOne {
        background-color: hsl(6, 63%, 50%);
        border-radius: 50%;
        width: 15px;
        height: 15px;
        margin: 5px;
    }

    .themebuttonOne:hover {
        cursor: pointer;
        background-color: hsl(6deg 68.5% 65.01%);
    }

    .themebuttonTwo {
        background-color: hsl(6, 63%, 50%);
        border-radius: 50%;
        width: 15px;
        height: 15px;
        margin: 5px;
        transform: translateX(22px);
    }

    .themebuttonThree {
        background-color: hsl(6, 63%, 50%);
        border-radius: 50%;
        width: 15px;
        height: 15px;
        margin: 5px;
        transform: translateX(45px);
    }

    .sliderContainer {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .themeText {
        color: white;
        font-size: 11px;
        font-family: "League Spartan", sans-serif;
        align-self: center;
        margin-top: 15px;
        margin-right: 20px;
    }
</style>
