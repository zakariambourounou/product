import {React,useState} from 'react'
import Input from './components/input.jsx'
import { Checkbox } from './components/forms/checkbox.jsx'
import ProductCategoriesRows from './components/forms/products/ProductCategoriesRows.jsx'
import ProductRow from './components/forms/products/ProductRow.jsx'



const PRODUCTS = [  
  {category: "t-shirt", price: "200 DHS", stocked: true, name: "vans"},  
  {category: "t-shirt", price: "300 DHS", stocked: true, name: "addidas"},  
  {category: "t-shirt", price: "125 DHS", stocked: false, name: "nike"},  
  {category: "chemise", price: "3000 DHS", stocked: true, name: "lacoste"},  
  {category: "chemise", price: "2500 DHS", stocked: false, name: "polo"},  
  {category: "chemise", price: "12000 DHS", stocked: true, name: "hermes"}  
]


function App (){

  const [stockDispo , setStockDispo]= useState(false)
  const [search , setSearch]= useState('')
  const produit_visible = PRODUCTS.filter((products)=>{
    if (stockDispo && !products.stocked){
      return false
    }
    if(search && !products.name.includes(search)){
      return false 
    }
    return true
})

return (
  <div>
    <Barre_de_recherche
      search={search}
      produit_rechercher={setSearch}
      enStock={stockDispo}
      chargementDeStock={setStockDispo}
    />
    <Product_table products={produit_visible} />
  </div>
);
}

function Barre_de_recherche ({enStock,chargementDeStock,search,produit_rechercher}){
  return <div>
    <div className='container mx-auto '>
    <Input value={search} onChange={produit_rechercher} placeholder= 'Rechercher...'/>
    <Checkbox id='stocked' checked={enStock} onChange={chargementDeStock} label='affiche les produits en stock'/>
    </div>
  </div>
}

function Product_table({ products }) {
  const rows = [];
  let lastCategory = null;

  for (let product of products) {
    if (product.category !== lastCategory) {
      rows.push(<ProductCategoriesRows key={product.category} name={product.category} />);
      lastCategory = product.category;
    }
    rows.push(<ProductRow product={product} key={product.name} />);
  }

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Nom
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Prix
          </th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}



export default App