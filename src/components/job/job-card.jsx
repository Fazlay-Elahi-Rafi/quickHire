"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

import jobsData from "../../data/jobs.json";
import useJobFilter from "@/hooks/useJobFilter";
import JobFilter from "./job-filter";

import slugify from "slugify";

const JobCard = () => {
  const generateSlug = (title) => {
    return slugify(title, {
      lower: true,
      strict: true,
      remove: /[*+~.()'"!:@]/g,
    });
  };
  // Use the custom hook
  const {
    // State
    currentPage,
    searchTerm,
    setSearchTerm,
    selectedCategories,
    selectedExperiences,
    selectedSalaryRanges,

    // Data
    allCategories,
    allExperiences,
    salaryRanges,

    // Pagination
    currentItems,
    totalPages,
    pageNumbers,
    indexOfFirstItem,
    indexOfLastItem,
    filteredJobs,

    // Handlers
    handleCategoryChange,
    handleExperienceChange,
    handleSalaryRangeChange,
    handleClearFilters,
    handlePageChange,
    handlePrevPage,
    handleNextPage,

    // Helper functions
    getCategoryCount,
    getExperienceCount,
    getSalaryRangeCount,
    showClearButton,
  } = useJobFilter(jobsData);

  // Handle page change with scroll
  const onPageChange = (pageNumber) => {
    handlePageChange(pageNumber);
    window.scrollTo({
      top: document.querySelector(".qh-job")?.offsetTop - 100,
      behavior: "smooth",
    });
  };

  // Handle previous page with scroll
  const onPrevPage = () => {
    handlePrevPage();
    window.scrollTo({
      top: document.querySelector(".qh-job")?.offsetTop - 100,
      behavior: "smooth",
    });
  };

  // Handle next page with scroll
  const onNextPage = () => {
    handleNextPage();
    window.scrollTo({
      top: document.querySelector(".qh-job")?.offsetTop - 100,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="qh-job">
        <div className="container">
          <div className="row">
            <div className="col-4">
              {/* Job Filter Component */}
              <JobFilter
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                allCategories={allCategories}
                selectedCategories={selectedCategories}
                handleCategoryChange={handleCategoryChange}
                getCategoryCount={getCategoryCount}
                allExperiences={allExperiences}
                selectedExperiences={selectedExperiences}
                handleExperienceChange={handleExperienceChange}
                getExperienceCount={getExperienceCount}
                salaryRanges={salaryRanges}
                selectedSalaryRanges={selectedSalaryRanges}
                handleSalaryRangeChange={handleSalaryRangeChange}
                getSalaryRangeCount={getSalaryRangeCount}
                showClearButton={showClearButton}
                handleClearFilters={handleClearFilters}
              />
            </div>

            <div className="col-8 mx-auto">
              <div className="">
                <h3>Open Positions</h3>
              </div>

              <p className="text-muted mb-3">
                {filteredJobs.length > 0 ? (
                  <>
                    Showing {indexOfFirstItem + 1} to{" "}
                    {Math.min(indexOfLastItem, filteredJobs.length)} of{" "}
                    {filteredJobs.length} jobs
                  </>
                ) : (
                  "No jobs found"
                )}
              </p>

              {currentItems.map((job, i) => (
                <div className="qh-job__card mb-4" key={indexOfFirstItem + i}>
                  <div className="col-10">
                    <div className="qh-job__card-body">
                      <Link
                        className="qh-job__title"
                        href={`/job-details/${generateSlug(job.title)}`}
                      >
                        {job.title}
                      </Link>
                      <h6 className="qh-job__subtitle">{job.sub_title}</h6>

                      <ul className="qh-job__list">
                        <li>
                          <span className="pe-1">৳</span>
                          <span>{job.salary_range || "Negotiable"}</span>
                        </li>
                        <li>
                          <Icon icon="tabler:clock" className="pe-1 icon" />
                          <span>{job.experience_required || "1-2 years"}</span>
                        </li>
                      </ul>
                      <p className="mb-0">{job.description}</p>
                      {job.categories && (
                        <div className="mt-2">
                          {job.categories.map((cat, idx) => (
                            <span key={idx} className="badge me-1">
                              {cat}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-2 text-end">
                    <Link
                      className="apply-btn"
                      href={`/job-details/${generateSlug(job.title)}`}
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              ))}

              {currentItems.length === 0 && (
                <div className="text-center py-5">
                  <p>
                    No jobs match your filters. Try adjusting your criteria.
                  </p>
                </div>
              )}

              {totalPages > 1 && (
                <ul className="qh-job__list justify-content-center pagination">
                  <li
                    className={`pagination__arrow ${currentPage === 1 ? "pagination__disable" : "pagination__active"}`}
                    onClick={onPrevPage}
                    style={{
                      cursor: currentPage === 1 ? "not-allowed" : "pointer",
                    }}
                  >
                    <Icon icon="fa6-solid:angle-left" />
                  </li>

                  {pageNumbers.map((number) => (
                    <li
                      key={number}
                      className={`pagination__number ${currentPage === number ? "pagination__number-active" : ""}`}
                      onClick={() => onPageChange(number)}
                      style={{ cursor: "pointer" }}
                    >
                      {number}
                    </li>
                  ))}

                  <li
                    className={`pagination__arrow ${currentPage === totalPages ? "pagination__disable" : "pagination__active"}`}
                    onClick={onNextPage}
                    style={{
                      cursor:
                        currentPage === totalPages ? "not-allowed" : "pointer",
                    }}
                  >
                    <Icon icon="fa6-solid:angle-right" />
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobCard;
