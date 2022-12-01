import React from "react";
import { useRouter } from "next/router";
import TopHeader from "../../../../components/admin/dashboard/TopHeader";
import { useGetData, usePutData } from "../../../../hooks/DataApi";
import { Loader } from "../../../../components/common/Loader";
import { Error } from "../../../../components/common/Error";
import AddressForm from "../../../../components/admin/forms/AddressForm";

function Details() {
  const router = useRouter();
  const { id } = router.query;
  const { mutateAsync } = usePutData();

  const {
    data: list,
    error,
    isLoading,
    isError,
    refetch,
  } = useGetData("address", `/address/${id}`);

  if (isLoading) return <Loader />;

  if (isError) return <Error message={error.message} />;

  const data = list.data[0];

  return (
    <div className="card w-full max-w-screen-xl">
      <TopHeader title="Edit address" btn="Return" path="/dashboard/address" />

      {data && (
        <AddressForm
          defaultValues={{
            addressId: data.addressId,
            address: data.address,
            address_vn: data.address_vn,
            address2: data.address2,
            address2_vn: data.address2_vn,
          }}
          action={refetch}
          btnText="Update"
          mutateAsync={mutateAsync}
          path={`/address/${data.addressId}`}
          returnPath="/dashboard/address"
        />
      )}
    </div>
  );
}

export default Details;
