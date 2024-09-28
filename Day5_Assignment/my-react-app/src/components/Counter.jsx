import { useState } from 'react'

export const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
        <h1>Simple Todo Application</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          Inc
        </button>
        <h1>{count}</h1>
        <button onClick={() => setCount((count) => count - 1)}>
          Dec
        </button>
    </div>
  )
}
