import { useLayoutEffect, useDebugValue, useState } from 'react';
import { IAtom, isSetFn } from '@alesmenzel/nuclear-core';

export type UseAtomOutput<Value> = [Value, IAtom<Value>['set']];
export type ValueFn<Value> = () => Value;

/**
 * Subscribe to an atom and update the React component when the atom's value changes
 * @example
 * ```js
 * // Local state
 * import countAtom from './state.js'
 *
 * const Counter = () => {
 *   const countAtom = useAtom(atom(100))
 *   // or a factory function to create the atom just once
 *   const countAtom = useAtom(() => atom(100))
 *
 *   return <div>{countAtom.value}</div>
 * }
 *
 * // Global state
 * import countAtom from './state.js'
 *
 * const Counter = () => {
 *   useAtom(countAtom)
 *
 *   return <div>{countAtom.value}</div>
 * }
 * ```
 */
export function useAtom<Value, Atom extends IAtom<Value>>(atom: Atom | ValueFn<Atom>): Atom {
  const [newAtom] = useState(() => (isSetFn(atom) ? atom() : atom));
  useDebugValue(() => newAtom.value);
  const [, setValue] = useState(newAtom.value);

  useLayoutEffect(() => newAtom.subscribe(setValue), [newAtom]);

  return newAtom;
}

export default useAtom;
