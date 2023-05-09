import React from "react";
import Link from "next/link";
import BlogPostMetaDataSet from "../../components/BlogPosts/BlogPostMetaDataSet";
import { BlogPageLayout } from "./BlogPageLayout";

const BlogPage = () => {
  const AllBlogPostMetaData = BlogPostMetaDataSet;

  return (
    <ul>
      {AllBlogPostMetaData.map((postMetaData) => (
        <li key={postMetaData.id} className="text-blue-300">
          <Link href={`/blog/${encodeURIComponent(postMetaData.slug)}`}>
            {postMetaData.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

BlogPage.getLayout = BlogPageLayout;

export default BlogPage;
