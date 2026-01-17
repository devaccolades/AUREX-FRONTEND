"use client";

export default function ModalForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* =======================
     HANDLE CHANGE
  ======================= */
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error on change
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
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
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
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

    try {
      // 🔗 Replace this with your API call
      console.log("Form Submitted:", formData);

      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });

      alert("Enquiry submitted successfully!");
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
   <div className="bg-white rounded-[20px] p-[2px] md:p-[8px] lg:p-[10px] ">
          <p className="font-urbarn text-[16px] lg:text-[24px] leading-[16px] lg:leading-[28px] tracking-[-4%] font-medium">
            WE ARE READY TO ANSWER ALL YOUR QUESTIONS
          </p>
          <div>
            <form className="flex flex-col gap-[10px] mt-[24px]">
              <div>
                <p className="text-[12px] lg:text-[16px] leading-[16px] font-urban tracking-[0.3px] mb-[8px] font-medium">
                  Full Name*
                </p>
                <input
                  type="text"
                  name="name"
                  value={formData.fname}
            onChange={handleChange}
                  placeholder="Enter your full name"
                  className="border-[#959595] border-1 text-[12px] leading-[100%]  w-full font-urban rounded-[6px] px-[10px] py-[16px]"
                />
                {errors.name && (
            <p className="text-red-500 text-[12px] mt-1">
              {errors.name}
            </p>
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
                  className="border-[#959595] border-1 w-full text-[12px] leading-[100%]  font-urban rounded-[6px] px-[10px] py-[16px]"
                />
                {errors.phone && (
            <p className="text-red-500 text-[12px] mt-1">
              {errors.phone}
            </p>
          )}
              </div>
              <div>
                <p className="text-[12px] lg:text-[16px] leading-[16px] font-urban tracking-[0.3px] mb-[8px] font-medium">
                  Email Address*
                </p>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="border-[#959595] border-1  text-[12px] leading-[100%]  w-full font-urban rounded-[6px] px-[10px] py-[16px]"
                />
              </div>
              <div>
                <p className="text-[12px] lg:text-[16px] leading-[16px] font-urban tracking-[0.3px] mb-[8px] font-medium">
                  Message*
                </p>
                <input
                  type="text"
                  placeholder="Enter message "
                  className="border-[#959595] border-1 text-[12px] leading-[100%]  w-full font-urban rounded-[6px] px-[10px] py-[16px]"
                />
              </div>
              <button className="mt-4 bg-primary text-[15px] leading-[20px] font-roboto text-white py-[10px] w-full rounded-[6px]">
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
  );
}
