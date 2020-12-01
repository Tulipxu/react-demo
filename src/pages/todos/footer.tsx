import React,{ useState,useEffect } from 'react';
export default function TodosFooter() {
  const [count,setCount] = useState(0);
  return <div>
    <span>{count}</span>
  </div>
}