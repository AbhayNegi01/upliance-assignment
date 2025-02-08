import { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

const Counter = () => {
  const [count, setCount] = useState(() => {
    return Number(localStorage.getItem("count")) || 0;
  });

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  const background = useSpring({ 
    backgroundColor:
      count < 0
        ? `rgba(255, ${130 + count * 10}, 0, ${Math.abs(count) * 0.1})`
        : `rgba(0, 100, 255, ${count * 0.1})`,
    config: { tension: 200, friction: 20 }, 
  });

  return (
    <div className='bg-pink-400 w-1/4 my-20 mx-12 flex justify-center text-white/70 overflow-hidden rounded-3xl'>
      <animated.div style={{
          ...background,
          padding: '50px',
        }}>
        <h1 className='text-center text-xl my-3 font-medium'>{count}</h1>
        <h1 className='text-center text-lg my-8 font-medium'>Counter</h1>
        <div className='flex'>
          <button className='bg-violet-500 px-10 py-3 mx-6 rounded-lg' onClick={() => setCount(count - 1)}>-</button>
          <button className='bg-violet-700 px-8 py-3 mx-5 rounded-lg' onClick={() => setCount(0)}>Reset</button>
          <button className='bg-violet-500 px-10 py-3 mx-6 rounded-lg' onClick={() => setCount(count + 1)}>+</button>
        </div>
      </animated.div>
    </div>

  );
};

export default Counter;