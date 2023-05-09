import BlogPostMetaData from "../../components/BlogPosts/BlogPostMetaDataDisplay";
import BlogPostMetaDataSet from "../../components/BlogPosts/BlogPostMetaDataSet";
import BlogPostMetaDataType from "../../components/BlogPosts/BlogPostMetaDataType";
import Section from "../../components/BlogPosts/Section";
import HilbertThreeRenderer from "../../components/HilbertThreeRenderer";
import Link from "../../components/Link";
import { BlogPageLayout } from "./BlogPageLayout";

const HilbertCurves1Metadata: BlogPostMetaDataType = BlogPostMetaDataSet[0];

const HilbertCurves1 = () => {
  return (
    <div className="m-2">
      <BlogPostMetaData
        id={HilbertCurves1Metadata.id}
        slug={HilbertCurves1Metadata.slug}
        title={HilbertCurves1Metadata.title}
        author={HilbertCurves1Metadata.author}
        publishDate={HilbertCurves1Metadata.publishDate}
      />
      <article className="">
        <Section>
          <p>
            I recently{" "}
            <Link
              target="https://www.recurse.com/about"
              displayTarget="never graduated"
            />{" "}
            from the Recurse Center, a self-directed, community-driven
            educational retreat for programmers in New York City. The Recurse
            Center promotes a self-directed approach to learning, where there
            are no teachers or curriculum, rather, each student works on what
            interests them most, with the support of a community of other highly
            motivated students.
          </p>
        </Section>

        <Section>
          <p>
            During my time at the Recurse Center (which I'll now refer to as
            "RC"), I committed to self-study a list of technologies, languages,
            and concepts:
          </p>
          <ul className="list-disc pl-8">
            <li>
              A compiled high-performance programming language (I decided on{" "}
              <Link target="https://www.rust-lang.org/" displayTarget="Rust" />{" "}
              )
            </li>
            <li>
              Low-level computer hardware through the{" "}
              <Link
                target="https://www.nand2tetris.org/"
                displayTarget="Nand2Tetris"
              />{" "}
              course
            </li>
            <li>
              Gaining a preliminary understanding of Distributed Systems from
              Martin Kleppman's{" "}
              <Link
                target="https://martin.kleppmann.com/"
                displayTarget="Designing Data Intensive Applications"
              />
            </li>
            <li>
              Learning more about 3D graphics through rasterization and
              rendering techniques
            </li>
          </ul>
        </Section>

        <Section>
          In this blog post, I'm going to focus primarily on Rust and 3D
          Graphics, and the unexpected journey I undertook through the land of
          Rust, Web Assembly, ThreeJS, and exploring fun algorithms for
          generating space-filling curves.
        </Section>

        <div className=" w-full h-72 flex justify-center content-center">
          <HilbertThreeRenderer
            initN={2}
            initP={1}
            initPipeThickness={0.3}
            initGeometryType={"square"}
            isControlEnabled={false}
          />
        </div>

        <Section></Section>
      </article>
    </div>
  );
};

HilbertCurves1.getLayout = BlogPageLayout;

export default HilbertCurves1;
