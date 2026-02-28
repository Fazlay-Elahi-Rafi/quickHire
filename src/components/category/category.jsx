import React from "react";
import Link from "next/link";

import { Icon } from "@iconify/react";

import jobData from "../../data/jobs.json";

const Category = () => {
  return (
    <>
      <div className="category">
        <div className="container px-sm-0">
          <div className="row">
            <div className="col-12 d-flex align-items-end justify-content-between flex-wrap">
              <h2 className="qh-heading fs-48">
                Explore by <span className="text-info">category</span>
              </h2>
              <Link href="/all-jobs" className="qh-link d-none d-sm-block">
                Show all jobs{" "}
                <Icon className="qh__link-icon" icon="formkit:arrowright" />
              </Link>
            </div>
            <div className="category__wrap">
              {jobData.slice(0, 8).map((job, i) => (
                <div className="category__box" key={i}>
                  <Icon className="category__icon" icon={job.icon} />
                  <div className="">
                    <h5 className="category__name fs-24">{job.tag}</h5>
                    <a href="#" className="category__link">
                      {job.available} jobs available{" "}
                      <Icon
                        className="category__link-icon"
                        icon="formkit:arrowright"
                      />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/all-jobs" className="qh-link d-sm-none">
              Show all jobs{" "}
              <Icon className="qh__link-icon" icon="formkit:arrowright" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
