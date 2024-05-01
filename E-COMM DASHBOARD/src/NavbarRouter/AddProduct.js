import {useState } from 'react';
import './App.css';

function AddProduct() {
  const [Name, setName] = useState("");
  const [Price, setPrice] = useState("");
  const [Category, setCategory] = useState("");
  const [Company, setCompany] = useState("");
  const [error, setError] = useState(false);
  
  const AddProductHandler = async() => {
        if(!Name|| !Price|| !Category|| !Company) {
            setError(true);
            return false;
        }
        let UserId = JSON.parse(localStorage.getItem('Users'))._id;
        console.log(UserId.type)
        let data = await fetch('http://localhost:10101/products',{
        method: 'post',
        body: JSON.stringify({Name, Price, Category, Company, UserId}),
        headers: {
           'Content-Type': 'application/json'
        }
     });
     await data.json();
     setName("");
     setPrice("");
     setCategory("");
     setCompany("");
  }
  
  return (
    <div className="App">
        <div className='formdata addproduct'>
         
               <input type='text' value={Name}
                  onChange={(e) => setName(e.target.value)} placeholder='Enter Product Name'/>
                  {!Name&& error&& <p className='invalidmassage'>Invalid Product Name</p>}
                <input type='number' value={Price}
                  onChange={(e) => setPrice(e.target.value)} placeholder='Enter Product Price'/>
                  {!Price&& error&& <p className='invalidmassage'>Invalid Price</p>}   
                 <input type='text' value={Category}
                    onChange={(e) => setCategory(e.target.value)} placeholder='Enter Product Category'/>
                    {!Category&& error&& <p className='invalidmassage'>Invalid Category</p>}
                 <input type='text' value={Company}
                    onChange={(e) => setCompany(e.target.value)} placeholder='Enter Product Company'/> 
                    {!Company&& error&& <p className='invalidmassage'>Invalid Company Name</p>}       
             <p>
                  <button onClick={AddProductHandler}>Add Product</button>  
             </p>         
        </div>
    </div>
  );
}
  
  export default AddProduct;