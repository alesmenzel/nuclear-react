# ⚛️ Nuclear React

`Nuclear Core`'s bindings for React.

## Installation

```bash
npm install @alesmenzel/nuclear-core @alesmenzel/nuclear-react
```

### Usage

See [`@alesmenzel/nuclear-core` documentation](https://github.com/alesmenzel/nuclear-core/blob/main/README.md).

#### useAtom

Hook `useAtom` is used to subscribe React component to the atom's state. Whenever the atom's value changes, the  subscribed React components will re-render as well.

```tsx
import { atom } from '@alesmenzel/nuclear-core'
import { useAtom } from '@alesmenzel/nuclear-react'

const Counter = () => {
  const countAtom = useAtom(() => atom(100))

  return (
    <div>
      <pre>{countAtom.value}</pre>
      <button onClick={() => countAtom.set(count => count + 1)}>Increment by 1</button>
    </div>
  )
}
```
