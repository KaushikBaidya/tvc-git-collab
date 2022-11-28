import CategoryForm from "../../../components/admin/forms/CategoryForm";
import TopHeader from "../../../components/admin/dashboard/TopHeader";
import { usePostData } from "../../../hooks/DataApi";

const Add = () => {
  const defaultValues = {
    categoryId: "",
    category: "",
  };

  const { mutateAsync } = usePostData();

  return (
    <div className="card w-full max-w-screen-xl">
      <TopHeader
        title="Add New Category"
        btn="Return"
        path="/dashboard/categories"
      />
      <CategoryForm
        defaultValues={defaultValues}
        action={() => {}}
        btnText="Save"
        path="/categories/createCategory"
        returnPath="/dashboard/categories"
        mutateAsync={mutateAsync}
      />
    </div>
  );
};

export default Add;
