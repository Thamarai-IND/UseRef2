import React, { useEffect, useRef } from 'react'

const UseRef = () => {
    const inputRef = useRef(null);

    useEffect(() => {
      // Focus the input element when the component mounts
      inputRef.current.focus();
    }, []);
  
    return (
      <div>
        <input ref={inputRef} type="text" />
      </div>
    );
}

export default UseRef