import { useEffect, useRef, useState } from 'react';
import './App.css';
import UseRef from './components/UseRef';



/*  The useRef hook is a built-in hook in React that provides a way to create a mutable object which persists across re-renders of a component. 
    It is commonly used for accessing and interacting with DOM elements directly, storing previous values, or maintaining any mutable value 
    that doesn’t trigger a re-render when updated. 
*/
function App() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  });

  const prevCount = prevCountRef.current;

  return (
    <div className="App">
      <h1>Now: {count}, before: {prevCount}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <UseRef />
    </div>
  );
}

export default App;
