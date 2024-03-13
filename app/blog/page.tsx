import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";
// import Posts from "@/components/Posts";
import { Metadata } from "next";
import Link from "next/link";
import { Post } from "@/lib/interface";
import { client } from "@/lib/sanity";

async function getData() {
  const query = `*[_type == "post"]`;

  const data = await client.fetch(query);

  return data;
}

export const metadata: Metadata = {
  title: "Blog Page | STEMpathy DNHS",
  description: "This is Blog Page for STEMpathy DNHS",
  // other metadata
};

export default async function Blog() {
  const data = (await getData()) as Post[];
  // const postMetadata = getPostMetadata();
  // const postPreviews = postMetadata.map((post) => (
  //   <PostPreview key={post.slug} {...post} />
  // ));
  return (
    <>
      <Breadcrumb
        pageName="Blogs"
        description="Here is a list of blogs of previous things we have done"
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
          </div>
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
  <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 mt-4">
    All Posts
  </h1>
</div>

<ul>
  {data.map((post) => (
    <li key={post._id} className="py-4">
      <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
        <div>
          <p className="text-base font-medium leading-6 text-teal-500 mb-2">
            {new Date(post._createdAt).toISOString().split("T")[0]}
          </p>
        </div>

        <Link
          href={`/post/${post.slug.current}`}
          prefetch
          className="space-y-3 xl:col-span-3"
        >
          <div>
            <h3 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100 mb-2">
              {post.title}
            </h3>
          </div>

          <p className="prose max-w-none text-gray-500 dark:text-gray-400 line-clamp-2">
            {post.overview}
          </p>
        </Link>
      </article>
    </li>
  ))}
</ul>
    </div>

          <div
            className="wow fadeInUp -mx-4 flex flex-wrap"
            data-wow-delay=".15s"
          >
          </div>
        </div>
      </section>
    </>
  );
};

