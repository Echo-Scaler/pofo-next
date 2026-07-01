import Image, {StaticImageData} from 'next/image';
import {FC, memo, useEffect} from 'react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string | StaticImageData | null;
  altText?: string;
}

const ImageModal: FC<ImageModalProps> = memo(({isOpen, onClose, imageSrc, altText}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !imageSrc) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm transition-opacity duration-300"
      onClick={onClose}>
      <div className="relative max-h-full max-w-5xl w-full" onClick={e => e.stopPropagation()}>
        <button
          aria-label="Close modal"
          className="absolute -top-12 right-0 text-white hover:text-orange-500 focus:outline-none transition-colors duration-200"
          onClick={onClose}>
          <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
          </svg>
        </button>
        <div className="relative h-[85vh] w-full overflow-hidden rounded-lg">
          <Image
            alt={altText || 'Image view'}
            className="object-contain"
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            src={imageSrc}
          />
        </div>
      </div>
    </div>
  );
});

ImageModal.displayName = 'ImageModal';
export default ImageModal;
