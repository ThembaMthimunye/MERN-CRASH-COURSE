import { useState, React } from "react";
import { useProductStore } from "../../Store/product";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const {createProduct}=useProductStore()
  const handleProduct = async() => {
    const {success,message}=await createProduct(newProduct)
    console.log("Success",success)
    console.log("Message",message)
    console.log(newProduct);
  };
  return (
    <div className="flex flex-col justify-center items-center space-y-4 mt-14">
      <input className="border-blue-500 border rounded-md w-[40rem] h-10"
        placeholder="Product Name"
        name="Name"
        value={newProduct.name}
        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
      />
      <input className="border-blue-500 border rounded-md w-[40rem] h-10"  
        placeholder="Product Price"
        name="Price"
        value={newProduct.price}
        onChange={(e) =>
          setNewProduct({ ...newProduct, price: e.target.value })
        }
      />
      <input className="border-blue-500 border rounded-md w-[40rem] h-10"
        placeholder="Image URL"
        name="image"
        value={newProduct.image}
        onChange={(e) =>
          setNewProduct({ ...newProduct, image: e.target.value })
        }
      />
      <button className="border-blue-500 border px-4 py-1 rounded-md w-[40rem] h-10" onClick={handleProduct}>Submit Product</button>
    </div>
  );
};

export default CreatePage;
