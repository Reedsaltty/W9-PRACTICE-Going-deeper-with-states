
import { useState } from "react";

export default function StuffForm({Add}) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);


    const handleSubmit = (e) => {
        e.preventDefault();
        Add({name : name , price : price});
    }

  return (
    <form className="stuff-form" onSubmit={handleSubmit} >
      <p>Stuff name</p>
      <input type="search" placeholder="Banana" value={name} onChange={(e)=> setName(e.target.value)}/>

      <p>Stuff price</p>
      <input type="search" placeholder="15"  value={price} onChange={(e)=> setPrice(e.target.value)}/>

      <button type="submit">Add Stuff</button>
    </form>
  );
}
