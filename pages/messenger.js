import React from 'react';
import Widgets from '../components/Widgets';

const messenger = () => {
    return (
        <>
            <div className="">
                <main className="flex">
                    <div className="min-h-screen flex flex-row bg-gray-100">
                        <div className="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden">
                            <div className="flex items-center justify-center h-20 shadow-md">
                                <h1 className="text-3xl uppercase text-indigo-500">MeetUp Chat</h1>
                            </div>
                            <div className="flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl">
                                <img className="rounded-full w-14 h-14"
                                    objectFit="cover"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBE96JjKEHELj1l_Y40GlzEYA1e9YG16FTw&usqp=CAU"

                                    layout="fixed" />
                                <p>Jeff Bezoz</p>
                                <div className="absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full" />
                            </div>
                            <div className="flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl">
                                <img className="rounded-full w-14 h-14"
                                    objectFit="cover"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBE96JjKEHELj1l_Y40GlzEYA1e9YG16FTw&usqp=CAU"

                                    layout="fixed" />
                                <p>Jeff Bezoz</p>
                                <div className="absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full" />
                            </div>
                            <div className="flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl">
                                <img className="rounded-full w-14 h-14"
                                    objectFit="cover"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBE96JjKEHELj1l_Y40GlzEYA1e9YG16FTw&usqp=CAU"

                                    layout="fixed" />
                                <p>Jeff Bezoz</p>
                                <div className="absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full" />
                            </div>
                            <div className="flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl">
                                <img className="rounded-full w-14 h-14"
                                    objectFit="cover"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBE96JjKEHELj1l_Y40GlzEYA1e9YG16FTw&usqp=CAU"

                                    layout="fixed" />
                                <p>Jeff Bezoz</p>
                                <div className="absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full" />
                            </div>
                            <div className="flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl">
                                <img className="rounded-full w-14 h-14"
                                    objectFit="cover"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBE96JjKEHELj1l_Y40GlzEYA1e9YG16FTw&usqp=CAU"

                                    layout="fixed" />
                                <p>Jeff Bezoz</p>
                                <div className="absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full" />
                            </div>
                            <div className="flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl">
                                <img className="rounded-full w-14 h-14"
                                    objectFit="cover"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBE96JjKEHELj1l_Y40GlzEYA1e9YG16FTw&usqp=CAU"

                                    layout="fixed" />
                                <p>Jeff Bezoz</p>
                                <div className="absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full" />
                            </div>
                            {/* <ul className="flex flex-col py-4">
                                <li>
                                    <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home"></i></span>
                                        <span className="text-sm font-medium">Dashboard</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-music"></i></span>
                                        <span className="text-sm font-medium">Music</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-drink"></i></span>
                                        <span className="text-sm font-medium">Drink</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-shopping-bag"></i></span>
                                        <span className="text-sm font-medium">Shopping</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-chat"></i></span>
                                        <span className="text-sm font-medium">Chat</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-user"></i></span>
                                        <span className="text-sm font-medium">Profile</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-bell"></i></span>
                                        <span className="text-sm font-medium">Notifications</span>
                                        <span className="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">5</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-log-out"></i></span>
                                        <span className="text-sm font-medium">Logout</span>
                                    </a>
                                </li>
                            </ul> */}
                        </div>
                    </div>

                    <div className="w-full border black-sm border-slate-300">
                        <div className='bg-slate-400'>

                        </div>
                        <div className='border black-sm border-slate-300 absolute bottom-0 w-3/5'>
                            <input className='w-full h-16' type="text" placeholder="Your Message" />
                        </div>
                    </div>

                    <Widgets />
                </main>
            </div>
            {/* <div className="flex">
            <div className='justify-start'>
                
            </div>
            <div className="flex w-3/4">
                <div className=" w-3/4">
                    <h2>hi bfh</h2>
                </div>
                <div className="w-1/4">
                    <Contact />
                </div>
            </div>
        </div> */}
        </>
    );
};

export default messenger;