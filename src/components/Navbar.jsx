import React from 'react'


const Navbar = () => {
    return (
        <>
            {/* <div classNameName=' pb-3 mb-5'>
            <header classNameName="absolute inset-x-0 top-0 z-50">
                    <nav classNameName="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                        <div classNameName="flex lg:flex-1">
                            <a href="#" classNameName="-m-1.5 p-1.5">
                                <span>Nooral</span>
                            </a>
                        </div>
                        <div classNameName="flex lg:hidden">
                            <button type="button" classNameName="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                                <span classNameName="sr-only">Open main menu</span>
                                <svg classNameName="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                        </div>
                        <div classNameName="hidden lg:flex lg:gap-x-12">
                            <a href="/" classNameName="text-sm font-semibold leading-6 text-gray-900">Home</a>
                            <a href="/About" classNameName="text-sm font-semibold leading-6 text-gray-900">About Us</a>
                            <a href="/Contact" classNameName="text-sm font-semibold leading-6 text-gray-900">Contact Us</a>
                            <a href="#" classNameName="text-sm font-semibold leading-6 text-gray-900" id="menu-button" aria-expanded="true" aria-haspopup="true">Products</a>
                        </div>
                    </nav>
                    <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                        <div className="py-1" role="none">
                        <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
                        <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
                        <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
                        </div>
                    </div>
                    <div classNameName="lg:hidden" role="dialog" aria-modal="true">
                        <div classNameName="fixed inset-0 z-50"></div>
                        <div classNameName="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div classNameName="flex items-center justify-between">
                                <a href="#" classNameName="-m-1.5 p-1.5">
                                    <span >nooral </span>
                                </a>
                                <button type="button" classNameName="-m-2.5 rounded-md p-2.5 text-gray-700">
                                    <span classNameName="sr-only">Close menu</span>
                                    <svg classNameName="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div classNameName="mt-6 flow-root">
                                <div classNameName="-my-6 divide-y divide-gray-500/10">
                                    <div classNameName="space-y-2 py-6">
                                        <a href="/" classNameName="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Home</a>
                                        <a href="/About" classNameName="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">About Us</a>
                                        <a href="/Contact" classNameName="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Contact Us</a>
                                        <a href="/Contact" classNameName="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Contact Us</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div> */}
            <header id="header" className="header">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

                    <a href="/" className="logo d-flex align-items-center">
                        <span>FlexStart</span>
                    </a>

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><a className="nav-link scrollto active" href="/">Home</a></li>
                            <li className="dropdown"><a href="#"><span>Products</span> <i className="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li><a href="/MEP">MEP</a></li>
                                    <li><a href="/Food">Food</a></li>
                                    <li><a href="/Textile">Textile</a></li>
                                    <li><a href="/Cosmetic">Cosmetic & readymate garments</a></li>
                                </ul>
                            </li>
                            <li><a className="nav-link scrollto" href="/About">About</a></li>
                            <li><a className="nav-link scrollto" href="/Contact">Contact</a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>

                </div>
            </header>
        </>

    )
}

export default Navbar