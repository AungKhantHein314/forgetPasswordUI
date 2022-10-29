import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function Modal() {
  const [open, setOpen] = useState(true)

  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
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
          <div className="flex min-h-full justify-center p-4 text-center items-center p-0 ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 scale-100"
              leaveTo="opacity-0 translate-y-4 translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-14 pb-14 w-[345px]">
                  <div className="sm:flex sm:items-start">
                    <div className=" text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                      You have successfully reset your password
                      </Dialog.Title>
                    </div>
                  </div>
                </div>
                <div className="w-full bg-gray-50 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="text-xl font-sans font-semibold w-full inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-white shadow-sm hover:bg-red-700 focus:outline-none"
                    onClick={() => setOpen(false)}
                  >
                    Done
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}