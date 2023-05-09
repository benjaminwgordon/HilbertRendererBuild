import React from "react";
import BlogPostMetadataType from "./BlogPostMetaDataType";

const BlogPostMetaDataDisplay = ({
  title,
  author,
  publishDate,
}: BlogPostMetadataType) => {
  return (
    <div className="my-4">
      <h2 className="font-bold text-2xl font-poppins">{title}</h2>
      <p className="font-light text-xs italic">
        Posted on {publishDate.toLocaleString()}, by {author}
      </p>
    </div>
  );
};

export default BlogPostMetaDataDisplay;
