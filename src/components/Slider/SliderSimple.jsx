import dataAllFeedback from 'data/dataFeddback';
import { useEffect, useRef, useState } from 'react';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import styled from 'styled-components';
import { StyledSliderAboutSubtitle } from './Slider.styled';

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
      <Wrapper name={name}>
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
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  .gallery {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
    max-width: 1120px;
    gap: 24px;
    overflow-x: scroll;
    padding-bottom: 10px;

    &::-webkit-scrollbar {
      width: 5px; /* Ширина полосы прокрутки */
      height: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--bg-brown); /* Цвет ползунка */
      border-radius: 5px; /* Скругление углов ползунка */
    }
  }

  .wrapper-bullets-nav {
    display: flex;
    justify-content: center;
    gap: 8px;
    padding-top: 20px;
  }

  button {
    width: 15px;
    height: 15px;
    border-radius: 10px;
    border: 0.5px solid grey;
  }

  .active {
    background-color: #7b6bda;
  }
  img {
    padding: ${props => (props.name.home ? '0' : '16px 12px')};
    border: ${props =>
      props.name.home ? 'none' : '1px solid var(--bg-primery)'};
  }
  @media screen and (min-width: 768px) {
    margin-bottom: ${props => (props.name.home ? '0' : '188px')};
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: ${props => props.name.cards && '152px'};
  }
`;
