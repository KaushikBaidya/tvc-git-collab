import React, { Fragment, useState } from "react";
import { AiOutlineRest } from "react-icons/ai";
import { useDeleteData } from "../../../hooks/DataApi";
import { Dialog, Transition } from "@headlessui/react";
import { toast } from "react-hot-toast";

const DeleteButton = ({ path, action }) => {
  let [isOpen, setIsOpen] = useState(false);

  const { mutateAsync } = useDeleteData();
  const onSubmit = async () => {
    try {
      await mutateAsync({ path }).then((response) => {
        if (response) {
          toast.success("Successfully deleted!");
        }
      });
    } catch (error) {
      if (error.response) {
        toast.error("Response : " + error.response.data);
      } else if (error.request) {
        toast.error("Request : " + error.message);
      } else {
        toast.error("Error :", error.message);
      }
    } finally {
      closeModal();
      action();
    }
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        className="btn-danger w-12 h-10"
        onClick={() => {
          openModal();
        }}
      >
        <AiOutlineRest size={24} />
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-100 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-900 bg-opacity-70" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-lg p-12 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <div className="flex flex-col items-center justify-center">
                  <h3 className="mb-5 text-xl text-gray-800  font-medium">
                    Are you sure you want to delete? This item will be deleted
                    immediately. You cant undo this action.
                  </h3>
                  <div className="flex space-x-2">
                    <button
                      className="w-24 btn-danger bg-green-300"
                      onClick={onSubmit}
                    >
                      Yes
                    </button>
                    <button className="w-24 btn-success" onClick={closeModal}>
                      No
                    </button>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default DeleteButton;
