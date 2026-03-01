"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { Icon } from "@iconify/react";
import slugify from "slugify";

import jobsData from "../../data/jobs.json";
import ApplyForm from "./apply-form";

const JobDetails = ({ jobId }) => {
  const router = useRouter();
  const [jobId_state, setJobId_state] = useState("");

  const generateSlug = (title) => {
    return slugify(title, {
      lower: true,
      strict: true,
      remove: /[*+~.()'"!:@]/g,
    });
  };

  const matchedJob = jobsData.find((job) => generateSlug(job.title) === jobId);

  useEffect(() => {
    if (jobId && !matchedJob) {
      router.push(`/all-jobs`);
    }

    // Generate random Job ID
    setJobId_state(Math.random().toString(36).substring(2, 8).toUpperCase());
  }, [matchedJob, router, jobId]);

  if (!matchedJob) {
    return null;
  }

  return (
    <div className="job-details-page">
      <div className="container">
        {/* Breadcrumb */}
        <div className="job-details__breadcrumb mb-4">
          <Link href="/" className="job-details__breadcrumb-link">
            Home
          </Link>
          <Icon
            icon="fa6-solid:angle-right"
            className="job-details__breadcrumb-icon"
          />
          <Link href="/all-jobs" className="job-details__breadcrumb-link">
            All Jobs
          </Link>
          <Icon
            icon="fa6-solid:angle-right"
            className="job-details__breadcrumb-icon"
          />
          <span className="job-details__breadcrumb-current">
            {matchedJob.title}
          </span>
        </div>

        <div className="row">
          <div className="col-lg-8">
            <div className="job-details__header mb-4">
              <h1 className="job-details__header-title">{matchedJob.title}</h1>
              <h2 className="job-details__header-subtitle">
                {matchedJob.sub_title}
              </h2>

              <div className="job-details__header-meta">
                <div className="meta-item">
                  <Icon icon="tabler:clock" className="meta-icon" />
                  <span>
                    Experience:{" "}
                    {matchedJob.experience_required || "Not specified"}
                  </span>
                </div>
                <div className="meta-item">
                  <Icon icon="tabler:currency-dollar" className="meta-icon" />
                  <span>
                    Salary Range: {matchedJob.salary_range || "Negotiable"}
                  </span>
                </div>
                <div className="meta-item">
                  <Icon icon="tabler:id" className="meta-icon" />
                  <span>Job ID: {jobId_state}</span>
                </div>
                <div className="meta-item">
                  <Icon icon="tabler:circle-check" className="meta-icon" />
                  <span>Status: Active</span>
                </div>
                <div className="meta-item">
                  <Icon icon="tabler:star" className="meta-icon" />
                  <span>
                    Min. Passing Score: {matchedJob.min_passing_score || "N/A"}
                  </span>
                </div>
              </div>
            </div>

            {/* Job Description */}
            <div className="job-details__section mb-4">
              <h3 className="job-details__section-title">Job Description</h3>
              <p className="job-details__section-content">
                {matchedJob.description}
              </p>
            </div>

            {/* About the Role */}
            <div className="job-details__section mb-4">
              <h3 className="job-details__section-title">About the Role</h3>
              <p className="job-details__section-content">
                {matchedJob.about_role}
              </p>
            </div>

            {/* Key Responsibilities */}
            <div className="job-details__section mb-4">
              <h3 className="job-details__section-title">
                Key Responsibilities
              </h3>
              <ul className="job-details__list">
                {matchedJob.key_responsibilities?.map((item, index) => (
                  <li key={index} className="list-item">
                    <Icon icon="tabler:check" className="list-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Required Technical Skills */}
            <div className="job-details__section mb-4">
              <h3 className="job-details__section-title">
                Required Technical Skills
              </h3>

              {matchedJob.required_technical_skills?.frontend && (
                <div className="skills-group mb-3">
                  <h4 className="skills-group__title">
                    <span className="title-badge">
                      Frontend (Non-negotiable)
                    </span>
                  </h4>
                  <div className="skills-tags">
                    {matchedJob.required_technical_skills.frontend.map(
                      (skill, index) => (
                        <span key={index} className="skill-tag">
                          {skill}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              )}

              {matchedJob.required_technical_skills?.ai_tools && (
                <div className="skills-group mb-3">
                  <h4 className="skills-group__title">AI Tools Proficiency</h4>
                  <div className="skills-tags">
                    {matchedJob.required_technical_skills.ai_tools.map(
                      (skill, index) => (
                        <span key={index} className="skill-tag">
                          {skill}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              )}

              {matchedJob.required_technical_skills?.backend && (
                <div className="skills-group mb-3">
                  <h4 className="skills-group__title">Backend Knowledge</h4>
                  <div className="skills-tags">
                    {matchedJob.required_technical_skills.backend.map(
                      (skill, index) => (
                        <span key={index} className="skill-tag">
                          {skill}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Database Knowledge */}
            <div className="job-details__section mb-4">
              <h3 className="job-details__section-title">Database Knowledge</h3>

              {matchedJob.database_knowledge?.nosql && (
                <div className="skills-group mb-3">
                  <h4 className="skills-group__title">NoSQL</h4>
                  <div className="skills-tags">
                    {matchedJob.database_knowledge.nosql.map((skill, index) => (
                      <span key={index} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {matchedJob.database_knowledge?.sql && (
                <div className="skills-group mb-3">
                  <h4 className="skills-group__title">SQL</h4>
                  <div className="skills-tags">
                    {matchedJob.database_knowledge.sql.map((skill, index) => (
                      <span key={index} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {matchedJob.database_knowledge?.orms && (
                <div className="skills-group mb-3">
                  <h4 className="skills-group__title">ORMs/ODMs</h4>
                  <div className="skills-tags">
                    {matchedJob.database_knowledge.orms.map((skill, index) => (
                      <span key={index} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Development Tools */}
            <div className="job-details__section mb-4">
              <h3 className="job-details__section-title">Development Tools</h3>
              <div className="skills-tags">
                {matchedJob.development_tools?.map((tool, index) => (
                  <span key={index} className="skill-tag">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Bonus Skills */}
            {matchedJob.bonus_skills && matchedJob.bonus_skills.length > 0 && (
              <div className="job-details__section mb-4">
                <h3 className="job-details__section-title">Bonus Skills</h3>
                <div className="skills-tags">
                  {matchedJob.bonus_skills.map((skill, index) => (
                    <span key={index} className="skill-tag skill-tag--bonus">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Qualifications and Soft Skills */}
            {matchedJob.qualifications && (
              <div className="job-details__section mb-4">
                <h3 className="job-details__section-title">
                  Qualifications and Soft Skills
                </h3>

                {matchedJob.qualifications.education && (
                  <div className="qualification-item mb-3">
                    <h4 className="qualification-title">
                      <Icon
                        icon="tabler:school"
                        className="qualification-icon"
                      />
                      Education
                    </h4>
                    <p className="qualification-text">
                      {matchedJob.qualifications.education}
                    </p>
                  </div>
                )}

                {matchedJob.qualifications.experience && (
                  <div className="qualification-item mb-3">
                    <h4 className="qualification-title">
                      <Icon
                        icon="tabler:briefcase"
                        className="qualification-icon"
                      />
                      Experience
                    </h4>
                    <p className="qualification-text">
                      {matchedJob.qualifications.experience}
                    </p>
                  </div>
                )}

                {matchedJob.qualifications.problem_solving && (
                  <div className="qualification-item mb-3">
                    <h4 className="qualification-title">
                      <Icon icon="tabler:bulb" className="qualification-icon" />
                      Problem-Solving
                    </h4>
                    <p className="qualification-text">
                      {matchedJob.qualifications.problem_solving}
                    </p>
                  </div>
                )}

                {matchedJob.qualifications.learning_mindset && (
                  <div className="qualification-item mb-3">
                    <h4 className="qualification-title">
                      <Icon
                        icon="tabler:brain"
                        className="qualification-icon"
                      />
                      Learning Mindset
                    </h4>
                    <p className="qualification-text">
                      {matchedJob.qualifications.learning_mindset}
                    </p>
                  </div>
                )}

                {matchedJob.qualifications.communication && (
                  <div className="qualification-item mb-3">
                    <h4 className="qualification-title">
                      <Icon
                        icon="tabler:messages"
                        className="qualification-icon"
                      />
                      Communication
                    </h4>
                    <p className="qualification-text">
                      {matchedJob.qualifications.communication}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Benefits */}
            <div className="job-details__section mb-4">
              <h3 className="job-details__section-title">Benefits</h3>
              <ul className="job-details__list">
                {matchedJob.benefits?.map((benefit, index) => (
                  <li key={index} className="list-item">
                    <Icon icon="tabler:heart" className="list-icon" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg-8 order-2 mt-4 mt-lg-0">
            <ApplyForm />
          </div>

          <div className="col-lg-4">
            <div className="job-details__sidebar">
              <div className="sidebar-card mb-4">
                <div className="company-info">
                  <div className="company-icon mb-3">
                    <Icon
                      icon={matchedJob.icon || "tabler:building"}
                      width={48}
                      height={48}
                    />
                  </div>
                  <h4 className="company-name">{matchedJob.company}</h4>
                  <p className="company-location">
                    <Icon icon="tabler:map-pin" className="me-1" />
                    {matchedJob.location}
                  </p>
                  <div className="company-meta">
                    <span className="badge-custom">
                      <Icon icon="tabler:users" /> {matchedJob.available}+
                      Applicants
                    </span>
                    <span className="badge-custom">
                      <Icon icon="tabler:clock" /> {matchedJob.job_type}
                    </span>
                    <span className="badge-custom">
                      <Icon icon="tabler:building-community" />{" "}
                      {matchedJob.workplace}
                    </span>
                  </div>
                </div>
              </div>

              <div className="sidebar-card mb-4">
                <button className="apply-btn w-100 mb-3">
                  <Icon icon="tabler:send" className="me-2" />
                  Apply Now
                </button>
                <button className="save-btn w-100">
                  <Icon icon="tabler:bookmark" className="me-2" />
                  Save Job
                </button>
              </div>

              {matchedJob.categories && matchedJob.categories.length > 0 && (
                <div className="sidebar-card">
                  <h4 className="sidebar-title">Categories</h4>
                  <div className="categories-tags">
                    {matchedJob.categories.map((category, index) => (
                      <span key={index} className="category-tag">
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
