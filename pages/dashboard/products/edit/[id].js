import React from "react";
import { useRouter } from "next/router";
import TopHeader from "../../../../components/admin/dashboard/TopHeader";
import { useGetData, usePutData } from "../../../../hooks/DataApi";
import { Loader } from "../../../../components/common/Loader";
import { Error } from "../../../../components/common/Error";
import BlogsForm from "../../../../components/admin/forms/BlogsForm";

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
  } = useGetData("blogs", `/blogs/${id}`);

  if (isLoading) return <Loader />;

  if (isError) return <Error message={error.message} />;

  const data = list.data[0];

  return (
    <div className="card w-full max-w-screen-xl">
      <TopHeader title="Edit Blogs" btn="Return" path="/dashboard/blog" />

      {data && (
        <BlogsForm
          defaultValues={{
            blogId: data.blogId,
            title: data.title,
            description: data.description,
            img: data.img,
          }}
          action={refetch}
          btnText="Update"
          mutateAsync={mutateAsync}
          path={`/blogs/${data.blogId}`}
          returnPath="/dashboard/blog"
        />
      )}
    </div>
  );
}

export default Details;
