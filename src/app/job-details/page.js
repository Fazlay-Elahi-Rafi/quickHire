"use client";

import React, { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

const JobDetailsLayout = () => {
  const path = useParams();
  const router = useRouter();
  const postId = path.jobId;

  useEffect(() => {
    if (postId === undefined) {
      router.push("/job-all");
    }
  }, []);
};

export default JobDetailsLayout;
