import { useSelector, useDispatch } from 'react-redux'

import {
  increment,
  decrement,
  reset,
} from './redux/slices/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Redux Toolkit Counter
        </h1>

        <p className="text-gray-600 mb-2">
          Current count
        </p>

        <p className="text-5xl font-bold mb-6">
          {count}
        </p>

        <div className="flex gap-3 justify-center flex-wrap">
          <button
            onClick={() => dispatch(increment())}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
          >
            Increment
          </button>

          <button
            onClick={() => dispatch(decrement())}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
          >
            Decrement
          </button>

          <button
            onClick={() => dispatch(reset())}
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default App