import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function BaseForm({
  latitude,
  longitude,
  setNewMarker,
  oldMarker,
  open,
  setOpen,
}) {
  const [issue, setIssue] = useState({
    title: "",
    description: "",
    photo: null,
    latitude: latitude,
    longitude: longitude,
  });

  const cancelButtonRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewMarker([
      ...oldMarker,
      {
        id: oldMarker.length + 1,
        position: [issue.latitude, issue.longitude],
        title: issue.title,
        description: issue.description,
        image: issue.photo,
      },
    ]);
    setOpen(false);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        Crear un evento
                      </Dialog.Title>
                      <div className="mt-2">
                        <form onSubmit={handleSubmit}>
                          <div className="space-y-12">
                            <div className="border-b border-gray-900/10 pb-12">
                              <p className="mt-1 text-sm leading-6 text-gray-600">
                                Detalle la informacion del problema
                              </p>

                              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="col-span-full">
                                  <label
                                    htmlFor="issue-title"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Titulo
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      type="text"
                                      name="issue-title"
                                      id="issue-title"
                                      value={issue.title}
                                      onChange={(e) =>
                                        setIssue({
                                          ...issue,
                                          title: e.target.value,
                                        })
                                      }
                                      autoComplete="issue-title"
                                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>

                                <div className="col-span-full">
                                  <label
                                    htmlFor="issue-descripcion"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Descripcion
                                  </label>
                                  <div className="mt-2">
                                    <textarea
                                      id="issue-descripcion"
                                      name="aboissue-descripcionut"
                                      rows={3}
                                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                      defaultValue={""}
                                      value={issue.description}
                                      onChange={(e) =>
                                        setIssue({
                                          ...issue,
                                          description: e.target.value,
                                        })
                                      }
                                    />
                                  </div>
                                </div>

                                <div className="col-span-full">
                                  <label
                                    htmlFor="issue-photo"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Foto
                                  </label>
                                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                    <div className="text-center">
                                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                        {issue.photo !== null ? (
                                          <img
                                            src={URL.createObjectURL(
                                              issue.photo
                                            )}
                                            alt="Preview"
                                          ></img>
                                        ) : (
                                          <>
                                            <label
                                              htmlFor="file-upload"
                                              className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                            >
                                              <span>Selecciona</span>
                                            </label>
                                            <input
                                              id="file-upload"
                                              name="file-upload"
                                              type="file"
                                              className="sr-only"
                                              onChange={(e) =>
                                                setIssue({
                                                  ...issue,
                                                  photo: e.target.files[0],
                                                })
                                              }
                                            />
                                            <p className="pl-1">
                                              o arrastra una foto
                                            </p>
                                          </>
                                        )}
                                      </div>
                                      <p className="text-xs leading-5 text-gray-600">
                                        PNG, JPG, GIF up to 10MB
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="mt-6 flex items-center justify-end gap-x-6">
                            <button
                              type="button"
                              className="text-sm font-semibold leading-6 text-gray-900"
                              onClick={() => setOpen(false)}
                            >
                              Cancelar
                            </button>
                            <button
                              type="submit"
                              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                              Guardar
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
