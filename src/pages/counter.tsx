import { countState, decrementCount, incrementCount } from '@/libs/recoil-atoms'
import { useRecoilValue, useSetRecoilState, useResetRecoilState } from 'recoil'

const useCounter = () => ({
  count: useRecoilValue(countState),
  increment: useSetRecoilState(incrementCount),
  decrement: useSetRecoilState(decrementCount),
  reset: useResetRecoilState(countState),
})

const Counter = () => {
  const { count, increment, decrement, reset } = useCounter()
  const notUsed = 0

  return (
    <div>
      <h1>
        Count: <span>{count}</span>
      </h1>
      <button onClick={() => increment(notUsed)}>+1</button>
      <button onClick={() => decrement(notUsed)}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter
