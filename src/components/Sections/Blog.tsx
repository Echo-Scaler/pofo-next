import {EllipsisVerticalIcon} from '@heroicons/react/24/outline';
import Image, {StaticImageData} from 'next/image';
import {FC, memo, useCallback, useState} from 'react';

import {blogSection, SectionId} from '../../data/data';
import {Blog as BlogType} from '../../data/dataDef';
import ImageModal from '../ImageModal';
import Section from '../Layout/Section';

const Blog: FC = memo(() => {
  const {blogs} = blogSection;
  const [modalData, setModalData] = useState<{src: string | StaticImageData; alt: string} | null>(null);

  const handleOpenModal = useCallback((src: string | StaticImageData, alt: string) => {
    setModalData({src, alt});
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalData(null);
  }, []);

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
            <BlogCard blog={blog} key={`${blog.title}-${index}`} onImageClick={handleOpenModal} />
          ))}
        </div>
      </div>
      <ImageModal
        altText={modalData?.alt}
        imageSrc={modalData?.src || null}
        isOpen={!!modalData}
        onClose={handleCloseModal}
      />
    </Section>
  );
});

const BlogCard: FC<{blog: BlogType; onImageClick?: (src: string | StaticImageData, alt: string) => void}> = memo(
  ({blog: {title, description, url, date, image, tags}, onImageClick}) => {
    return (
      <div className="flex h-full flex-col overflow-hidden rounded-[2px] border border-neutral-200/60 bg-white shadow-sm transition-shadow hover:shadow-md">
        {/* Top Image Area */}
        <div
          className="relative h-56 w-full cursor-pointer overflow-visible"
          onClick={() => image && onImageClick?.(image, title)}>
          {image && <Image alt={title} className="h-full w-full object-cover" fill placeholder="blur" src={image} />}
          {/* FAB Button */}
          <a
            className="absolute -bottom-6 right-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#26a69a] text-white shadow-md transition-colors hover:bg-teal-600"
            href={url}
            onClick={e => e.stopPropagation()}
            rel="noopener noreferrer"
            target="_blank"
            title="Read on Medium">
            <EllipsisVerticalIcon className="h-6 w-6" />
          </a>
        </div>

        {/* Content Area */}
        <div className="flex flex-1 flex-col p-6 pt-10">
          <h3 className="mb-3 text-2xl font-light text-gray-800 line-clamp-2" title={title}>
            {title}
          </h3>
          <p className="mb-6 text-sm font-light leading-relaxed text-gray-500 line-clamp-3">{description}</p>

          {/* Footer Area */}
          <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
            <div className="flex flex-wrap gap-2">
              {tags?.map(tag => (
                <span
                  className="bg-[#f44336] px-2 py-0.5 text-[10px] font-medium uppercase text-white rounded-sm"
                  key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <span className="text-xs font-medium text-gray-400">{date}</span>
          </div>
        </div>
      </div>
    );
  },
);

Blog.displayName = 'Blog';
export default Blog;
