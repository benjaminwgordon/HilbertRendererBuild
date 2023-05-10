import Link from "../../components/Link";

export const BlogPageLayout = (page) => {
  return (
    <div className="flex flex-col justify-center content-center flex-wrap">
      <main className="max-w-xl w-full h-full ">
        <nav className="">
          <Link target={"/blog"} displayTarget={"The Blog"} />
        </nav>
        <div className="">{page}</div>
      </main>
    </div>
  );
};
