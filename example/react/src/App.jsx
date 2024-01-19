import { useEffect, useRef, useState } from 'react';

export default function () {
  const [count, setCount] = useState(0);
  const [person, setPerson] = useState({ name: '' });

  const countRef = useRef(count);

  countRef.current = count;

  useEffect(() => {
    // ? person.name每次更新，两次输出的值是否一致
    console.log(countRef.current);
    return () => console.log(countRef.current);
  }, [person.name]);

  return <input value={person.name} onChange={(e) => {
    setPerson({ name: e.target.name });
  }} />
}

// App