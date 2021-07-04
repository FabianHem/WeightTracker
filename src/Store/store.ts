import { derived, writable, Writable } from "svelte/store";

export type WeightEntry = {
  weight: number,
  date: string,
  comment: string,
}

export const storeWeights: Writable<WeightEntry[]> = writable([])
