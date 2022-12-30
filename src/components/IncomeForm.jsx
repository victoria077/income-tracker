import React from 'react'
import {useRef} from "react";

function IncomeForm({income, setIncome}) {
  const desc = useRef(null);
  const date = useRef(null);
  const price = useRef(null);

  const addIncome = e => {
     e.preventDefault();
     let splitedDate = date.current.value.split('-');
     let newD = new Date(splitedDate[0], splitedDate[1], splitedDate[2]);

     setIncome([...income, {
         "desc": desc.current.value,
         "price": price.current.value,
         "date": newD.getTime()
     }])

     desc.current.value = "";
     price.current.value = null;
     date.current.value = null
  }
  return (
    <form className='income-form' onSubmit={addIncome}>
        <div className='form-inner'>
           <input type="text" ref={desc} name="desc" id="desc" placeholder='Income Description...'/>
           <input type="number" ref={price} name="price" id="price" placeholder='Price...'/>
           <input type="date" ref={date} name="date" id="date" placeholder='Income date...'/>
           <input type="submit" value="Add Income"/>
        </div>
    </form>
  )
}

export default IncomeForm