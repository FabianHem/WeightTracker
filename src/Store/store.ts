import {derived, writable, Writable} from 'svelte/store';
import {getDataFromLocalStorage} from '../util/StorageUtil';

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
    weight: 85,
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
    weight: 87.3,
    date: new Date(new Date().setDate(new Date().getDate() - 360)),
    comment: 'week 1'
  },
  {
    weight: 87.3,
    date: new Date(new Date().setDate(new Date().getDate() - 720)),
    comment: 'week 1'
  }
];

export type WeightEntryType = {
  weight: number,
  date: Date,
  comment: string,
};

export const storeWeights: Writable<WeightEntryType[]> = writable(initEntriesForTesting);

/*
TODO hook up to localStorage or better yet use a backend right away

// Hooks this up to localStorage https://dev.to/danawoodman/svelte-quick-tip-connect-a-store-to-local-storage-4idi
const stored = localStorage.content ? JSON.parse(localStorage.content) : [];

export const storeWeights: Writable<WeightEntryType[]> = writable(stored || []);

storeWeights.subscribe((value) => localStorage.content = JSON.stringify(value));
*/
