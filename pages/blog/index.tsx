import React from "react";
import BlogPostLayout from "../../components/BlogPostLayout";
import HilbertCurves1 from "./HilbertCurves1";
import Link from "next/link";
import { useRouter } from "next/router";
import BlogPostMetaDataSet from "../../components/BlogPosts/BlogPostMetaDataSet";

const index = () => {
  const AllBlogPostMetaData = BlogPostMetaDataSet;

  return (
    <ul>
      {AllBlogPostMetaData.map((postMetaData) => (
        <li key={postMetaData.id}>
          <Link href={`/blog/${encodeURIComponent(postMetaData.slug)}`}>
            {postMetaData.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default index;
