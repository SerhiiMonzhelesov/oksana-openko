import { useEffect, useRef, useState } from 'react';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import dataAllFeedback from 'data/dataFeddback';
import {
  StyledSliderAboutSubtitle,
  StyledWrapperGallery,
} from './SliderSimple.styled';

export default function SliderSimple({ title, name }) {
  const galleryRef = useRef(null);
  const bulletsRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const dataFeedback = dataAllFeedback.find(
    item => name[item.path_page] === true
  );
  const { dataSlider } = dataFeedback;

  useEffect(() => {
    const lightbox = new SimpleLightbox('.gallery a', {});
    const gallery = galleryRef.current;

    const handleWheelScroll = e => {
      e.preventDefault();
      gallery.scrollLeft += e.deltaY;
    };

    if (gallery) {
      gallery.addEventListener('wheel', handleWheelScroll);
    }

    return () => {
      lightbox.destroy();
      gallery.removeEventListener('wheel', handleWheelScroll);
    };
  }, []);

  const handlerSelectedImage = index => {
    setActiveIndex(index);
    const selectedImage = galleryRef.current.querySelectorAll('a > img')[index];

    selectedImage.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  };

  return (
    <>
      <StyledSliderAboutSubtitle>{title}</StyledSliderAboutSubtitle>
      <StyledWrapperGallery name={name}>
        <div className="gallery" ref={galleryRef}>
          {dataSlider.map((img, index) => (
            <a
              href={img.src}
              key={index}
              onClick={() => handlerSelectedImage(index)}
              aria-label="go to view a larger image"
            >
              <picture>
                <source srcset={img.webpSrc} type="image/webp" />
                <img
                  data-src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  className="lazyload blur-up"
                />
              </picture>
            </a>
          ))}
        </div>
        <div className="wrapper-bullets-nav" ref={bulletsRef}>
          {dataSlider.map((_, index) => {
            return (
              <span
                key={index}
                onClick={() => handlerSelectedImage(index)}
                className={index === activeIndex ? 'active' : ''}
                aria-label="show the corresponding image in the gallery"
              ></span>
            );
          })}
        </div>
      </StyledWrapperGallery>
    </>
  );
}
