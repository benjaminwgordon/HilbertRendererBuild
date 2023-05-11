import React from "react";
import BlogPostMetaDataType from "../../components/BlogPosts/BlogPostMetaDataType";
import BlogPostMetaDataSet from "../../components/BlogPosts/BlogPostMetaDataSet";
import Section from "../../components/BlogPosts/Section";
import { BlogPageLayout } from "./BlogPageLayout";
import BlogPostMetaDataDisplay from "../../components/BlogPosts/BlogPostMetaDataDisplay";
import HilbertThreeRenderer from "../../components/HilbertThreeRenderer";
import Link from "../../components/Link";
import NextLink from "next/link";
import DarkCodeBlock from "../../components/BlogPosts/DarkCodeBlock";
import {
  CodeBlock,
  dracula,
  irBlack,
  obsidian,
  paraisoDark,
} from "react-code-blocks";

const HilbertCurves4 = () => {
  const HilbertCurves1Metadata: BlogPostMetaDataType = BlogPostMetaDataSet[3];
  const { id, slug, title, author, publishDate } = HilbertCurves1Metadata;

  return (
    <div className="m-2">
      <article className="">
        <BlogPostMetaDataDisplay
          id={id}
          slug={slug}
          title={title}
          author={author}
          publishDate={publishDate}
        />

        <Section>
          <p className="mb-8">
            This is part 4 of a series on Hilbert Curves. To start from the
            beginning, please visit{" "}
            <Link
              target={"/blog/HilbertCurves1"}
              displayTarget={BlogPostMetaDataSet[0].title}
            />
          </p>
          <p className="mb-8">
            Fair warning, this is the part where we dig into the algorithm
            behind my implementation of Hilbert Curve generation. If you landed
            on this blog to see cool 3D generative geometry and you don't want
            to see any math, then{" "}
            <Link
              target={"/blog/HilbertCurves3"}
              displayTarget={"Hilbert Curve Sandbox"}
            />{" "}
            is the last new render to see.
          </p>
          <p className="mb-8">
            If you are interested in how I render these Hilbert Curves using
            WebGL and ThreeJS, you are also welcome to skip to the next post in
            the series where I walk through that process:{" "}
            <Link
              target={"/blog/HilbertCurves5"}
              displayTarget={BlogPostMetaDataSet[4].title}
            />
          </p>
          <p className="mb-8">
            If you are here to see the algorithm, then welcome! I'll be
            providing code examples in Rust.
          </p>
          <section className="mb-8 p-4 rounded-md bg-gray-200">
            <h4 className="underline mb-4 font-semibold">
              {" "}
              A note on my implementation:
            </h4>
            <p>
              {" "}
              The Skilling Transform requires precise bit manipulation, but I
              expect that most of us (including me), aren't using bitwise
              operators regularly in our day jobs. Anywhere where bit
              manipulation of unsigned integers would have been optimal, I have
              chosen to instead represent the numbers as arrays of booleans.
              While the resulting code will be substantially slower to execute,
              I hope this will make the code signifigantly more accessible.
            </p>
          </section>
        </Section>
        <Section>
          <h3 className="font-bold text-2xl underline mb-2">
            Recursive Generation of Hilbert Curve Coordinates
          </h3>
          <p className="mb-8 ">
            Hilbert Curves were first described in 1891, as a close relative to
            the previously existing Peano curve. Since Hilbert Curves are
            fractal, the common way to generate them involves recursion. In
            fact, the algorithm I briefly described in Part 1 of this series is
            a recursive algorithm. Since the recursive algorithm is the most
            readily accessible one in most other online sources, I won't spend
            any further time discussing it here. I only mention it as context
            for the algorithm I will be describing, whose main differentiating
            factor is that it is iterative, not recursive.
          </p>
        </Section>
        <Section>
          <h3 className="font-bold text-2xl underline mb-2">
            Hilbert Curves as a Transformation of Binary Reflected Gray Codes
          </h3>
          <p className="mb-8 ">
            The algorithm I set out to recreate was proposed by John Skilling in
            2003. It fundementally relies on Binary Reflected Gray Codes, which
            are fascinating and widely useful patterns. Essentially, they are an
            alternate counting system in Binary, that hold an important
            property: only one bit of the binary representation changes between
            any adjacent numbers. Below, I've posted a Rust Iterator I've
            written that generates Binary Reflected Gray Codes. (I know I said I
            wouldn't use bitwise operators in my code examples, but the
            generation of BRGC's isn't the core of this blog post.)
          </p>
          <DarkCodeBlock
            text={`#[derive(Debug)]
pub struct Brgc {
    // callers will typically create the iterator with index = 0
    pub index: u32,
}

impl Iterator for Brgc {
    type Item = u32;

    fn next(&mut self) -> Option<Self::Item> {
        let gray = self.index ^ (self.index >> 1);
        self.index += 1;
        Some(gray)
    }
}`}
            language={"rust"}
          />
          <p className="mb-8 ">
            Implenting BRGC's as an iterator is particularly useful for my
            purposes, because the amount of BRGC's necessary for generating a
            particular Hilbert Curve varies depending on the dimensions and
            order of the Hilbert Curve.
          </p>
          <p className="mb-8 ">
            Here is an example of the iterator being used to print the first 16
            BRGC codes:
          </p>
          <DarkCodeBlock
            text={`fn main() {
    let brgc = Brgc { index: 0 };
    brgc.take(8).for_each(|code| {
        println!("{:03b}", code);
    })
}

  // Results in the first 16 BRGC codes:
  000
  001
  011
  010
  110
  111
  101
  100
  `}
            language={"rust"}
          />
          <p className="mb-8 ">
            Note that in the above example, each binary number in the BRGC
            sequence differs by only one bit. This shares a strong similarity
            with one of the core attributes of a Hilbert Curve! In a Hilbert
            Curve, the vector between any two adjacent vertices will have length
            1, and will only differ in x, y, or z (exclusively). To state that
            more plainly, the lines in a Hilbert Curve are all horizontal or
            vertical, there are no diagonal lines. Starting with a BRGC as the
            basis for our algorithm gives us a head-start on creating that
            behavior in our resulting Hilbert Curves.
          </p>
          <p className="mb-8 ">
            This will become more clear once we work through another core
            principle of this algorithm: assigning bits of the gray codes to
            axes in a vector. Each of the 3 bits in each gray code can be
            assigned to an axis
          </p>
          <p className="mb-8 ">
            For example, using the bit string 110 we can map the digits to 3
            axes:{" "}
          </p>
          <table className="text-xl mb-8">
            <th></th>
            <tr className="border">
              <td className="border p-1 px-2">x</td>
              <td className="border p-1 px-2">y</td>
              <td className="border p-1 px-2">z</td>
            </tr>
            <tr className="border">
              <td className="border p-1 px-2">1</td>
              <td className="border p-1 px-2">1</td>
              <td className="border p-1 px-2">0</td>
            </tr>
          </table>
          <p className="mb-8 ">
            When the bit string is longer, we can assign digits by rotation, for
            example 011010:{" "}
          </p>
          <table className="text-xl mb-8 text-center">
            <th></th>
            <tr className="border">
              <td className="border p-1 px-4">x</td>
              <td className="border p-1 px-4">y</td>
              <td className="border p-1 px-4">z</td>
              <td className="border p-1 px-4">x</td>
              <td className="border p-1 px-4">y</td>
              <td className="border p-1 px-4">z</td>
            </tr>
            <tr className="border">
              <td className="border p-1 px-4">0</td>
              <td className="border p-1 px-4">1</td>
              <td className="border p-1 px-4">1</td>
              <td className="border p-1 px-4">0</td>
              <td className="border p-1 px-4">1</td>
              <td className="border p-1 px-4">0</td>
            </tr>
          </table>
          <p className="mb-8 ">
            Then, we can combine the x, y, and z bits respectively:
          </p>
          <table className="text-xl mb-8 text-center">
            <th></th>
            <tr className="border">
              <td className="border p-1 px-4">x</td>
              <td className="border p-1 px-4">y</td>
              <td className="border p-1 px-4">z</td>
            </tr>
            <tr className="border">
              <td className="border p-1 px-4">00</td>
              <td className="border p-1 px-4">11</td>
              <td className="border p-1 px-4">10</td>
            </tr>
          </table>
          <p className="mb-8 ">
            Converting these from binary into decimal integers results in the x,
            y, and z components of a 3D Vector, which can be used as a position
            for this vertex.
          </p>
          <table className="text-xl mb-8 text-center">
            <th></th>
            <tr className="border">
              <td className="border p-1 px-4">x</td>
              <td className="border p-1 px-4">y</td>
              <td className="border p-1 px-4">z</td>
            </tr>
            <tr className="border">
              <td className="border p-1 px-4">0</td>
              <td className="border p-1 px-4">3</td>
              <td className="border p-1 px-4">2</td>
            </tr>
          </table>
        </Section>
        <p className="mb-8"></p>

        <div className="flex flex-row">
          <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 text-xl rounded-md self-end">
            <NextLink href={"/blog/HilbertCurves2"}>Next Post</NextLink>
          </button>
        </div>
      </article>
    </div>
  );
};

HilbertCurves4.getLayout = BlogPageLayout;

export default HilbertCurves4;
