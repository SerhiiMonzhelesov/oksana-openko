import { useEffect, useRef, useState } from 'react';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import dataAllFeedback from 'data/dataFeddback';
import { StyledSliderAboutSubtitle } from './Slider.styled';
import { StyledWrapperGallery } from './SliderSimple.styled';

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
            >
              <img
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
              />
            </a>
          ))}
        </div>
        <div className="wrapper-bullets-nav" ref={bulletsRef}>
          {dataSlider.map((_, index) => {
            return (
              <button
                key={index}
                onClick={() => handlerSelectedImage(index)}
                className={index === activeIndex ? 'active' : ''}
              ></button>
            );
          })}
        </div>
      </StyledWrapperGallery>
    </>
  );
}
