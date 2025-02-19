"use client";

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/footer";
import Header from "../components/Header";

const Contact = () => {
    const [formData, setFormData] = useState<{ [key: string]: string }>({
        name: "",
        email: "",
        subject: "",
        phone: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // ✅ Toast will pop up as soon as the button is clicked
        toast.info("⏳ Sending your message...", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });

        const formAction = "https://formsubmit.co/haniftraders15@gmail.com";

        const formDataToSend = new FormData();
        Object.keys(formData).forEach((key) => {
            formDataToSend.append(key, formData[key]);
        });

        formDataToSend.append("_subject", "New Contact Form Submission");
        formDataToSend.append("_next", "https://yourwebsite.com/success");
        formDataToSend.append("_captcha", "false");
        formDataToSend.append("_autoresponse", `Thank you ${formData.name}, we received your message!`);

        try {
            const response = await fetch(formAction, {
                method: "POST",
                body: formDataToSend,
            });

            if (response.ok) {
                toast.success("✅ Your message has been successfully sent!", {
                    position: "top-center",
                    autoClose: 3000,
                });

                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    phone: "",
                    message: "",
                });
            } else {
                toast.error("❌ Something went wrong!", {
                    position: "top-center",
                    autoClose: 3000,
                });
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("⚠️ Failed to send message!", {
                position: "top-center",
                autoClose: 3000,
            });
        }
    };

    return (
        <>
        <Header />
        <div>
            <div className="container max-w-[600px] mx-auto my-32 p-0 rounded-[10px]">
                <h1 className="title text-center text-[2rem] mb-8">Get In Touch</h1>

                <form onSubmit={handleSubmit} className="form flex flex-col gap-[15px] mb-16">
                    <div className="te-in flex gap-[30px] w-full">
                        <input type="text" name="name" value={formData.name} onChange={handleChange} 
                            className="input border-b border-black outline-none w-full mb-12 p-2" 
                            placeholder="Name" required />
                        <input type="email" name="email" value={formData.email} onChange={handleChange} 
                            className="input border-b border-black outline-none w-full mb-12 p-2" 
                            placeholder="Email" required />
                    </div>
                    <div className="te-in">
                        <input type="text" name="subject" value={formData.subject} onChange={handleChange} 
                            className="input border-b border-black outline-none w-full mb-12 p-2" 
                            placeholder="Subject" required />
                        <input type="text" name="phone" value={formData.phone} onChange={handleChange} 
                            className="input border-b border-black outline-none w-full mb-12 p-2" 
                            placeholder="Phone" required />
                    </div>
                    <textarea name="message" value={formData.message} onChange={handleChange} 
                        className="textarea border-b border-black outline-none w-full mb-12 p-2" 
                        placeholder="Message" required></textarea>

                    <div className="but">
                        <button type="submit" className="butt px-[30px] py-[15px] bg-[#100000] text-[#faf7f7] border-none rounded-[18px] cursor-pointer transition-transform duration-200 ease-in-out w-[220.14px] mx-auto my-0 text-center hover:scale-105">
                            Send Now
                        </button>
                    </div>
                </form>
            </div>

            {/* ✅ Always Render ToastContainer so it works properly */}
            <ToastContainer />
        </div>
        <Footer/>
        </>
    );
};

export default Contact;
