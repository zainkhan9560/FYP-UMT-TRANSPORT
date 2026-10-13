
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from './features/counter/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 p-6">
      <div className="rounded-2xl bg-white p-8 text-center shadow-xl">
        <h1 className="text-3xl font-bold text-blue-600">
          Redux Toolkit
        </h1>

        <p className="my-6 text-5xl font-bold">{count}</p>

        <div className="flex gap-3">
          <button
            onClick={() => dispatch(decrement())}
            className="rounded-lg bg-red-600 px-4 py-2 text-white"
          >
            −
          </button>

          <button
            onClick={() => dispatch(increment())}
            className="rounded-lg bg-blue-600 px-4 py-2 text-white"
          >
            +
          </button>

          <button
            onClick={() => dispatch(reset())}
            className="rounded-lg bg-gray-700 px-4 py-2 text-white"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
