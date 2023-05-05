import BlogPostMetaDataType from "./BlogPostMetaDataType";
import BlogPostMetaData from "./BlogPostMetaDataDisplay";
import BlogPostMetaDataSet from "./BlogPostMetaDataSet";

const HilbertCurves1Metadata: BlogPostMetaDataType = BlogPostMetaDataSet[0];

const HilbertCurves1 = () => {
  return (
    <div>
      <BlogPostMetaData
        id={HilbertCurves1Metadata.id}
        slug={HilbertCurves1Metadata.slug}
        title={HilbertCurves1Metadata.title}
        author={HilbertCurves1Metadata.author}
        publishDate={HilbertCurves1Metadata.publishDate}
      />
      <p>
        I recently <a href="https://www.recurse.com/about">"never graduated"</a>{" "}
        from the Recurse Center, a self-directed, community-driven educational
        retreat for programmers in New York City. The Recurse Center promotes a
        self-directed approach to learning, where there are no teachers or
        curriculum, rather, each student works on what interests them most, with
        the support of a community of other highly motivated students.
      </p>
      <p>
        During my time at the Recurse Center (which I'll now refer to as "RC"),
        I committed to self-study a list of technologies, languages, and
        concepts:
      </p>
      <ul>
        <li>
          A compiled high-performance programming language (I decided on{" "}
          <a href="https://www.rust-lang.org/">Rust</a> )
        </li>
        <li>
          Low-level computer hardware through the{" "}
          <a href="https://www.nand2tetris.org/">Nand2Tetris</a> course
        </li>
        <li>
          Gaining a preliminary understanding of Distributed Systems from Martin
          Kleppman's{" "}
          <a href="https://martin.kleppmann.com/">
            Designing Data Intensive Applications
          </a>
        </li>
        <li>
          Learning more about 3D graphics through rasterization and rendering
          techniques
        </li>
      </ul>
      <p>
        In this blog post, I'm going to focus primarily on Rust and 3D Graphics,
        and the unexpected journey I undertook through the land of Rust, Web
        Assembly, ThreeJS, and exploring fun algorithms for generating
        space-filling curves.
      </p>
    </div>
  );
};

export default HilbertCurves1;
