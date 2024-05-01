import { useEffect, useState } from "react";
var i;
const Products = () => {
   const [search, setSearch] = useState("");
   const [Image, setImage] = useState([]);
   const [profileimage,setProfileimage] = useState("");
   const [AllProducts, setAllProducts] = useState([]);

   const ProductHandler = async() => {
       let Products = await fetch('http://localhost:10101/products');
       Products = await Products.json();
       setAllProducts(Products);
       console.log(AllProducts)

       let img = await fetch('http://localhost:10101/image');
       img = await img.json();
       setImage(img);
       console.log(Image);
    }

   useEffect( () => {
      ProductHandler();
   },[]);

    return (
       <>
         <div>
              <input type="text" value={search} className="search" placeholder="Search Product" onChange={(e)=>setSearch(e.target.value)}/>
         </div>
          {
          AllProducts.filter((data) => (((data.Name.toUpperCase()).indexOf((search.toUpperCase()))>-1)||((data.Company.toUpperCase()).indexOf((search.toUpperCase()))>-1)||((data.Category.toUpperCase()).indexOf((search.toUpperCase()))>-1)||((data.Price.toString()).indexOf((search.toString()))>-1))).map((data, index) =>
            <div className="card">
                <div className="imagebox">
                  {
                     Image.filter((dt) => dt.Name.toUpperCase()==data.Name.toUpperCase()).map((dt)=>  <img src={dt.ImageName} alt=""/>)
                  }
                  
               </div>
               <div className="productdetails">
                   <div className="product"><span>Product Name : </span>{data.Name}</div>
                   <div className="product"><span>Product Price : </span>{data.Price}</div>
                   <div className="product"><span>Product Category : </span>{data.Category}</div>
                   <div className="product"><span>Product Company : </span>{data.Company}</div>
                   <div className="product">
                      <button className="buy-now">Buy Now</button> 
                      <button className="buy-now">Details</button>   
                  </div>
               </div>
            </div>
         ) 
      }
    </> 
    );
  }
  
  export default Products;