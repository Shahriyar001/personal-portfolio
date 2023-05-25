import React from 'react';
import img1 from "./img/logo.png";

const Footer = () => {
    return (
        <div className='border-t'>
            <footer className="footer ml-10 p-10  text-neutral-content">
                <div className='ml-20'>
                    <img src={img1} className='w-20' alt="" />
                    <h1 className='text-2xl font-semibold'><span className='text-[#b86acd]'>Shahriyar</span> Mahbub</h1>
                    <p>Web designer and front-end  developer based in Bangladesh</p>
                </div>
                <div className='ml-10'>
                    <span className="footer-title ml-8">Social</span>
                    <div className="grid grid-flow-col gap-4">
                        <a href='https://www.facebook.com/profile.php?id=100016485911788'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu2CXAFbzu8fvsJYAjDBqxmiFngDx_jt_g3g&usqp=CAU" className='w-7' alt="" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSr3_ijsHy7asI734QY6ixc9B-W_i28--VPQ&usqp=CAU" className='w-7' alt="" />
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;