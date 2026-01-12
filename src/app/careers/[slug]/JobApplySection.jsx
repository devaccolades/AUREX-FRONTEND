"use client";

import { UploadCloud } from "lucide-react";
import Squares from "@/Components/Squares";
import { useState } from "react";

export default function JobApplySection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        resume: null,
        coverLetter: "",
    });

    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            resume: e.target.files[0],
        }));
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

            // 🔗 API CALL GOES HERE
            // await fetch("/api/job-apply", { method: "POST", body: payload });

            alert("Application submitted successfully!");
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
        <section className="relative pb-10 pt-60  ">
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
                <div className=" bg-white rounded-[20px] border border-black shadow-sm p-4 md:p-6 lg:p-10 grid grid-cols-1 md:grid-cols-2 gap-10">

                    {/* LEFT — JOB DETAILS */}
                    <div>
                        <h2 className="text-[16px] md:text-[18px] lg:text-xl font-bold font-urban leading-[20px] mb-4">SITE ENGINEER</h2>

                        <div className="text-[13px] leading-[100%] font-urban font-bold text-black  mb-6 flex flex-wrap gap-2">
                            <span>Location: <strong className="text-black font-medium">Thrissur</strong></span>
                            <span>|</span>
                            <span>Experience: <strong className="text-black font-medium">2–5 years</strong></span>
                            <span>|</span>
                            <span>Type: <strong className="text-black font-medium">Full Time</strong></span>
                        </div>

                        <div className="space-y-5  text-black">
                            <div className="mb-4">
                                <h4 className="font-semibold text-black text-[14px] lg:text-[16px]  font-urban leading-[16px] mb-2">Job overview</h4>
                                <p className="text-[12px] md:text-[13px] lg:text-sm leading-[100%">
                                    We’re looking for a highly motivated and detail-oriented Site Engineer to join our project team in Thrissur. 
                                    This role requires hands-on experience in managing all technical aspects of on-site construction work — from planning
                                 and supervision to coordination with multiple stakeholders. You will ensure that projects are executed on schedule, within 
                                 budget, and according to approved design and quality standards.
                                </p>
                            </div>

                            <div className="mb-2 md:mb-4">
                                <h4 className="font-semibold text-black text-[14px] lg:text-[16px]  font-urban leading-[16px] mb-2">Key responsibilities</h4>
                                <ul className="list-disc pl-5 space-y-1 text-[12px] md:text-[13px] lg:text-sm leading-[100%">
                                    <li>Supervise daily on-site construction activities.</li>
                                    <li>Ensure adherence to safety standards and deadlines.</li>
                                    <li>Manage materials, labor, and subcontractors efficiently.</li>
                                    <li>Coordinate with architects and project managers.</li>
                                    <li>Conduct quality checks and prepare progress reports.</li>
                                </ul>
                            </div>

                            <div className="mb-2 md:mb-4">
                                <h4 className="font-semibold text-black text-[14px] lg:text-[16px]  font-urban leading-[16px] mb-2">Requirements</h4>
                                <ul className="list-disc pl-5 space-y-1 text-[12px] md:text-[13px] lg:text-sm leading-[100%">
                                    <li>Bachelor’s degree or diploma in Civil Engineering.</li>
                                    <li>2–5 years experience in residential/commercial projects.</li>
                                    <li>Strong understanding of drawings and execution.</li>
                                    <li>Excellent communication and leadership skills.</li>
                                    <li>Ability to manage multiple projects.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT — APPLY FORM */}
                    <div>
                        <h3 className="text-[16px] md:text-[18px] lg:text-xl font-bold font-urban leading-[20px] mb-2">APPLY FOR THIS JOB</h3>

                        <form className="space-y-4">
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
                                <label className="text-[12px] lg:text-[16px] leading-[16px] font-urban">Resume/CV*</label>
                                <div className="mt-1 border border-gray-200 border-dashed  rounded-[24px] p-6 text-center hover:bg-gray-50 cursor-pointer">
                                    <UploadCloud className="mx-auto mb-2 text-black" />
                                    <p className="text-[12px] lg:text-[16px] leading-[16px] font-urban font-extrabold">DROP YOUR DOCUMENTS</p>
                                    <p className="text-xs text-gray-500">
                                        PDF, DOCX, TXT up to 5 MB
                                    </p>
                                    <input
                                        type="file"
                                        className="hidden"
                                        accept=".pdf,.doc,.docx,.txt"
                                        onChange={handleFileChange}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-[12px] lg:text-[16px] leading-[16px] font-urban">Cover Letter*</label>
                                <textarea
                                    rows={4}
                                    name="coverLetter"
                                    value={formData.coverLetter}
                                    onChange={handleChange}
                                    placeholder="Stand out from the crowd"
                                    className=" border border-gray-200 text-[12px] leading-[100%]  w-full font-urban mt-1 px-4 py-3 rounded-[24px]  focus:outline-none focus:ring-2 focus:ring-black"
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
      <label className="text-[12px] lg:text-[16px] leading-[16px] font-urban">{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border-gray-200 border text-[12px] leading-[100%]  w-full font-urban rounded-[24px] px-[10px] py-[16px]"
        // className="w-full mt-1 px-4 py-3 rounded-lg border  border-black focus:outline-none focus:ring-2 focus:ring-black"
      />
    </div>
  );
}

