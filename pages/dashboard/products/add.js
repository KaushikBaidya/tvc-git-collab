import TopHeader from "../../../components/admin/dashboard/TopHeader";
import { usePostData } from "../../../hooks/DataApi";
import ProductForm from "../../../components/admin/forms/ProductForm";

const Add = () => {
  const defaultValues = {
    productId: "",
    name: "",
    description: "",
    filepath: "",
    category: "",
  };

  const { mutateAsync } = usePostData();

  return (
    <div className="card w-full max-w-screen-xl">
      <TopHeader
        title="Add New Product"
        btn="Return"
        path="/dashboard/products"
      />
      <ProductForm
        defaultValues={defaultValues}
        action={() => {}}
        btnText="Save"
        path="/products/createProduct"
        returnPath="/dashboard/products"
        mutateAsync={mutateAsync}
      />
    </div>
  );
};

export default Add;
