import { useEffect, useState } from "react";
import "./App.css";
import { useAppStore } from "./store.jsx";


function App() {
  const [products, setProducts] = useState([]);

  const [skip, setSkip] = useState(0);

  const { searchKey} = useAppStore();
  
function deleteItem(id){
  etch( `https://dummyjson.com/products/${id} `, {
  method: 'DELETE',
})
.then(res => res.json())
.then(alert(id));
  
}
function selectItem(id){
  let item=products[id-1]
  setName(products.name)
  setItemId(products.id)
}
function updeteItem(){
  fetch(`https://dummyjson.com/products/${id} `, {
  method: 'PUT', /* or PATCH */
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'iPhone Galaxy +1'
  })
})
.then(res => res.json())
.then(alert(id));
}
  const getProducts = async () => {
    
    try {
      let resp = await fetch(
        `https://dummyjson.com/products/search?q=${searchKey}&limit=12&skip=${skip}`
      );
      let data = await resp.json();
      if (searchKey === "") {
        setProducts([...products, ...data.products]);
      } else {
        setProducts(data.products);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    
    }
  };

  useEffect(() => {
    getProducts();
    deleteItem(id);
    updeteItem();
  }, [searchKey, skip]);
  return (
    <div>
      <table border="1">
          <tr>
            <td>ID</td>
            <td>Name</td>
          </tr>
          { 
          products.map((el,i) => (
            <tr key={i}>
              <td>{item.el.id}</td>
              <td>{item.el.name}</td>
              <td><button onClick={()=>deleteItem(item.id)}>Delet</button></td>
              <td><button onClick={()=>selectItem(item.id)}>Update</button></td>
            </tr>
          )
          )}
          
          </table>
          <div>
            <input type="text" value={el.name} onChange={setName(e.target.value)} />
            <button onClick={updeteItem}>Update user</button>
          </div>
   
    </div>
   )
  
}

export default App
