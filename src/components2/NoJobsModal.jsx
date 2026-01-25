'use client'

import { useState, useRef, useEffect } from 'react'
import { X, UploadCloud } from 'lucide-react'
import { CareersApply } from '@/services/api'
import SuccessModal from './SuccessModal' // import your success modal
import CareerModal from './CareerModal'

export default function NoJobsModal({ onClose, data }) {
  const fileInputRef = useRef(null)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: '',
  })
  const [errors, setErrors] = useState({})
  const [isDragging, setIsDragging] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => (document.body.style.overflow = 'auto')
  }, [])

  useEffect(() => {
    const esc = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', esc)
    return () => window.removeEventListener('keydown', esc)
  }, [onClose])

  /* ---------- HANDLERS ---------- */
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setFormData(prev => ({ ...prev, resume: file }))
      setErrors(prev => ({ ...prev, resume: '' }))
    }
  }

  const handleRemoveFile = () => setFormData(prev => ({ ...prev, resume: null }))
  const handleDragOver = (e) => { e.preventDefault(); setIsDragging(true) }
  const handleDragLeave = () => setIsDragging(false)
  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files[0]
    if (file) {
      setFormData(prev => ({ ...prev, resume: file }))
      setErrors(prev => ({ ...prev, resume: '' }))
    }
  }

  /* ---------- VALIDATION ---------- */
  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    else if (!/^[A-Za-z\s]+$/.test(formData.name)) newErrors.name = 'Numbers are not allowed'

    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Enter a valid email'

    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone number must be 10 digits'

    if (!formData.resume) newErrors.resume = 'Resume is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  /* ---------- SUBMIT ---------- */
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setSubmitting(true)
    try {
      const payload = new FormData();
      payload.append("name", formData.name);
      payload.append("email", formData.email);
      payload.append("number", formData.phone);      
      payload.append("cv_file", formData.resume);    
      payload.append("position", "General Application"); 

      if (formData.coverLetter) {
        payload.append("cover_letter", formData.coverLetter);
      }

      await CareersApply(payload);

      // reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        resume: null,
        coverLetter: '',
      })
      setErrors({})
      setSuccess(true) // ✅ show success modal
    } catch (error) {
      console.error('API Error:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      {/* Main Modal */}
       {!success && (
      <div
        className="fixed inset-0 z-999 flex items-center justify-center bg-black/60 px-4"
        onClick={onClose}
      >
        <div
          className="relative bg-white w-full max-w-xl rounded-[32px] p-6 md:p-7 max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-500 hover:text-black"
          >
            <X size={22} />
          </button>

          <h3 className="text-[16px] md:text-[18px] lg:text-xl font-bold font-urban mb-3">
            APPLY FOR THIS JOB
          </h3>

          <form className="space-y-3" onSubmit={handleSubmit} noValidate>
            {/* Name */}
            <div>
              <label className="text-[12px] lg:text-[16px] font-urban">Full Name*</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-200 w-full mt-1 px-4 py-2 rounded-[20px]"
              />
              {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="text-[12px] lg:text-[16px] font-urban">Email Address*</label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-200 w-full mt-1 px-4 py-2 rounded-[20px]"
              />
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="text-[12px] lg:text-[16px] font-urban">Phone Number*</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="border border-gray-200 w-full mt-1 px-4 py-2 rounded-[20px]"
              />
              {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
            </div>

            {/* Resume */}
            <div>
              <label className="text-[12px] lg:text-[16px] font-urban">Resume / CV*</label>
              <div
                onClick={() => fileInputRef.current?.click()}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`mt-1 border border-dashed rounded-[20px] p-4 text-center cursor-pointer ${isDragging ? 'bg-gray-50' : ''
                  }`}
              >
                {formData.resume ? (
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs truncate max-w-[200px]">{formData.resume.name}</span>
                    <button type="button" onClick={handleRemoveFile}>✕</button>
                  </div>
                ) : (
                  <>
                    <UploadCloud className="mx-auto mb-1" />
                    <p className="font-extrabold font-urban text-[14px]">DROP YOUR DOCUMENTS</p>
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
              {errors.resume && <p className="text-xs text-red-500 mt-1">{errors.resume}</p>}
            </div>

            {/* Cover Letter */}
            <div>
              <label className="text-[12px] lg:text-[16px] font-urban">Cover Letter (Optional)</label>
              <textarea
                rows={3}
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleChange}
                className="border border-gray-200 w-full mt-1 px-4 py-2 rounded-[20px]"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full mt-2 bg-black text-white py-3 rounded-full font-medium disabled:opacity-50"
            >
              {submitting ? 'Submitting...' : 'SUBMIT APPLICATION'}
            </button>
          </form>
        </div>
      </div>
       )}

      {/* Success Modal */}
      {/* <SuccessModal
        isOpen={success}
        projectName={data?.job_title || 'this job'}
        onClose={() => {
          setSuccess(false)
          onClose()
        }}
      /> */}
      <CareerModal
  isOpen={success}
  projectName="Green Valley Residences"
  onClose={() => {
    setSuccess(false);
    onClose(); // close NoJobsModal AFTER user closes success modal
  }}
/>
    </>
  )
}
