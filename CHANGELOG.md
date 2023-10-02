# 2.0.0

- **[Breaking]** Change the output of `useAtom` to be `[value, setter, atom]` instead of just atom, users should prefer using the value and setter returned from `useAtom` to render values and change values in effects/callbacks. Though using the atom directly still works the same and returns up to date values.

```diff
- const countAtom = useAtom(atom(200))
+ const [count, setCount, countAtom] = useAtom(atom(200))
```

- `useAtom` now uses `useSyncExternalStore` under the hood instead of synchronizing the state manually
