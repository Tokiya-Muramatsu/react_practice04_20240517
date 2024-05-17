import React, { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning]);

  const handleToggle = () => {
    setIsRunning(prevState => !prevState);
  };

  return (
    <div>
      <h1>タイマー: {count}秒</h1>
      <button onClick={handleToggle}>{isRunning ? '停止' : '開始'}</button>
    </div>
  );
}

export default Timer;
