import { Card } from "@/components/Card";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { ArticleWithSlug, getAllArticles } from "@/lib/article";
import { formatDate } from "@/lib/formateDate";
import React from "react";

const Article = ({ article }: { article: ArticleWithSlug }) => {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block mr-20"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  );
};

const AriclePage = async () => {
  const articles = await getAllArticles();
  return (
    <>
      <Breadcrumb
        pageName="Blogs"
        description="Here is a list of blogs of previous things we have done"
      />
      <section className="pb-[120px] pt-[20px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              <div className="space-y-2 pt-6 pb-8 md:space-y-5">
                <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 mt-4">
                  All Posts
                </h1>
              </div>
              <div className="md:pl-6 pt-6">
                <div className="flex max-w-3xl flex-col space-y-16">
                  {articles.map((article) => (
                    <Article key={article.slug} article={article} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AriclePage;
