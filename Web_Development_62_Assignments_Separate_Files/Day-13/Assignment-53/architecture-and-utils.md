# Architecture Notes
- `state`: in-memory array of task objects.
- `load`: reads JSON from localStorage.
- `validate`: checks title is a non-empty string.
- `add/update/delete`: mutate state.
- `persist`: writes state to localStorage.
- `render`: creates DOM nodes using `textContent`.
## Starter Utility Functions
```js
const isNonEmpty = value => typeof value === "string" && value.trim().length > 0;
const createId = () => Date.now() + Math.random();
const saveJSON = (key, value) => localStorage.setItem(key, JSON.stringify(value));
const readJSON = (key, fallback = []) => {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
  catch { return fallback; }
};
```
