import dataAllFeedback from 'data/dataFeddback';
import { useEffect } from 'react';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import styled from 'styled-components';

export default function SliderSimple({ name }) {
  const dataFeedback = dataAllFeedback.find(
    item => name[item.path_page] === true
  );
  const { dataSlider } = dataFeedback;
  useEffect(() => {
    const lightbox = new SimpleLightbox('.gallery a', {
      /* Опції бібліотеки можна додати тут */
    });

    return () => {
      lightbox.destroy(); // Знищення lightbox при виході з компонента
    };
  }, []); // Запускаємо цей ефект тільки після першого рендеру

  return (
    <Wrapper>
      <div className="gallery">
        {dataSlider.map((img, index) => (
          <a href={img.src} key={index}>
            <img
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
            />
          </a>
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .gallery {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
    max-width: 1120px;
    gap: 24px;
    overflow-x: auto;
    padding-bottom: 10px;
    &::-webkit-scrollbar {
      width: 5px; /* Ширина полосы прокрутки */
      height: 5px;
    }

    &::-webkit-scrollbar-thumb {
      width: 5px;
      background-color: var(--bg-brown); /* Цвет ползунка */
      border-radius: 5px; /* Скругление углов ползунка */
    }
  }
`;
