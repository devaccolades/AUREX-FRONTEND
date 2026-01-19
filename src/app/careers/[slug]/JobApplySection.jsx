"use client";

import { UploadCloud } from "lucide-react";
import Squares from "@/components2/Squares";
import { useState, useRef } from "react";
import { CareersApply } from "@/services/api";

export const splitByCommaAndDot = (value = "") => {
    if (typeof value !== "string") return [];

    return value
        .split(/\.\s*,|\.$/) // split on "., " OR ending "."
        .map(item => item.trim())
        .filter(Boolean);
};

export default function JobApplySection({ data }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        resume: null,
        coverLetter: "",
    });

    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);

    /* ✅ ADDED */
    const [isDragging, setIsDragging] = useState(false);

    const fileInputRef = useRef(null);

    /* ✅ ADDED */
    const MAX_SIZE_MB = 5;
    const ALLOWED_TYPES = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "text/plain",
    ];

    /* ✅ ADDED */
    const isValidFile = (file) => {
        if (!ALLOWED_TYPES.includes(file.type)) {
            setErrors(prev => ({
                ...prev,
                resume: "Invalid file type",
            }));
            return false;
        }

        if (file.size > MAX_SIZE_MB * 1024 * 1024) {
            setErrors(prev => ({
                ...prev,
                resume: "File must be under 5MB",
            }));
            return false;
        }

        return true;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (!isValidFile(file)) return;

        setErrors(prev => ({ ...prev, resume: null }));

        setFormData((prev) => ({
            ...prev,
            resume: file,
        }));
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    /* ✅ ADDED */
    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);

        const file = e.dataTransfer.files?.[0];
        if (!file) return;

        if (!isValidFile(file)) return;

        setErrors(prev => ({ ...prev, resume: null }));

        setFormData(prev => ({
            ...prev,
            resume: file
        }));
    };

    const handleRemoveFile = (e) => {
        e.stopPropagation();

        setFormData(prev => ({
            ...prev,
            resume: null
        }));

        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        if (!formData.phone.trim()) newErrors.phone = "Phone is required";
        if (!formData.resume) newErrors.resume = "Resume is required";
        if (!formData.coverLetter.trim())
            newErrors.coverLetter = "Cover letter is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        setSubmitting(true);

        try {
            const payload = new FormData();
            payload.append("name", formData.name);
            payload.append("email", formData.email);
            payload.append("phone", formData.phone);
            payload.append("resume", formData.resume);
            payload.append("coverLetter", formData.coverLetter);

            // alert("Application submitted successfully!");
            console.log(payload);
            await CareersApply(payload);

            setFormData({
                name: "",
                email: "",
                phone: "",
                resume: null,
                coverLetter: "",
            });
            setErrors({});
        } catch (err) {
            console.error(err);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section className="relative pb-10 pt-60">
            <div className="absolute top-0 left-0 w-full h-2/3 overflow-hidden">
                <Squares
                    speed={0.5}
                    squareSize={36}
                    direction="diagonal"
                    borderColor="#dbdbdb"
                    hoverFillColor="#dbdbdb"
                />
            </div>

            <div className="relative container">
                <div className="bg-white rounded-[20px] border border-black shadow-sm p-4 md:p-6 lg:p-10 grid grid-cols-1 md:grid-cols-2 gap-10">

                    {/* LEFT — JOB DETAILS (UNCHANGED) */}
                    <div>
                        <h2 className="text-[16px] md:text-[18px] lg:text-xl font-bold font-urban leading-[20px] mb-4">
                            {data.job_title}
                        </h2>

                        <div className="text-[13px] leading-[100%] font-urban font-bold text-black mb-6 flex flex-wrap gap-2">
                            <span>Location: <strong className="text-black font-medium">{data.location}</strong></span>
                            <span>|</span>
                            <span>Experience: <strong className="text-black font-medium">{data.experience}</strong></span>
                            <span>|</span>
                            <span>Type: <strong className="text-black font-medium">{data.type}</strong></span>
                        </div>

                        <div className="space-y-5 text-black">
                            <div className="mb-4">
                                <h4 className="font-semibold text-black text-[14px] lg:text-[16px] font-urban leading-[16px] mb-2">
                                    Job overview
                                </h4>
                                <p className="text-[12px] md:text-[13px] lg:text-sm leading-[100%">
                                    {data.job_overview}
                                </p>
                            </div>

                            <div className="mb-2 md:mb-4">
                                <h4 className="font-semibold text-black text-[14px] lg:text-[16px] font-urban leading-[16px] mb-2">
                                    Key responsibilities
                                </h4>
                                <ul className="list-disc pl-5 space-y-1 text-[12px] md:text-[13px] lg:text-sm leading-[100%">
                                    {splitByCommaAndDot(data?.key_responsibilities).map((item, index) => (
                                        <li key={index}>{item}.</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mb-2 md:mb-4">
                                <h4 className="font-semibold text-black text-[14px] lg:text-[16px] font-urban leading-[16px] mb-2">
                                    Requirements
                                </h4>
                                <ul className="list-disc pl-5 space-y-1 text-[12px] md:text-[13px] lg:text-sm leading-[100%">
                                    {splitByCommaAndDot(data?.requirements).map((item, index) => (
                                        <li key={index}>{item}.</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT — APPLY FORM */}
                    <div>
                        <h3 className="text-[16px] md:text-[18px] lg:text-xl font-bold font-urban leading-[20px] mb-2">
                            APPLY FOR THIS JOB
                        </h3>

                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <Input
                                label="Full Name*"
                                placeholder="Enter your full name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />

                            <Input
                                label="Email Address*"
                                placeholder="Enter your email address"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />

                            <Input
                                label="Phone Number*"
                                placeholder="Enter your phone number"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />

                            {/* Upload */}
                            <div>
                                <label className="text-[12px] lg:text-[16px] leading-[16px] font-urban">
                                    Resume/CV*
                                </label>

                                <div
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => e.key === "Enter" && fileInputRef.current?.click()}
                                    onClick={() => fileInputRef.current?.click()}
                                    onDragOver={handleDragOver}
                                    onDragLeave={handleDragLeave}
                                    onDrop={handleDrop}
                                    className={`mt-1 border border-gray-200 border-dashed rounded-[24px] p-6 text-center hover:bg-gray-50 cursor-pointer
                                        ${isDragging ? "bg-gray-50" : ""}
                                    `}
                                >
                                    {formData.resume ? (
                                        <div className="flex items-center justify-between gap-3">
                                            <div className="text-left">
                                                <p className="text-xs font-medium truncate max-w-[180px]">
                                                    {formData.resume.name}
                                                </p>
                                                <p className="text-[10px] text-gray-500">
                                                    {(formData.resume.size / 1024).toFixed(1)} KB
                                                </p>
                                            </div>

                                            <button
                                                type="button"
                                                onClick={handleRemoveFile}
                                                className="text-gray-500 hover:text-black text-lg leading-none"
                                            >
                                                ✕
                                            </button>
                                        </div>
                                    ) : (
                                        <>
                                            <UploadCloud className="mx-auto mb-2 text-black" />
                                            <p className="text-[12px] lg:text-[16px] leading-[16px] font-urban font-extrabold">
                                                DROP YOUR DOCUMENTS
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                PDF, DOCX, TXT up to 5 MB
                                            </p>
                                        </>
                                    )}

                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        className="hidden"
                                        accept=".pdf,.doc,.docx,.txt"
                                        onChange={handleFileChange}
                                    />
                                </div>

                                {/* ✅ ADDED */}
                                {errors.resume && (
                                    <p className="text-xs text-red-500 mt-1">
                                        {errors.resume}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="text-[12px] lg:text-[16px] leading-[16px] font-urban">
                                    Cover Letter*
                                </label>
                                <textarea
                                    rows={4}
                                    name="coverLetter"
                                    value={formData.coverLetter}
                                    onChange={handleChange}
                                    placeholder="Stand out from the crowd"
                                    className="border border-gray-200 text-[12px] leading-[100%] w-full font-urban mt-1 px-4 py-3 rounded-[24px] focus:outline-none focus:ring-2 focus:ring-black"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={submitting}
                                className="text-[15px] leading-[20px] font-roboto w-full mt-4 bg-black text-white py-3 rounded-full font-medium hover:bg-gray-900 transition disabled:opacity-50"
                            >
                                {submitting ? "Submitting..." : "SUBMIT APPLICATION"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------- Small Input Component ---------- */
function Input({ label, placeholder, name, value, onChange }) {
    return (
        <div>
            <label className="text-[12px] lg:text-[16px] leading-[16px] font-urban">
                {label}
            </label>
            <input
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="border-gray-200 border text-[12px] leading-[100%] w-full font-urban rounded-[24px] px-[10px] py-[16px]"
            />
        </div>
    );
}
