import React from 'react';
import img1 from "./imgs/about.png.png";

const AboutMe = () => {
    return (
        <div className=' text-white m-8' >
            <div className='text-white flex items-center   mb-8'>
                <h3 className='text-2xl mx-2'>#About-me </h3>
                <progress className="progress progress-accent w-56" value="100" max="100"></progress>
            </div>

            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img1} alt='png' className="max-w-sm rounded-lg shadow-2xl w-1/3" />
                    <div className='w-2/3 pr-20'>
                        <p className="py-3 text-2xl">Hello, i’m Shahriyar Mahbub! </p>

                        <p className="py-3">I’m a self-taught front-end developer based in Dhaka, Bangladesh. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. </p>

                        <p className="py-3">Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;