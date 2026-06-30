import { FC, memo } from 'react';

import { SectionId, blogSection } from '../../data/data';
import { Blog } from '../../data/dataDef';
import Section from '../Layout/Section';

const Blog: FC = memo(() => {
  const { blogs } = blogSection;

  if (!blogs.length) {
    return null;
  }

  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Blog}>
      <div className="flex flex-col gap-y-12">
        <div className="flex flex-col items-center gap-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Blog</h2>
          <p className="max-w-2xl text-center text-lg text-neutral-400">
            Check out some of my latest articles and thoughts.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <BlogCard blog={blog} key={`${blog.title}-${index}`} />
          ))}
        </div>
      </div>
    </Section>
  );
});

const BlogCard: FC<{ blog: Blog }> = memo(({ blog: { title, description, url, date, image } }) => {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-neutral-900 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-500/20">
      {image && (
        <div className="relative h-48 w-full overflow-hidden">
          <img alt={title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src={typeof image === 'string' ? image : image.src} />
        </div>
      )}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="flex flex-col gap-y-3">
          <span className="text-xs font-semibold text-orange-500">{date}</span>
          <h3 className="text-xl font-bold leading-snug text-white line-clamp-2" title={title}>{title}</h3>
          <p className="text-sm text-neutral-400 line-clamp-3">{description}</p>
        </div>
        <div className="mt-6 flex items-center">
          <a
            className="inline-flex items-center gap-x-2 rounded-full bg-orange-500 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-neutral-900"
            href={url}
            rel="noopener noreferrer"
            target="_blank">
            <span>Read on Medium</span>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
});

Blog.displayName = 'Blog';
export default Blog;
