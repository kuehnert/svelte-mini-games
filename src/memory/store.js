import { writable } from 'svelte/store'

const cardNames = [
  "cheeseburger",
  "fries",
  "hotdog",
  "ice-cream",
  "milkshake",
  "pizza"
];
const cards0 = cardNames.map(n => ({ id: `0${n}`, name: n, state: 0 }));
const cards1 = cards0.map(c => ({...c, id: `1${c.name}` }));
const initialCards = [...cards0, ...cards1].sort((a, b) => 0.5 - Math.random());

function createCards() {
  const { subscribe, update } = writable(initialCards);

  return {
    subscribe,
    changeState: (id, state) => update((cards) => {
      const i = cards.findIndex(c => c.id === id);
      cards[i].state = state;
      return cards;
    })
  }
}
export const cards = createCards();
export const message = writable("");
export const score = writable(0);
export const disabled = writable(false);
