import React from "react";
import { useRouter } from "next/router";
import TopHeader from "../../../../components/admin/dashboard/TopHeader";
import { useGetData, usePutData } from "../../../../hooks/DataApi";
import { Loader } from "../../../../components/common/Loader";
import { Error } from "../../../../components/common/Error";
import CategoryForm from "../../../../components/admin/forms/CategoryForm";

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
  } = useGetData("category", `/categories/${id}`);

  if (isLoading) return <Loader />;

  if (isError) return <Error message={error.message} />;

  const data = list.data[0];

  return (
    <div className="card w-full max-w-screen-xl">
      <TopHeader
        title="Edit Categories"
        btn="Return"
        path="/dashboard/categories"
      />

      {data && (
        <CategoryForm
          defaultValues={{
            categoryId: data.categoryId,
            category: data.category,
          }}
          action={refetch}
          btnText="Update"
          mutateAsync={mutateAsync}
          path={`/categories/${data.categoryId}`}
          returnPath="/dashboard/categories"
        />
      )}
    </div>
  );
}

export default Details;
