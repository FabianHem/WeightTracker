import {derived, writable, Writable} from 'svelte/store';

/*
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
 */

export type WeightEntryType = {
  weight: number,
  date: Date,
  comment: string,
};

// Turns date-strings into date-objects
const localStorageToStored = () => {
  const content = localStorage.content ? JSON.parse(localStorage.content) : [];
  return content.map((entry) => ({
    ...entry,
    date: new Date(entry.date)
  }));
};

const stored = localStorageToStored();

export const weights: Writable<WeightEntryType[]> = writable(stored || []);

weights.subscribe((value) => localStorage.content = JSON.stringify(value));
