import { ArticleWithSlug, getAllArticles } from "@/lib/article";
import Link from "next/link";
import { formatDate } from "@/lib/formateDate";

const LatestArticles = async () => {
  const allArticles = await getAllArticles();
  const latestArticles = allArticles.slice(0, 3);

  return (
    <section className="py-12 bg-gray-light dark:bg-bg-color-dark">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Latest Updates
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Stay up to date with our latest news, events, and achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestArticles.map((article) => (
            <div 
              key={article.slug} 
              className="bg-white dark:bg-dark rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {article.image && (
                <div className="w-full h-64 relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              )}
              <div className="p-5">
                <div className="text-sm text-primary mb-2">
                  {formatDate(article.date)}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {article.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    By {article.author}
                  </span>
                  
                  <Link 
                    href={`/articles/${article.slug}`}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                  >
                    Read more
                    <svg 
                      className="w-4 h-4 ml-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7" 
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link 
            href="/articles" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/80 transition-colors duration-300"
          >
            View All Updates
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestArticles; 