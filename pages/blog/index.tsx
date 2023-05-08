import React from "react";
import Link from "next/link";
import BlogPostMetaDataSet from "../../components/BlogPosts/BlogPostMetaDataSet";

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

export const BlogPageLayout = (page) => {
  return (
    <div className="flex flex-col justify-center content-center flex-wrap">
      <main className="max-w-lg">
        <h3 className="">The Blog</h3>
        {page}
      </main>
    </div>
  );
};

BlogPage.getLayout = BlogPageLayout;

export default BlogPage;
