import { type MDXComponents } from "mdx/types";
import Image, { type ImageProps } from "next/image";

export function useMDXComponents(components: MDXComponents) {
  return {
    ...components,
    img: ({ src, alt, ...props }: any) => (
      <Image
        src={src}
        alt={alt}
        width={800}
        height={600}
        className="rounded-3xl mx-auto my-8"
        {...props}
      />
    ),
    Image: (props: ImageProps) => (
      <Image
        {...props}
        className="rounded-3xl mx-auto my-8"
      />
    ),
    h1: ({ children, ...props }: any) => (
      <h1 className="text-4xl font-bold tracking-tight text-black dark:text-zinc-100 mt-8 mb-4" {...props}>
        {children}
      </h1>
    ),
    h2: ({ children, ...props }: any) => (
      <h2 className="text-2xl font-semibold text-black dark:text-zinc-100 mt-8 mb-4" {...props}>
        {children}
      </h2>
    ),
    h3: ({ children, ...props }: any) => (
      <h3 className="text-xl font-semibold text-black dark:text-zinc-100 mt-6 mb-3" {...props}>
        {children}
      </h3>
    ),
    p: ({ children, ...props }: any) => (
      <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400 mb-4" {...props}>
        {children}
      </p>
    ),
    ul: ({ children, ...props }: any) => (
      <ul className="list-disc pl-6 mb-4 space-y-2" {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }: any) => (
      <ol className="list-decimal pl-6 mb-4 space-y-2" {...props}>
        {children}
      </ol>
    ),
    li: ({ children, ...props }: any) => (
      <li className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400" {...props}>
        {children}
      </li>
    ),
    strong: ({ children, ...props }: any) => (
      <strong className="font-semibold text-zinc-900 dark:text-zinc-200" {...props}>
        {children}
      </strong>
    ),
  };
}
