import React from "react";
import EditButton from "../../../components/common/button/EditButton";
import {
  ListCol,
  ListHeader,
} from "../../../components/admin/dashboard/ListColWithHeader";
import TopHeader from "../../../components/admin/dashboard/TopHeader";
import { useGetData } from "../../../hooks/DataApi";
import DeleteButton from "../../../components/common/button/DeleteButton";
import { Loader } from "../../../components/common/Loader";
import { Error } from "../../../components/common/Error";

const ProductsList = () => {
  const {
    data: list,
    error,
    isLoading,
    isError,
    refetch,
  } = useGetData("products", `/getAllProducts`);

  if (isLoading) return <Loader />;

  if (isError) return <Error message={error.message} />;

  const data = list.data;
  return (
    <main>
      <div className="card w-full">
        <TopHeader
          title="Products List"
          btn="Save"
          path="/dashboard/products/add"
        />

        <div className="list-wrapper">
          <div className="md:grid grid-cols-3 list-header">
            <ListHeader label="Name" />
            {/* <ListHeader label="Image" /> */}
            <ListHeader label="Category" />
            <ListHeader label="" />
          </div>
          {data.length > 0 &&
            data.map((item) => (
              <div
                key={item.productId}
                className="grid grid-cols-1 md:grid-cols-3 list-body"
              >
                <ListCol label="Name :" value={item.name} />
                {/* <ListCol label="Image :" value={item.image} /> */}
                <ListCol label="Category :" value={item.category} />
                <div>
                  <div className="flex justify-end space-x-2">
                    <EditButton
                      path={`/dashboard/products/edit/${item.productId}`}
                    />
                    <DeleteButton
                      path={`/products/${item.productId}`}
                      action={refetch}
                    />
                  </div>
                </div>
              </div>
            ))}

          <div className="list-footer">
            <div className="col-span-10"></div>
            <div className="flex justify-center">
              <span className="font-semibold">TOTAL : {data.length}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductsList;
