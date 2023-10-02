import { useDebugValue, useState, useSyncExternalStore } from 'react';
import { Atom, isSetFn } from '@alesmenzel/nuclear-core';

/**
 * Subscribe to an atom and update the React component when the atom's value changes
 * @example
 * ```js
 * import countAtom from './state.js'
 *
 * const Counter = () => {
 *   const [count, setCount] = useAtom(atom(100))
 *   // or a factory function to create the atom just once
 *   const [count, setCount, countAtom] = useAtom(() => atom(100))
 *
 *   // you can read the value directly from the atom in callbacks, or use the count and setCount
 *   useEffect(() => {
 *     const timeout = setTimeout(() => {
 *       countAtom.value += 1
 *     }, 2000)
 *     return () => clearTimeout(timeout)
 *   }, [countAtom])
 *
 *   return <div>{count}</div>
 * }
 * ```
 */
export function useAtom<Value>(
  atom: Atom<Value> | (() => Atom<Value>)
): [Value, Atom<Value>['set'], Atom<Value>] {
  const [newAtom] = useState(() => (isSetFn(atom) ? atom() : atom));
  useDebugValue(() => newAtom.value);

  useSyncExternalStore(newAtom.subscribe, newAtom.get);

  return [newAtom.value, newAtom.set, newAtom];
}
