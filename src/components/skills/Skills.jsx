import React from 'react';
import img1 from "./img/skills.png.png";

const Skills = () => {
    return (
        <div className='m-8'>
            <div className='text-white flex items-center  mb-8'>
                <h3 className='text-2xl mx-2'>#Skills </h3>
                <progress className="progress progress-accent w-56" value="100" max="100"></progress>
            </div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img1} alt='/' className="max-w-sm rounded-lg shadow-2xl mr-6" />
                    <div className='lg:w-2/3 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4  flex-row-reverse'>
                        <div className=" w-64 border border-inherit text-neutral-content">
                            <div className="card-body ">
                                <div className='border-b-4 border-inherit'>
                                    <h2 className="card-title">Expertise</h2>
                                </div>
                                <p>HTML, CSS, Bootstrap, Tailwind Css, Daisy UI, JavaScript, React, Firebase Auth.</p>

                            </div>
                        </div>
                        <div className=" w-64 h-40 border border-inherit text-neutral-content">
                            <div className="card-body ">
                                <div className='border-b-4 border-inherit'>
                                    <h2 className="card-title">Comfortable</h2>
                                </div>
                                <p>Redux, Node Js, Express Js, MongoDB.</p>

                            </div>
                        </div>
                        <div className=" w-64 h-32 border border-inherit text-neutral-content">
                            <div className="card-body ">
                                <div className='border-b-4 border-inherit'>
                                    <h2 className="card-title">Languages</h2>
                                </div>
                                <p>English, Bangla, Hindi</p>

                            </div>
                        </div>
                        <div className=" w-64 border border-inherit text-neutral-content">
                            <div className="card-body ">
                                <div className='border-b-4 border-inherit'>
                                    <h2 className="card-title">Familiar</h2>
                                </div>
                                <p>Stripe, React Query, TypeScript, Redux, Material UI.</p>

                            </div>
                        </div>
                        <div className=" w-64 mt-[-60px] h-40 border border-inherit text-neutral-content">
                            <div className="card-body ">
                                <div className='border-b-4 border-inherit'>
                                    <h2 className="card-title">Tools</h2>
                                </div>
                                <p>VS Code, Github, Firebase, Vercel, Netlify.</p>

                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;