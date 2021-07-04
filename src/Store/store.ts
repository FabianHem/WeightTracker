import { derived, writable, Writable } from "svelte/store";

export type WeightEntryType = {
  weight: number,
  date: Date,
  comment: string,
}

const initEntriesForTesting: WeightEntryType[] = [
  {
    weight: 85.3,
    date: new Date(new Date().setDate(new Date().getDate() - 10)),
    comment : '2 weeks ago'
  },
  {
    weight: 86.6,
    date: new Date(new Date().setDate(new Date().getDate() - 4)),
    comment : '4 days ago'
  },
  {
    weight: 90,
    date: new Date(new Date().setDate(new Date().getDate() - 2)),
    comment : '2 days ago'
  },
  {
    weight: 88.3,
    date: new Date(new Date().setDate(new Date().getDate() - 1)),
    comment : '1 day ago'
  },
]

export const storeWeights: Writable<WeightEntryType[]> = writable(initEntriesForTesting)
