import React from "react";

const List = (props) => {
    return (
        <>
            <tr className="">
                <td className="whitespace-nowrap px-6 py-4 font-medium">{props.name}</td>
                <td className="whitespace-nowrap px-6 py-4">
                    <div class="inline-flex items-center ml-4">
                        <label
                            class="relative flex cursor-pointer items-center rounded-full p-3"
                            for="checkbox"
                            data-ripple-dark="true"
                        >
                            <input
                                type="checkbox"
                                class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-xl border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green checked:bg-green checked:before:bg-green hover:before:opacity-10"
                                id="checkbox"
                                checked
                            />
                            <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-3.5 w-3.5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    stroke-width="1"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                        </label>
                    </div>
                </td>
                <td class="whitespace-nowrap px-6 py-4">
                    <div class="inline-flex items-center ml-4">
                        <label
                            class="relative flex cursor-pointer items-center rounded-full p-3"
                            for="checkbox"
                            data-ripple-dark="true"
                        >
                            <input
                                type="checkbox"
                                class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-xl border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-yellow checked:bg-yellow checked:before:bg-yellow hover:before:opacity-10"
                                id="checkbox"
                                checked
                            />
                            <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-3.5 w-3.5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    stroke-width="1"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                        </label>
                    </div>
                </td>
                <td class="whitespace-nowrap px-6 py-4">
                    <div class="inline-flex items-center ml-4">
                        <label
                            class="relative flex cursor-pointer items-center rounded-full p-3"
                            for="checkbox"
                            data-ripple-dark="true"
                        >
                            <input
                                type="checkbox"
                                class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-xl border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-red checked:bg-red checked:before:bg-red hover:before:opacity-10"
                                id="checkbox"
                                checked
                            />
                            <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-3.5 w-3.5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    stroke-width="1"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                        </label>
                    </div>
                </td>
            </tr>
        </>
    );
}

export default List;