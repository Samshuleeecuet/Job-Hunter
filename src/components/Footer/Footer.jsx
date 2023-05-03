import React from 'react';

const Footer = () => {
    return (
        <>
                <footer className="footer text-white p-10 bg-[#1A1919] mt-20">
                    <div >
                        <p className=' font-bolt text-3xl'>Job Hunter</p>
                        <p>There are many variations of passages<br></br>of Lorem Ipsum , but the majority <br></br>have suffered alteration in some form.</p>
                        <img src="https://i.ibb.co/YPSqNKk/Group-9969.png" alt="" />
                    </div> 
                    <div>
                        <span className="font-bold mb-3  text-white">Company</span> 
                        <a className="link link-hover">About Us</a> 
                        <a className="link link-hover">Work</a> 
                        <a className="link link-hover">Latest News</a> 
                        <a className="link link-hover">Careers</a>
                    </div> 
                    <div>
                        <span className="font-bold mb-3  text-white">Product</span> 
                        <a className="link link-hover">Prototype</a> 
                        <a className="link link-hover">Plans & Pricing</a> 
                        <a className="link link-hover">Customers</a> 
                        <a className="link link-hover">Integrations</a>
                    </div> 
                    <div>
                        <span className="font-bold mb-3  text-white">Support</span> 
                        <a className="link link-hover">Help Desk</a> 
                        <a className="link link-hover">Sales</a> 
                        <a className="link link-hover">Become a Partner</a>
                        <a className="link link-hover">Developers</a> 
                    </div>
                    <div>
                        <span className="font-bold mb-3  text-white">Contact</span> 
                        <p className="">524 Broadway, NYC</p> 
                        <p className="">+1 777-978-5570</p> 
                        
                    </div> 
                    </footer> 
                    <footer className="footer px-10 py-4 border-t text-white bg-[#1A1919]">
                    <div className="items-center grid-flow-col">
                        
                        <p>@ 2023 Jub Hunter. All Rights Reserved</p>
                    </div> 
                    <div className="md:place-self-center md:justify-self-end">
                        <div className="grid grid-flow-col gap-4">
                         <p>Powered by Job Hunter</p>
                        </div>
                    </div>
                </footer>
        </>
    );
};

export default Footer;