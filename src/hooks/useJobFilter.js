"use client";
import { useState, useEffect } from "react";

const useJobFilter = (jobsData) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredJobs, setFilteredJobs] = useState(jobsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedExperiences, setSelectedExperiences] = useState([]);
  const [selectedSalaryRanges, setSelectedSalaryRanges] = useState([]);

  const itemsPerPage = 5;

  // Extract unique categories from jobs data
  const allCategories = [
    ...new Set(jobsData.flatMap((job) => job.categories || [])),
  ];

  // Extract unique experience levels
  const allExperiences = [
    ...new Set(
      jobsData.map((job) => job.experience_required || "Not specified"),
    ),
  ];

  // Define salary ranges for filtering
  const salaryRanges = [
    { label: "Below 30,000", min: 0, max: 30000 },
    { label: "30,000 - 40,000", min: 30000, max: 40000 },
    { label: "40,000 - 50,000", min: 40000, max: 50000 },
    { label: "50,000 - 60,000", min: 50000, max: 60000 },
    { label: "Above 60,000", min: 60000, max: Infinity },
  ];

  // Filter jobs based on all criteria
  useEffect(() => {
    let filtered = jobsData;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (job) =>
          job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.company.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    // Category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(
        (job) =>
          job.categories &&
          job.categories.some((cat) => selectedCategories.includes(cat)),
      );
    }

    // Experience filter
    if (selectedExperiences.length > 0) {
      filtered = filtered.filter((job) =>
        selectedExperiences.includes(
          job.experience_required || "Not specified",
        ),
      );
    }

    // Salary range filter
    if (selectedSalaryRanges.length > 0) {
      filtered = filtered.filter((job) => {
        const salaryStr = job.salary_range || "0";
        const salaryNum = parseInt(salaryStr.replace(/[^0-9]/g, "")) || 0;

        return selectedSalaryRanges.some((range) => {
          const selectedRange = salaryRanges.find((r) => r.label === range);
          return (
            salaryNum >= selectedRange.min && salaryNum <= selectedRange.max
          );
        });
      });
    }

    setFilteredJobs(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [
    searchTerm,
    selectedCategories,
    selectedExperiences,
    selectedSalaryRanges,
    jobsData,
  ]);

  // Handle checkbox changes
  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  const handleExperienceChange = (experience) => {
    setSelectedExperiences((prev) =>
      prev.includes(experience)
        ? prev.filter((e) => e !== experience)
        : [...prev, experience],
    );
  };

  const handleSalaryRangeChange = (range) => {
    setSelectedSalaryRanges((prev) =>
      prev.includes(range) ? prev.filter((r) => r !== range) : [...prev, range],
    );
  };

  // Clear all filters
  const handleClearFilters = () => {
    setSelectedCategories([]);
    setSelectedExperiences([]);
    setSelectedSalaryRanges([]);
    setSearchTerm("");
  };

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredJobs.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);

  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle previous page
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle next page
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Count jobs per category
  const getCategoryCount = (category) => {
    return jobsData.filter(
      (job) => job.categories && job.categories.includes(category),
    ).length;
  };

  // Count jobs per experience
  const getExperienceCount = (experience) => {
    return jobsData.filter(
      (job) => (job.experience_required || "Not specified") === experience,
    ).length;
  };

  // Count jobs per salary range
  const getSalaryRangeCount = (range) => {
    const { min, max } = salaryRanges.find((r) => r.label === range);
    return jobsData.filter((job) => {
      const salaryStr = job.salary_range || "0";
      const salaryNum = parseInt(salaryStr.replace(/[^0-9]/g, "")) || 0;
      return salaryNum >= min && salaryNum <= max;
    }).length;
  };

  // Check if any filter is active
  const showClearButton =
    selectedCategories.length > 0 ||
    selectedExperiences.length > 0 ||
    selectedSalaryRanges.length > 0 ||
    searchTerm;

  return {
    // State
    currentPage, // <-- Make sure this is included
    filteredJobs,
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
  };
};

export default useJobFilter;
