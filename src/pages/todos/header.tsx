import React,{ useState,useEffect } from 'react';
import  Input  from 'antd/es/input';
import 'antd/es/input/style/index.css';
import 'antd/es/button/style/index.css'
const { Search } = Input;
const onSearch = (value:string) => console.log(value);
export default function TodosHead() {
  return <div>
    <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
  </div>
}