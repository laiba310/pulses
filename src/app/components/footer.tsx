"use client";

import React from "react";
import { Mail, Facebook, MapPin, Phone, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className=" w-full py-10 border-t shadow-2xl px-5 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Hanif Traders</h2>
          <p>Reliable trading solutions for your business needs.</p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="flex items-center gap-2"><Phone size={18} /> +92 320 2727538</p>
          <p className="flex items-center gap-2"><Mail size={18} /> haniftraders15@gmail.com</p>
          <p className="flex items-center gap-2"><MapPin size={18} /> Karachi, Pakistan</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <Facebook size={24} />
            </a>
            <a href="mailto:info@haniftraders.com" className="hover:text-red-500">
              <Mail size={24} />
            </a>
            <a href="mailto:info@haniftraders.com" className="hover:text-red-500">
              <Linkedin size={24} />
            </a>
        
          </div>
        </div>
      
      </div>

      {/* Copyright */}
      <div className="text-center mt-5 pt-4">
        <p>&copy; {new Date().getFullYear()} Hanif Traders. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;