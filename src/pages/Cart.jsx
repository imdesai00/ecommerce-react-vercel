// import {useState} from 'react'

const Cart = () => {

    return (
        <>
            <div className="py-8">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl font-semibold mb-4">Inquiry Cart</h1>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="md:w-3/4">
                            <div className="rounded-lg p-6 mb-4">
                                <table className="w-full">
                                    <thead>
                                        <tr>
                                            <th className="text-left font-semibold">Product</th>
                                            <th className="text-left font-semibold">Quantity</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="py-4">
                                                <div className="flex items-center">
                                                    <img className="h-16 w-16 mr-4" src="https://via.placeholder.com/150" alt="Product image" />
                                                    <span className="font-semibold">Product name</span>
                                                </div>
                                            </td>
                                            <td className="py-4">
                                                <div className="flex items-center">
                                                    <button className="border rounded-md py-2 px-4 mr-2">-</button>
                                                    <span className="text-center w-8">1</span>
                                                    <button className="border rounded-md py-2 px-4 ml-2">+</button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className="overflow-y-hidden">
                    <div className="flex justify-center items-center 2xl:container 2xl:mx-auto lg:py-16 md:py-12 py-9 px-4 md:px-6 lg:px-20 xl:px-44 ">
                        <div className="flex w-full sm:w-9/12 lg:w-full flex-col lg:flex-row justify-center items-center lg:space-x-10 2xl:space-x-36 space-y-12 lg:space-y-0">
                            <div className="flex w-full  flex-col justify-start items-start">
                                <div className>
                                    <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Check out</p>
                                </div>
                                <div className="mt-12">
                                    <p className="text-xl font-semibold leading-5 text-gray-800">Inquiry Details</p>
                                </div>
                                <div className="mt-8 flex flex-col justify-start items-start w-full space-y-8 ">
                                    <input className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="First Name" />
                                    <input className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="Last Name" />
                                    <input className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="Address" />
                                    <input className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="Address (line 02)" />
                                    <div className="flex justify-between flex-col sm:flex-row w-full items-start space-y-8 sm:space-y-0 sm:space-x-8">
                                        <div className="relative w-full">
                                            <input className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 pt-4 pb-3   w-full" type="text" placeholder="City" />
                                        </div>
                                        <div className="relative w-full">
                                            <input className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 pt-4 pb-3   w-full" type="text" placeholder="Region" />
                                        </div>
                                    </div>
                                    <div className="flex justify-between flex-col sm:flex-row w-full items-start space-y-8 sm:space-y-0 sm:space-x-8">
                                        <div className="relative w-full">
                                            <input className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 pt-4 pb-3   w-full" type="text" placeholder="Country" />
                                        </div>
                                        <div className="w-full">
                                            <input className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 pt-4 pb-3   w-full" type="text" placeholder="Zip Code" />
                                        </div>
                                    </div>
                                    <input className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4   w-full" type="text" placeholder="Phone Number" />
                                </div>
                                <button className="focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 mt-8 text-base font-medium focus:ring-2 focus:ring-ocus:ring-gray-800 leading-4 hover:bg-black py-4 w-full md:w-4/12 lg:w-full text-white bg-gray-800">Inquiry</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cart