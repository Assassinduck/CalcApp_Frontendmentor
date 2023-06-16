import { derived, writable } from "svelte/store";

export const firstInput = writable<string>("");
export const secondInput = writable<string>("");
export const operator = writable<string>("");
export const result = writable<string>("");

export const themeNumber = writable<number>(1);
export const themeClass = writable("");
// export const result = derived([firstInput, secondInput],

// );
