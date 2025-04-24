import React, { useEffect, useState } from 'react'
import './index.css'
import './App.css'
//import 'bootstrap/dist/css/bootstrap.min.css'

export function App() {
  const [name,setName]=useState("");
  const [search,setSearch]=useState();
  const [searchList,setSearchList]=useState([]);
  const [list,setList]=useState([]);
  
  if(localStorage.getItem('todoItems')){
    setList([...JSON.parse(localStorage.getItem('todoItems'))])
    setSearchList([...JSON.parse(localStorage.getItem('todoItems'))]);

  }
 
  function nameChange(){
    setList([...list,name]);
    setSearchList([...list,name])
    console.log(name);
    console.log(list);
    localStorage.setItem('TodoItems',JSON.stringify(list))
  }

  function searching(){
    if(search)
      setSearchList(list.filter(val=>{if(val.includes(search))return val}))
    else
      setSearchList(list)
  
  }
  
  function deleteItem(value){
    setList(list.filter((val)=>{
      if (value!==val)
        return val
      })

    )
    setSearchList(list.filter((val)=>{
      if(value!==val)
        return val

    }))
  }

 
  

  return (
    <>
          
          <h1>TODO LIST</h1>
          <div>
            <img src="paris.jpg" alt="paris"/>
            <img src="img1"/>
          <h2>{name}</h2>
          <input type='text' onChange={(event)=>setName(event.target.value)}/>
          <button class="btn btn-primary" onClick={nameChange}>Add</button><br/><br/>
          <input type='text' placeholder="search" onChange={(event)=>setSearch(event.target.value)}/>
          <button onClick={searching}>search</button><br/><br/>
          </div>
          <div>
            {
              searchList.map((value)=>(
                <table>
                  <tbody>
                    <tr>
                   <td><h1 className='item-head'>{value}</h1></td> 
                   <td><button class="btn btn-primary" onClick={()=>deleteItem(value)}>Del</button></td>
                   </tr>
                   </tbody>
                </table>
              ))
  
            }
          </div>

    </>
  
  )
}





