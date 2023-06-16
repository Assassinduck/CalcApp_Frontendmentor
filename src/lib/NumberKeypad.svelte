<script lang="ts">
    import { get } from "svelte/store";
    import { firstInput, operator, result, secondInput } from "../store/store";
    import { onMount } from "svelte";

    let operatorString = $operator;
    let firstInputString = $firstInput;
    let secondInputString = $secondInput;

    onMount(() => {
        console.log("first input: " + get(firstInput));
    });

    function setOperator(event) {
        if (get(firstInput) === "") return;
        operator.update(() => event.target.innerText);
        console.log("operator: " + get(operator));
    }

    function resetInputs() {
        firstInput.update(() => "");
        secondInput.update(() => "");
        operator.update(() => "");
    }

    function deleteInputtedNumber() {
        let firstInputLength = get(firstInput).length;
        let secondInputLength = get(secondInput).length;

        if (firstInputLength > 0 && secondInputLength === 0) {
            firstInput.update((input) => input.slice(0, -1));
        }

        if (secondInputLength > 0) {
            secondInput.update((input) => input.slice(0, -1));
        } else {
            operator.update(() => "");
        }
    }

    const getOperator = () => {
        switch (get(operator)) {
            case "+":
                return;
            case "-":
                return (a, b) => a - b;
            case "x":
                return (a, b) => a * b;
            case "÷":
                return (a, b) => a / b;
            default:
                return (a, b) => a + b;
        }
    };

    function calculate() {
        if (get(firstInput) === "" && get(secondInput) === "") return;

        let newResult = parseFloat($result);

        if (newResult !== 0) {
            let oldOperator = get(operator);
            result.update((result) =>
                (parseFloat(result) + parseFloat(get(secondInput))).toString()
            );
            return;
        }

        result.update(() => newResult.toString());

        firstInput.update(() => result.toString());
        secondInput.update(() => "");
        operator.update(() => "");
    }

    function handleNumberInput(event) {
        if ($operator === "") {
            if (get(firstInput) + event.target.innerText === "0") return;

            firstInput.update((input) => input + event.target.innerText);
            console.log(get(firstInput));
        } else {
            console.log("second input: " + get(secondInput));

            if (get(secondInput) + event.target.innerText === "0") return;

            secondInput.update((input) => input + event.target.innerText);
        }
    }
</script>

<div class="buttonContainer">
    <div class="buttonRowContainer">
        <button
            on:click={handleNumberInput}
            class="numberInputButton buttonFont">7</button
        >
        <button
            on:click={handleNumberInput}
            class="numberInputButton buttonFont">8</button
        >
        <button
            on:click={handleNumberInput}
            class="numberInputButton buttonFont">9</button
        >
        <button class="specialFunctionButton numberInputButton buttonFont"
            >DEL</button
        >
    </div>
    <div class="buttonRowContainer">
        <button
            on:click={handleNumberInput}
            class="numberInputButton buttonFont">4</button
        >
        <button
            on:click={handleNumberInput}
            class="numberInputButton buttonFont">5</button
        >
        <button
            on:click={handleNumberInput}
            class="numberInputButton buttonFont">6</button
        >
        <button on:click={setOperator} class="numberInputButton buttonFont"
            >+</button
        >
    </div>
    <div class="buttonRowContainer">
        <button
            on:click={handleNumberInput}
            class="numberInputButton buttonFont">1</button
        >
        <button
            on:click={handleNumberInput}
            class="numberInputButton buttonFont">2</button
        >
        <button
            on:click={handleNumberInput}
            class="numberInputButton buttonFont">3</button
        >
        <button on:click={setOperator} class="numberInputButton buttonFont"
            >-</button
        >
    </div>
    <div class="buttonRowContainer">
        <button
            on:click={handleNumberInput}
            class="numberInputButton buttonFont">.</button
        >
        <button
            on:click={handleNumberInput}
            class="numberInputButton buttonFont">0</button
        >
        <button on:click={setOperator} class="numberInputButton buttonFont"
            >/</button
        >
        <button on:click={setOperator} class="numberInputButton buttonFont"
            >*</button
        >
    </div>
    <div class="buttonRowContainer">
        <button
            on:click={resetInputs}
            class="specialFunctionButton button_reset buttonFont">RESET</button
        >
        <button class="specialFunctionButton button_equls buttonFont">=</button>
    </div>
</div>

<style>
    .numberInputButton {
        width: 80px;
        height: 50px;
        background-color: hsl(30, 25%, 89%);
        text-align: center;
        border-radius: 5px;
        font-size: 32px;
        color: hsl(221, 14%, 31%);
        box-shadow: inset 0px -4px 0px 0px rgb(163 157 152 / 65%);
    }

    .buttonFont {
        font-family: "League Spartan", sans-serif;
    }

    .specialFunctionButton {
        background-color: hsl(225, 21%, 49%);
        color: white;
        font-size: 20px;
        text-align: center;
        box-shadow: inset 0px -4px 0px 0px rgb(64 77 114);
        height: 50px;
        border-radius: 5px;
    }

    .button_reset {
        flex: 1;
        box-shadow: inset 0px -4px 0px 0px rgb(64 77 114);
    }

    .button_equls {
        background-color: hsl(6, 63%, 50%);
        color: white;
        font-size: 20px;
        flex: 1;
        text-align: center;
        box-shadow: inset 0px -4px 0px 0px hsl(6, 70%, 34%);
    }

    .buttonRowContainer {
        margin-bottom: 20px;
        gap: 20px;
        display: flex;
        flex: 1;
    }

    .buttonContainer {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        align-content: center;
        background-color: hsl(223, 31%, 20%);
        border-radius: 5px;
        width: min-content;
        padding: 25px 25px 0px 25px;
    }
</style>
