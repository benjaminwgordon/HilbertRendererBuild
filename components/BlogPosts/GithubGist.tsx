import React from "react";

type GithubGistProps = {
  gist_url: string;
};

const GithubGist = (props: GithubGistProps) => {
  const { gist_url } = props;
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<script src="${gist_url}"></script>`,
      }}
    ></div>
  );
};

export default GithubGist;
