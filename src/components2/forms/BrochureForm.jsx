"use client";
import { ProjectEnquiry } from "@/services/api";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function ProjectEnquiryModal({ projectName, showBrochure = false }) {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
        preferred_unit: "",
        project: "",
    });

    const [errors, setErrors] = useState({});
    const [formError, setFormError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    /* =======================
       AUTO BIND PROJECT
    ======================= */
    useEffect(() => {
        if (projectName) {
            setFormData((prev) => ({
                ...prev,
                project: projectName,
            }));
        }
    }, [projectName]);

    /* =======================
       HANDLE CHANGE
    ======================= */
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));

        setFormError("");
    };

    /* =======================
       VALIDATION
    ======================= */
    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Full name is required";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else {
            const phone = formData.phone.replace(/\s|-/g, "");

            const phoneRegex = /^(\+91)?[6-9]\d{9}$/;

            if (!phoneRegex.test(phone)) {
                newErrors.phone = "Enter a valid phone number";
            }
        }


        if (!formData.email.trim()) {
            newErrors.email = "Email address is required";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
        ) {
            newErrors.email = "Enter a valid email address";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    /* =======================
       HANDLE SUBMIT
    ======================= */
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        setIsSubmitting(true);
        setFormError("");

        try {
            await ProjectEnquiry(formData);

            Swal.fire({
                icon: "success",
                title: "Thank You!",
                text: "Your enquiry has been submitted successfully.",
                timer: 2500,
                showConfirmButton: false,
            });

            setFormData({
                name: "",
                phone: "",
                email: "",
                message: "",
                preferred_unit: "",
                project: projectName || "",
            });
        } catch (error) {
            setFormError(
                error?.response?.data?.message ||
                "Something went wrong. Please try again."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white rounded-[20px] p-[2px] md:p-[8px] lg:p-[10px]">
            <div className="mb-2">
                {showBrochure && (
                    <p className="font-urban text-[12px] lg:text-[14px] text-black ">
                        Download Brochure of
                    </p>
                )}

                <h2 className="font-urban text-[22px] lg:text-[32px] font-semibold text-black leading-tight">
                    {projectName}
                </h2>

                <p className="font-urban text-[12px] lg:text-[14px] text-black mt-1">
                    Get the complete project details instantly.
                </p>
            </div>

            <div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-[10px] mt-[24px]">
                    <div>
                        <p className="text-[12px] lg:text-[16px] leading-[16px] font-urban tracking-[0.3px] mb-[8px] font-medium">
                            Full Name*
                        </p>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            className="border-[#959595] border-1 text-[12px] leading-[100%] w-full font-urban rounded-[6px] px-[10px] py-[16px]"
                        />
                        {errors.name && (
                            <p className="text-red-500 text-[12px] mt-1">{errors.name}</p>
                        )}
                    </div>

                    <div>
                        <p className="text-[12px] lg:text-[16px] leading-[16px] font-urban tracking-[0.3px] mb-[8px] font-medium">
                            Phone Number*
                        </p>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                            className="border-[#959595] border-1 w-full text-[12px] leading-[100%] font-urban rounded-[6px] px-[10px] py-[16px]"
                        />
                        {errors.phone && (
                            <p className="text-red-500 text-[12px] mt-1">{errors.phone}</p>
                        )}
                    </div>

                    <div>
                        <p className="text-[12px] lg:text-[16px] leading-[16px] font-urban tracking-[0.3px] mb-[8px] font-medium">
                            Email Address*
                        </p>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email address"
                            className="border-[#959595] border-1 text-[12px] leading-[100%] w-full font-urban rounded-[6px] px-[10px] py-[16px]"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-[12px] mt-1">{errors.email}</p>
                        )}
                    </div>

                    <div>
                        <p className="text-[12px] lg:text-[16px] leading-[16px] font-urban tracking-[0.3px] mb-[8px] font-medium">
                            Preferred Unit Type**
                        </p>
                        <input
                            type="text"
                            name="preferred_unit"
                            value={formData.preferred_unit}
                            onChange={handleChange}
                            placeholder="Select preferred unit type"
                            className="border-[#959595] border-1 text-[12px] leading-[100%] w-full font-urban rounded-[6px] px-[10px] py-[16px]"
                        />
                    </div>

                    <div>
                        <p className="text-[12px] lg:text-[16px] leading-[16px] font-urban tracking-[0.3px] mb-[8px] font-medium">
                            Message*
                        </p>
                        <input
                            type="text"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Enter message"
                            className="border-[#959595] border-1 text-[12px] leading-[100%] w-full font-urban rounded-[6px] px-[10px] py-[16px]"
                        />
                        {errors.message && (
                            <p className="text-red-500 text-[12px] mt-1">{errors.message}</p>
                        )}
                    </div>

                    {formError && (
                        <p className="text-red-500 text-[12px] mt-1 text-center">
                            {formError}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="mt-4 bg-primary text-[15px] leading-[20px] font-roboto text-white py-[10px] w-full rounded-[6px]"
                    >
                        {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                    </button>
                </form>
            </div>
        </div>
    );
}
