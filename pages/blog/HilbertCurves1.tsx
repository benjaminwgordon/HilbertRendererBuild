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
        <div className=" w-full h-72 mb-8 flex justify-center content-center">
          <HilbertThreeRenderer
            initN={2}
            initP={4}
            initPipeThickness={0.3}
            initGeometryType={"round"}
            isControlEnabled={false}
            isSpinning={false}
          />
        </div>
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
          <ul className="list-disc pl-8 mt-2">
            <li>
              A compiled high-performance programming language (
              <Link target="https://www.rust-lang.org/" displayTarget="Rust" />)
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

        <Section>
          <h3 className="font-bold text-2xl underline mb-2">
            Background and Motivation
          </h3>
          <p>
            When I started this project, I had just finished an OBJ file
            renderer using WebGL, Rust, and WebAssembly. That project was a
            webpage that rendered a complex 40,000 vertex 3D model, and allowed
            to user to rotate that model in realtime with mouse controls. I had
            taken on that project with the intention of learning more about Rust
            and WebAssembly. After finishing, I felt much stronger on the core
            principles of Rust and WebAssembly using{" "}
            <Link
              target={"https://docs.rs/wasm-bindgen/0.2.85/wasm_bindgen/"}
              displayTarget={"Wasm-Bindgen"}
            ></Link>
            , but I felt I hadn't taken full advantage of WASM's performance or
            Rust's type system.
          </p>
        </Section>
        <Section>
          <p>
            For my next project, I set out to take full advantage of Rust and
            WebAssembly by generating geometries in real-time. The only question
            was "What geometry was both visually interesting and industrially
            useful enough to build a project around?". My answer is Hilbert
            Curves.
          </p>
        </Section>
        <Section>
          <h3 className="font-bold text-2xl underline mb-2">
            So what is a Hilbert Curve?
          </h3>
          <p></p>
        </Section>
      </article>
    </div>
  );
};

HilbertCurves1.getLayout = BlogPageLayout;

export default HilbertCurves1;
