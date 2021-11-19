import React, { useState } from 'react';


const Deletecomp=( props)=>{
    
    return(
        <>
            <div className="todolist">
            <i className="fa fa-times" aria-hidden="true"
             onClick={()=>{
            props.onSelect(props.id)
            }}
            />
             <li>{props.value}</li>
             </div>
            
       </>
    )

}
export default Deletecomp;