'use client'
import { LeadSubmission } from '@/services/api';
import React, { useState } from 'react'
import ContactModal from '../ContactModal';

export default function EnquiryForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        message: ''
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "phone") {
            const onlyNums = value.replace(/[^0-9]/g, '');
            setFormData({ ...formData, [name]: onlyNums });
        }
        else if (name === "fullName") {
            const onlyChars = value.replace(/[0-9]/g, '');
            setFormData({ ...formData, [name]: onlyChars });
        }
        else {
            setFormData({ ...formData, [name]: value });
        }

        if (errors[name]) setErrors({ ...errors, [name]: "" });
    };

    const validate = () => {
        let newErrors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = "Full Name is required";
        }

        if (!formData.phone) {
            newErrors.phone = "Phone Number is required";
        } else if (formData.phone.length !== 10) {
            newErrors.phone = "Phone Number must be 10 digits";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Enter a valid email (e.g., name@gmail.com)";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // UPDATED: Handle API Submission
const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validate()) return;

  setIsSubmitting(true);

  try {
    const result = await LeadSubmission(formData);
    console.log("Success:", result);

    // ✅ OPEN SUCCESS MODAL
    setIsModalOpen(true);

    // Clear the form
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      message: "",
    });
  } catch (error) {
    alert("Something went wrong. Please try again later.");
  } finally {
    setIsSubmitting(false);
  }
};


    return (
        <>
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-[10px] mt-[24px]">

            {/* Full Name */}
            <div>
                <p className="text-[12px] lg:text-[16px] leading-[16px] font-urban tracking-[0.3px] mb-[8px] font-medium">Full Name*</p>
                <input
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={`border-1 text-[12px] w-full font-urban rounded-[6px] px-[10px] py-[16px] outline-none transition-all ${errors.fullName ? 'border-red-500 bg-red-50' : 'border-[#959595]'}`}
                />
                {errors.fullName && <p className="text-red-500 text-[11px] mt-1">{errors.fullName}</p>}
            </div>

            {/* Phone Number */}
            <div>
                <p className="text-[12px] lg:text-[16px] leading-[16px] font-urban tracking-[0.3px] mb-[8px] font-medium">Phone Number*</p>
                <input
                    name="phone"
                    type="text"
                    maxLength={10}
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit number"
                    className={`border-1 w-full text-[12px] font-urban rounded-[6px] px-[10px] py-[16px] outline-none transition-all ${errors.phone ? 'border-red-500 bg-red-50' : 'border-[#959595]'}`}
                />
                {errors.phone && <p className="text-red-500 text-[11px] mt-1">{errors.phone}</p>}
            </div>

            {/* Email Address */}
            <div>
                <p className="text-[12px] lg:text-[16px] leading-[16px] font-urban tracking-[0.3px] mb-[8px] font-medium">Email Address*</p>
                <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    autoComplete="off"
                    className={`border-1 text-[12px] w-full font-urban rounded-[6px] px-[10px] py-[16px] outline-none transition-all ${errors.email ? 'border-red-500 bg-red-50' : 'border-[#959595]'}`}
                />
                {errors.email && <p className="text-red-500 text-[11px] mt-1">{errors.email}</p>}
            </div>

            {/* Message */}
            <div>
                <p className="text-[12px] lg:text-[16px] leading-[16px] font-urban tracking-[0.3px] mb-[8px] font-medium">Message*</p>
                <textarea
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter message"
                    className={`border-1 text-[12px] w-full font-urban rounded-[6px] px-[10px] py-[16px] outline-none transition-all ${errors.message ? 'border-red-500 bg-red-50' : 'border-[#959595]'}`}
                />
                {errors.message && <p className="text-red-500 text-[11px] mt-1">{errors.message}</p>}
            </div>

            <button 
                type="submit" 
                disabled={isSubmitting}
                className={`mt-4 bg-[#CBA045] text-[15px] font-roboto text-white py-[12px] w-full rounded-[6px] font-bold transition-opacity ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'}`}
            >
                {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
            </button>
        </form>
        <ContactModal
        isOpen={isModalOpen}
        onClose={()=> setIsModalOpen(false)}
         />
        </>
    );
}