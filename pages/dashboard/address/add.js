import TopHeader from "../../../components/admin/dashboard/TopHeader";
import { usePostData } from "../../../hooks/DataApi";
import AddressForm from "../../../components/admin/forms/AddressForm";

const Add = () => {
  const defaultValues = {
    addressId: "",
    address: "",
    address_vn: "",
    address2: "",
    address2_vn: "",
  };

  const { mutateAsync } = usePostData();

  return (
    <div className="card w-full max-w-screen-xl">
      <TopHeader title="Add Address" btn="Return" path="/dashboard/address" />
      <AddressForm
        defaultValues={defaultValues}
        action={() => {}}
        btnText="Save"
        path="/address/createAddress"
        returnPath="/dashboard/address"
        mutateAsync={mutateAsync}
      />
    </div>
  );
};

export default Add;
