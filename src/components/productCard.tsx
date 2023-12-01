import Link from "next/link";
import CustomImage from "./image";
import ProductType from "@/types/product";

const ProductCard: React.FC<{ product: ProductType }> = ({ product }) => {
  // const [isClick, setClick] = useState(false);
  // const [productId, setProductId] = useState<ProductType[]>([]);
  // const [loading, setLoading] = useState(false);

//   useEffect(() => {}, []);

//  async function getLike(id: string) {
//    setClick(!isClick);
   
   
//     const products: ProductType[] =
//       JSON.parse(localStorage.getItem("like") as string) || [];
//       console.log([products]);
//     const isExestProducts = products.find((el) => el._id === product?._id);
    
//     if (isExestProducts && isClick) {
//       const updatedData = products.map((el) => {
//         if (el._id === product?._id) {
//           return {
//             ...el,
//             like: +1
//           };
//         }

//         return el;
//       });
//       localStorage.setItem("like", JSON.stringify(updatedData));
//     } else {
//       const data = [...products, { ...product, like: 1 }];
//       localStorage.setItem("like", JSON.stringify(data));
//     }
//     toast("❤️", {
//       position: "top-center",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "light",
//     });
   
  
//  }



  return (
    <div className="h-96 flex flex-col p-6 rounded-lg group relative  transition-transform ease-out duration-200 border ">
      <Link
        href={`/product/${product?._id}`}
        className="relative max-h-72 flex-1 "
      >
        <CustomImage product={product} fill />
      </Link>
      <h3 className="tracking-widest mt-5 text-indigo-500 text-xs font-medium title-font">
        {product?.title}
      </h3>
      <div className="font-semibold flex items-center justify-between mt-4 mb-1">
        <p>
          {product?.price.toLocaleString("uz-UZ", {
            style: "currency",
            currency: "UZS",
          })}
        </p>
      </div>

      <div className="font-semibold flex items-center justify-between mt-4 mb-1">
        <p className="w-44 truncate">{product?.description}</p>
        <p>{product?.quantity} dona</p>
      </div>
      {/* <div className="App  translate-x-[20px] translate-y-[-20px]  absolute top-0 right-0">
        <Heart isClick={isClick} onClick={() => getLike(product?._id)} />
      </div> */}
    </div>
  );
};

export default ProductCard;
