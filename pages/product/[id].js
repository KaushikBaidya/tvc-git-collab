import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Loader } from "../../components/common/Loader";
import { Error } from "../../components/common/Error";
import { useGetData } from "../../hooks/DataApi";

// const SinglePage = () => {
//   const router = useRouter();
//   const { id } = router.query;

//   const {
//     data: list,
//     error,
//     isLoading,
//     isError,
//   } = useGetData("blogs", `/blogs/${id}`);

//   if (isLoading) return <Loader />;

//   if (isError) return <Error message={error.message} />;

//   const data = list.data[0];

//   return (
//     <section className="text-gray-600">
//       <div className="container mx-auto flex px-5 py-28 items-center justify-center flex-col">
//         <Image
//           className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
//           alt="hero"
//           src={`https://drive.google.com/uc?export=view&id=${data.img}`}
//           width={700}
//           height={300}
//         />
//         <div className="text-left lg:w-2/3 w-full mt-5 text-lg">
//           <h1 className="text-2xl lg:text-4xl mb-4 font-medium text-gray-900">
//             {data?.title}
//           </h1>
//           <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SinglePage;

const SinglePage = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const router = useRouter();
  const { id } = router.query;

  const {
    data: list,
    error,
    isLoading,
    isError,
  } = useGetData("products", `/products/${id}`);

  if (isLoading) return <Loader />;

  if (isError) return <Error message={error.message} />;

  const data = list.data[0];
  console.log(data);

  return (
    <div className="md:flex items-start justify-center py-28 2xl:px-20 md:px-6 px-4">
      <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
        <Image
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src={`https://drive.google.com/uc?export=view&id=${data.image}`}
          width={300}
          height={300}
        />
      </div>
      <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
        <div className="border-b border-gray-200 pb-6">
          <div className="border-b border-gray-200 mb-6">
            <h1>{data.name}</h1>
          </div>
          <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
