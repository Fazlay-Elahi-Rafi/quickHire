import JobDetailsPage from "../index";

export const metadata = {
  title: "QuickHire - Job Board Next.js Template",
  description:
    "A modern and responsive job board template built with Next.js, designed to connect employers and job seekers seamlessly.",
};

export default function JobDetailsPageLayout({ params }) {
  return <JobDetailsPage params={params} />;
}
