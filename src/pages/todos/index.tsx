import React,{ useState,useEffect } from 'react';
import TodosHead from './header';
import TodosItem from './items';
import TodosFooter from './footer'
const onSearch = (value:string) => console.log(value);
export default function Home() {
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
    <TodosHead/>
    <TodosItem/>
    <TodosFooter/>
  </div>
}