import { useEffect, useState } from "react";

const Update = () => {
  const [Name, setName] = useState();
  const [Price, setPrice] = useState();
  const [Category, setCategory] = useState();
  const [Company, setCompany] = useState();
  const [id, setId] = useState();
  const [error, setError] = useState(false);
  const [AllProducts, setAllProducts] = useState([]);

    const ProductHandler = async() => {
       let Products = await fetch('http://localhost:10101/products');
       Products = await Products.json();
       setAllProducts(Products);
       console.log(AllProducts)
    }
    useEffect( () => {
        ProductHandler();
    },[])


    async function DeleteHandler(index){
      if(AllProducts.length>0) {
        await fetch(`http://localhost:10101/products/${index}`,
        {
           method: 'delete'
        }
     );
     alert("Deleted!!");
     ProductHandler();
      }
  } 


    const Updated = (id, name, price, category,company) => {
        setId(id)
        setName(name);
        setPrice(price);
        setCategory(category);
        setCompany(company);
    }

       async function UpdateHandler(index){
           setId(index);
 
        if(!Name|| !Price|| !Category|| !Company) {
            setError(true);
            return false;
        }

         await fetch(`http://localhost:10101/products/${index}`,
           {
              method: 'put',
              body: JSON.stringify({Name, Price, Category,Company}),
              headers: {
                 'Content-Type': 'application/json'
              }
          }

        );
        setId(false);
        ProductHandler();
      } 
    return (
      <>
      {

       id?<div className="App">
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
                  <button onClick={() => UpdateHandler(id)}>Update Product</button>  
             </p>         
        </div>
    </div>:<div className="procuctlist updateproduct">
          <h1>Product List</h1>
          {
           AllProducts.length> 0?
            <table>
            <thead>   
             <tr>
               <th>S.No.</th>
               <th>Name</th>
               <th>Price</th>
               <th>Category</th>
               <th>Company</th>
               <th>Update</th>
               <th>Delete</th>
             </tr>
             </thead>
             <tbody>
             {
               AllProducts.map((data, index) =>
                   <tr>
                     <td>{index+1}</td>
                     <td>{data.Name}</td>
                     <td>{data.Price}</td>
                     <td>{data.Category}</td>
                     <td>{data.Company}</td>
                     <td key={data._id}>
                         <button className="btn-primary" onClick={ () => Updated(data._id,data.Name, data.Price, data.Category, data.Company)}>Update</button>
                     </td>
                     <td>
                         <button className="btn-primary" onClick={ () => DeleteHandler(data._id)}>Delete</button>
                     </td>
                   </tr> 
               )  
             }
             </tbody>  
           </table>:
           <>
                <br/><br/><br/>
                <h3>No Product</h3>
           </>
          }
       </div>

  }
    </>);
  }
  
  export default Update;