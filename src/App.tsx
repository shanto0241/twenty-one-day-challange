// import './App.css'

import { decrement, increment, incrementByAmount, decrementByAmount } from "./redux/features/counter/counterslice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="bg-cyan-700 text-center">
        <h1 className="py-2 text-white font-mono text-2xl">Tech Net</h1>
      </div>
      <div className="mt-10 flex flex-wrap gap-10 justify-center">
      <div className="bg-cyan-600 text-center p-2 w-full">{count}</div>

        <button
          onClick={() => dispatch(increment())}
          className="px-3 py-2 bg-green-300"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(15))}
          className="px-3 py-2 bg-green-300"
        >
          Increment By value
        </button>
        <button
          onClick={() => dispatch(decrementByAmount(15))}
          className="px-3 py-2 bg-red-500"
        >
          Decrement By value
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="px-3 py-2 bg-red-600"
        >
          Decrement
        </button>
      </div>
    </>
  );
}

export default App;
