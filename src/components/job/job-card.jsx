"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React, { useState } from "react";

import jobsData from "../../data/jobs.json";

const JobCard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = jobsData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(jobsData.length / itemsPerPage);

  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: document.querySelector(".qh-job")?.offsetTop - 100,
      behavior: "smooth",
    });
  };

  // Handle previous page
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({
        top: document.querySelector(".qh-job")?.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  // Handle next page
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({
        top: document.querySelector(".qh-job")?.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="qh-job">
        <div className="container">
          <div className="row">
            <div className="col-4"></div>
            <div className="col-8 mx-auto">
              <div className="">
                <h3>Open Positions</h3>
              </div>

              <p className="text-muted mb-3">
                Showing {indexOfFirstItem + 1} to{" "}
                {Math.min(indexOfLastItem, jobsData.length)} of{" "}
                {jobsData.length} jobs
              </p>

              {currentItems.map((job, i) => (
                <div className="qh-job__card mb-4" key={indexOfFirstItem + i}>
                  <div className="col-10">
                    <div className="qh-job__card-body">
                      <Link className="qh-job__title" href="#">
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
                    </div>
                  </div>
                  <div className="col-2 text-end">
                    <Link className="apply-btn" href="#">
                      Apply Now
                    </Link>
                  </div>
                </div>
              ))}

              {currentItems.length === 0 && (
                <div className="text-center py-5">
                  <p>No jobs found.</p>
                </div>
              )}

              {totalPages > 1 && (
                <ul className="qh-job__list justify-content-center pagination">
                  <li
                    className={`pagination__arrow ${currentPage === 1 ? "pagination__disable" : "pagination__active"}`}
                    onClick={handlePrevPage}
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
                      onClick={() => handlePageChange(number)}
                      style={{ cursor: "pointer" }}
                    >
                      {number}
                    </li>
                  ))}

                  <li
                    className={`pagination__arrow ${currentPage === totalPages ? "pagination__disable" : "pagination__active"}`}
                    onClick={handleNextPage}
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
