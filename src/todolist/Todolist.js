import React, { useState } from "react";
import Deletecomp from "./Deletecomp";


const List=()=>{
    const [item,setitem]=useState("");
    const [itemlist,setitemlist]=useState([]);
    const func=(event)=>{
        setitem(event.target.value)
    };
    const func1=()=>{
        
        setitemlist((olditem)=>{
            return [...olditem,item];
        });
        
        setitem(" ");
    }
    const deleteitem=(id)=>{
        console.log("deleted");
        setitemlist((olditem)=>{
            return olditem.filter((arrElem,index)=>{
                return index!==id;
            });
        });

  };

 
   
    return(
        <>
        <div className="maindiv">
        <div className="innerdiv">
        <input type="text" placeholder="enter your item" value={item} onChange={func}></input>
        <button onClick={func1}>+</button>
        <ol>
          { itemlist.map((val,index)=>{
         return  <Deletecomp
         key={index}
         id={index}
              value={val}
              onSelect={deleteitem}
          />
          
           })}
        </ol>
        </div>
        </div>
        </>
    )
    
}
export default List;