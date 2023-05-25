import React from 'react';
import img1 from "./images/Screenshot (9).png";
import img2 from "./images/Screenshot (11).png";
import img3 from "./images/Screenshot (13).png";

const Work = () => {
    return (
        <div>
            <div className='m-10 pb-10'>
                <div className='text-white flex items-center  mb-8'>
                    <h3 className='text-2xl mx-2'>#Projects</h3>
                    <progress className="progress progress-accent w-56" value="100" max="100"></progress>
                </div>
                <div>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6'>
                        {/* <div className="card w-96  shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={img1} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center text-white">
                                <h2 className="card-title">Joystick Junction</h2>
                                <p>MERN Project</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div> */}
                        <div className="border border-inherit w-96 shadow-xl">
                            <figure><img src={img1} alt="Shoes" /></figure>
                            <div className="card-body text-white">
                                <h2 className="card-title">Joystick Junction</h2>
                                <p className='text-sm'>MERN Project</p>
                                <div className="card-actions justify-end">
                                    <a href="https://gaming-gears-resale.web.app/"><button className="btn btn-active btn-link text-white">Live Site</button></a>
                                </div>
                            </div>
                        </div>
                        {/* <div className="card w-96  shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={img3} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center text-white">
                                <h2 className="card-title">Northen Lights university</h2>
                                <p>NEXT.js (Team project)</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div> */}
                        <div className="border border-inherit w-96 shadow-xl">
                            <figure><img src={img3} alt="Shoes" /></figure>
                            <div className="card-body text-white">
                                <h2 className="card-title">Northen Lights university</h2>
                                <p className='text-sm'>NEXT.js (Team project)</p>
                                <div className="card-actions justify-end">
                                    <a href="https://university-qeducato.vercel.app/"><button className="btn btn-active btn-link text-white">Live Site</button></a>
                                </div>
                            </div>
                        </div>
                        {/* <div className="card w-96  shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={img2} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body  text-white">
                                <h2 className="card-title">Computer Mania</h2>
                                <p>MERN Project</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div> */}
                        <div className="border border-inherit w-96 shadow-xl">
                            <figure><img src={img2} alt="Shoes" /></figure>
                            <div className="card-body text-white">
                                <h2 className="card-title">Computer Mania</h2>
                                <p className='text-sm'>MERN Project</p>
                                <div className="card-actions justify-end">
                                    {/* <Link className="btn btn-primary" to="https://computer-mania-33da6.web.app/">Live Site</Link> */}

                                    <a href="https://computer-mania-33da6.web.app/"><button className="btn btn-active btn-link text-white">Live Site</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;