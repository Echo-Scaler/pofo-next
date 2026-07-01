import classNames from 'classnames';
import Image, {StaticImageData} from 'next/image';
import {FC, memo, MouseEvent, useCallback, useEffect, useRef, useState} from 'react';

import {isMobile} from '../../config';
import {useLanguage} from '../../context/LanguageContext';
import {SectionId, useData} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import ImageModal from '../ImageModal';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  const {portfolioItems} = useData();
  const {language} = useLanguage();
  const [modalData, setModalData] = useState<{src: string | StaticImageData; alt: string} | null>(null);

  const handleCloseModal = useCallback(() => {
    setModalData(null);
  }, []);

  return (
    <Section className="bg-neutral-900" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-12">
        <div className="flex flex-col items-center gap-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {language === 'ja' ? '開発実績' : 'Recent Projects'}
          </h2>
          <p className="max-w-2xl text-center text-lg text-neutral-400">
            {language === 'ja'
              ? 'これまでに手がけたプロジェクトの一部です。ホバーまたはクリックで詳細をご確認いただけます。'
              : 'Here are a few of my recent projects. Hover over them to see the details.'}
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {portfolioItems.slice(0, 5).map((item, index) => {
            const {title, image} = item;
            return (
              <div
                className={classNames(
                  'group relative w-full overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20',
                  index === 0 || index === 1
                    ? 'col-span-1 sm:col-span-1 lg:col-span-3 h-80 lg:h-96'
                    : index === 4
                      ? 'col-span-1 sm:col-span-2 lg:col-span-2 h-64 lg:h-80'
                      : 'col-span-1 sm:col-span-1 lg:col-span-2 h-64 lg:h-80',
                  'cursor-pointer',
                )}
                key={`${title}-${index}`}
                onClick={() => setModalData({src: image, alt: title})}>
                <Image
                  alt={title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  placeholder="blur"
                  src={image}
                />
                <ItemOverlay item={item} />
              </div>
            );
          })}
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

Portfolio.displayName = 'Portfolio';
export default Portfolio;

const ItemOverlay: FC<{item: PortfolioItem}> = memo(({item: {title, description}}) => {
  const [mobile, setMobile] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const linkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Avoid hydration styling errors by setting mobile in useEffect
    if (isMobile) {
      setMobile(true);
    }
  }, []);
  useDetectOutsideClick(linkRef, () => setShowOverlay(false));

  const handleItemClick = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (mobile && !showOverlay) {
        event.preventDefault();
        event.stopPropagation();
        setShowOverlay(!showOverlay);
      }
    },
    [mobile, showOverlay],
  );

  return (
    <div
      className={classNames(
        'absolute inset-0 flex h-full w-full flex-col justify-end bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 transition-all duration-300 backdrop-blur-[2px]',
        {'opacity-0 hover:opacity-100': !mobile},
        showOverlay ? 'opacity-100' : 'opacity-0',
      )}
      onClick={handleItemClick}
      ref={linkRef}>
      <div className="flex transform flex-col gap-y-2 transition-transform duration-300 group-hover:translate-y-0 sm:translate-y-4">
        <h3 className="text-xl font-bold tracking-wide text-white">{title}</h3>
        <p className="line-clamp-3 text-sm text-neutral-300">{description}</p>
      </div>
    </div>
  );
});
