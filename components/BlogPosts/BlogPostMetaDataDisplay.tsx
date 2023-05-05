import React from "react";
import BlogPostMetadataType from "./BlogPostMetaDataType";

const BlogPostMetaDataDisplay = ({
  title,
  author,
  publishDate,
}: BlogPostMetadataType) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>
        Posted on {publishDate.toLocaleString()}, by {author}
      </p>
    </div>
  );
};

export default BlogPostMetaDataDisplay;
