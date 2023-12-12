import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";
// import Posts from "@/components/Posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page | STEMpathy DNHS",
  description: "This is Blog Page for STEMpathy DNHS",
  // other metadata
};

const Blog = () => {
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

export default Blog;
