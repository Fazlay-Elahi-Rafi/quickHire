"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";

const ApplyForm = ({ jobTitle, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    expectedSalary: "",
    noticePeriod: "",
    coreExperience: [],
    cvFile: null,
  });

  const [fileName, setFileName] = useState("No file chosen");
  const [coreExperiences] = useState([
    "Frontend Development",
    "Backend Development",
    "Full Stack Development",
    "DevOps",
    "UI/UX Design",
    "Database Management",
    "API Integration",
    "Mobile Development",
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type === "application/pdf" && file.size <= 5 * 1024 * 1024) {
        setFormData((prev) => ({
          ...prev,
          cvFile: file,
        }));
        setFileName(file.name);
      } else {
        alert("Please select a PDF file under 5MB");
      }
    }
  };

  const handleCoreExperienceChange = (experience) => {
    setFormData((prev) => ({
      ...prev,
      coreExperience: prev.coreExperience.includes(experience)
        ? prev.coreExperience.filter((exp) => exp !== experience)
        : [...prev.coreExperience, experience],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="job-application-form">
      <div className="application-form__header">
        <h2 className="application-form__title">Application Form</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="d-flex gap-md-3 flex-wrap flex-md-nowrap">
          {/* Full Name */}
          <div className="application-form__field w-100">
            <label className="field-label">
              Full Name <span className="required">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              className="field-input"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Email Address */}
          <div className="application-form__field w-100">
            <label className="field-label">
              Email Address <span className="required">*</span>
            </label>
            <input
              type="email"
              name="email"
              className="field-input"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        {/* Phone Number */}
        <div className="application-form__field">
          <label className="field-label">
            Phone Number <span className="required">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            className="field-input"
            placeholder="01XXXXXXXX (11 digits starting with 01)"
            pattern="[0-9]{11}"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="d-flex gap-md-3 flex-wrap flex-md-nowrap">
          {/* Years of Experience */}
          <div className="application-form__field w-100">
            <label className="field-label">
              Years of Experience <span className="required">*</span>
            </label>
            <input
              type="number"
              name="experience"
              className="field-input"
              placeholder="e.g., 1.5"
              step="0.5"
              min="0"
              value={formData.experience}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Expected Salary */}
          <div className="application-form__field w-100">
            <label className="field-label">
              Expected Salary (BDT) <span className="required">*</span>
            </label>
            <input
              type="number"
              name="expectedSalary"
              className="field-input"
              placeholder="e.g., 50000"
              min="0"
              value={formData.expectedSalary}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Notice Period */}
          <div className="application-form__field w-100">
            <label className="field-label">
              Notice Period (Months) <span className="required">*</span>
            </label>
            <input
              type="number"
              name="noticePeriod"
              className="field-input"
              placeholder="e.g., 1"
              min="0"
              step="0.5"
              value={formData.noticePeriod}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        {/* Core Experience */}
        <div className="application-form__field">
          <label className="field-label">
            Core Experience <span className="required">*</span>
          </label>
          <div className="core-experience__select">
            <select
              className="field-select"
              onChange={(e) => handleCoreExperienceChange(e.target.value)}
              value=""
            >
              <option value="">Select your core experiences...</option>
              {coreExperiences.map((exp, index) => (
                <option key={index} value={exp}>
                  {exp}
                </option>
              ))}
            </select>
          </div>
          {formData.coreExperience.length > 0 && (
            <div className="selected-experiences">
              {formData.coreExperience.map((exp, index) => (
                <span key={index} className="selected-exp-tag">
                  {exp}
                  <Icon
                    icon="tabler:x"
                    className="remove-icon"
                    onClick={() => handleCoreExperienceChange(exp)}
                  />
                </span>
              ))}
            </div>
          )}
        </div>

        {/* CV Upload */}
        <div className="application-form__field">
          <label className="field-label">
            CV/Resume (PDF) <span className="required">*</span>
          </label>
          <div className="file-upload">
            <input
              type="file"
              id="cv-upload"
              accept=".pdf"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
            <button
              type="button"
              className="file-upload__button"
              onClick={() => document.getElementById("cv-upload").click()}
            >
              Choose File
            </button>
            <span className="file-upload__name">{fileName}</span>
          </div>
          <p className="file-upload__hint">
            Maximum file size: 5MB. Accepted formats: PDF
          </p>
        </div>

        {/* What happens next section */}
        <div className="application-form__next-steps">
          <h3 className="next-steps__title">What happens next?</h3>
          <ul className="next-steps__list">
            <li className="next-step__item">
              <Icon icon="tabler:mail" className="step-icon" />
              <span>
                You'll receive a confirmation email with your Application ID
              </span>
            </li>
            <li className="next-step__item">
              <Icon icon="tabler:clipboard-check" className="step-icon" />
              <span>
                We'll review your application and send you a task assignment
              </span>
            </li>
            <li className="next-step__item">
              <Icon icon="tabler:file-text" className="step-icon" />
              <span>
                Complete the task and submit it through your candidate portal
              </span>
            </li>
            <li className="next-step__item">
              <Icon icon="tabler:messages" className="step-icon" />
              <span>
                We'll evaluate your submission and contact you for next steps
              </span>
            </li>
          </ul>
        </div>

        {/* Submit Button */}
        <button type="submit" className="application-form__submit">
          <Icon icon="tabler:send" className="me-2" />
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplyForm;
