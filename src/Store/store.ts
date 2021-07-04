import {derived, writable, Writable} from 'svelte/store';

export type WeightEntryType = {
  weight: number,
  date: Date,
  comment: string,
}

const initEntriesForTesting: WeightEntryType[] = [
  {
    weight: 88.3,
    date: new Date(new Date().setDate(new Date().getDate() - 1)),
    comment: 'week 4'
  },
  {
    weight: 90,
    date: new Date(new Date().setDate(new Date().getDate() - 2)),
    comment: 'week 4'
  },
  {
    weight: 1500,
    date: new Date(new Date().setDate(new Date().getDate() - 4)),
    comment: 'week 4'
  },
  {
    weight: 85.9,
    date: new Date(new Date().setDate(new Date().getDate() - 10)),
    comment: 'week 3'
  },
  {
    weight: 85.3,
    date: new Date(new Date().setDate(new Date().getDate() - 30)),
    comment: 'week 2'
  },
  {
    weight: 20.3,
    date: new Date(new Date().setDate(new Date().getDate() - 360)),
    comment: 'week 1'
  }
];

export const storeWeights: Writable<WeightEntryType[]> = writable(initEntriesForTesting);
