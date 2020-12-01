import React,{ useState,useEffect } from 'react';
export default function TodosItem() {
  const [count,setCount] = useState(0);
  const [data,setDate] = useState([{
    id:0,
    content:'测试1',
    status:false
  }])
  useEffect(() => {
    let index:number=0;
    data.map(item=> {
      index+=1;
      if(!item.status) setCount(index); 
    })
  },[count]); // 仅在 count 更改时更新
  return <div>
    <ul>
      {data.map((item:any,index:number)=> {
        return(<li key={index}>{item.content}</li>)
      })}
    </ul>
  </div>
}