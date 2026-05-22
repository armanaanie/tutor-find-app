import React from 'react';
import { FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { TiSocialFacebook } from 'react-icons/ti';

const Footer = () => {
    return (<div className=''>
        <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10 shadow-sm justify-between">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Tutor Search & Discovery</a>
    <a className="link link-hover">Tutor Profiles</a>
    <a className="link link-hover">Online Class System</a>
    <a className="link link-hover">Booking & Scheduling</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
   
  </nav>
  <nav>
    <h6 className="footer-title">Social Links</h6>
    <a className="link link-hover"><FaInstagram className='h-5 w-5'/></a>
    <a className="link link-hover"><TiSocialFacebook className='h-5 w-5' /></a>
   <a className="link link-hover"> <FaXTwitter className='h-5 w-5' /></a>
   
  </nav>
  
</footer>
<footer className="footer flex   flex-col md:flex-row  bg-black text-white border-base-300 border-t px-10 py-5  items-center justify-between">
 
   
   
         <h1 className="lg:text-xl text-lg font-extrabold">Tutorfind</h1>
      
       <p className=''>
     copyright © Providing reliable tech since 2022
    </p>
 
  
</footer>
</div>
    );
};

export default Footer;