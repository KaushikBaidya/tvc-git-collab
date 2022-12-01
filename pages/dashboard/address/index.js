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

export default function AddressList() {
  const {
    data: list,
    error,
    isLoading,
    isError,
    refetch,
  } = useGetData("addewss", `/getAddress`);

  if (isLoading) return <Loader />;

  if (isError) return <Error message={error.message} />;

  const data = list.data;

  return (
    <div className="card w-full">
      <TopHeader
        title="Address List"
        btn="Save"
        path="/dashboard/address/add"
      />

      <div className="list-wrapper">
        <div className="md:grid grid-cols-5 list-header">
          <ListHeader label="Address" />
          <ListHeader label="Address Vn" />
          <ListHeader label="Address2" />
          <ListHeader label="Address2 Vn" />
          <ListHeader label="" />
        </div>
        {data.length > 0 &&
          data.map((item) => (
            <div
              key={item.addressId}
              className="grid grid-cols-1 md:grid-cols-5 list-body"
            >
              <ListCol label="Address :" value={item.address} />
              <ListCol label="Address Vn :" value={item.address_vn} />
              <ListCol label="Address2 :" value={item.address2} />
              <ListCol label="Addres2 Vn :" value={item.address2_vn} />
              <div>
                <div className="flex justify-end space-x-2">
                  <EditButton
                    path={`/dashboard/address/edit/${item.addressId}`}
                  />
                  <DeleteButton
                    path={`/address/${item.addressId}`}
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
  );
}
