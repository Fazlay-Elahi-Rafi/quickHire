"use client";
import { Icon } from "@iconify/react";
import React from "react";

const JobFilter = ({
  searchTerm,
  setSearchTerm,
  allCategories,
  selectedCategories,
  handleCategoryChange,
  getCategoryCount,
  allExperiences,
  selectedExperiences,
  handleExperienceChange,
  getExperienceCount,
  salaryRanges,
  selectedSalaryRanges,
  handleSalaryRangeChange,
  getSalaryRangeCount,
  showClearButton,
  handleClearFilters,
}) => {
  return (
    <div className="qh-job__filter">
      {/* Search Section */}
      <div className="qh-job__filter-search mb-3">
        <h5 className="qh-job__filter-text">Filter Jobs</h5>
        <form
          className="qh-job__filter-search--form"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Search job..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Icon
            className="qh-job__filter-search--icon"
            icon="mingcute:search-line"
          />
        </form>
      </div>

      {/* Category Accordion */}
      <div className="accordion qh-job__filter-accordion mb-3">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseCategory"
              aria-expanded="true"
            >
              Category
            </button>
          </h2>
          <div
            id="collapseCategory"
            className="accordion-collapse collapse show"
          >
            <div className="accordion-body">
              <ul className="qh-job__filter-list">
                {allCategories.map((category, index) => (
                  <li key={index}>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`category-${index}`}
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`category-${index}`}
                      >
                        {category} ({getCategoryCount(category)})
                      </label>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Accordion */}
      <div className="accordion qh-job__filter-accordion mb-3">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExperience"
              aria-expanded="true"
            >
              Experience Required
            </button>
          </h2>
          <div
            id="collapseExperience"
            className="accordion-collapse collapse show"
          >
            <div className="accordion-body">
              <ul className="qh-job__filter-list">
                {allExperiences.map((experience, index) => (
                  <li key={index}>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`experience-${index}`}
                        checked={selectedExperiences.includes(experience)}
                        onChange={() => handleExperienceChange(experience)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`experience-${index}`}
                      >
                        {experience} ({getExperienceCount(experience)})
                      </label>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Salary Range Accordion */}
      <div className="accordion qh-job__filter-accordion mb-3">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSalary"
              aria-expanded="true"
            >
              Salary Range
            </button>
          </h2>
          <div id="collapseSalary" className="accordion-collapse collapse show">
            <div className="accordion-body">
              <ul className="qh-job__filter-list">
                {salaryRanges.map((range, index) => (
                  <li key={index}>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`salary-${index}`}
                        checked={selectedSalaryRanges.includes(range.label)}
                        onChange={() => handleSalaryRangeChange(range.label)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`salary-${index}`}
                      >
                        {range.label} ({getSalaryRangeCount(range.label)})
                      </label>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Clear Filters Button */}
      {showClearButton && (
        <button className="btn btn-link mt-3" onClick={handleClearFilters}>
          Clear All Filters
        </button>
      )}
    </div>
  );
};

export default JobFilter;
