import consultation from '../assets/images/services_section/consultation.webp';
import sex_education from '../assets/images/services_section/sexeducation.jpg';
import psychotherapy from '../assets/images/services_section/psychotherapy.jpg';
import speaker from '../assets/images/services_section/speaker.jpg';
import self_satisfaction from '../assets/images/services_section/self_satisfaction.jpg';
import playing_cards from '../assets/images/services_section/game_vs_cards.jpg';
import consultationWebp from '../assets/images/services_section/consultation.webp';
import sex_educationWebp from '../assets/images/services_section/sexeducation.webp';
import psychotherapyWebp from '../assets/images/services_section/psychotherapy.webp';
import speakerWebp from '../assets/images/services_section/speaker.webp';
import self_satisfactionWebp from '../assets/images/services_section/self_satisfaction.webp';
import playing_cardsWebp from '../assets/images/services_section/game_vs_cards.webp';

const dataServices = [
  {
    name: 'Консультація',
    img: consultation,
    webpSrc: consultationWebp,
    alt_img: 'woman consults two people',
    path_to_page: 'consultation',
  },
  {
    name: 'Статеве виховання',
    img: sex_education,
    webpSrc: sex_educationWebp,
    alt_img: 'people are looking at a book',
    path_to_page: 'sex-education',
  },
  {
    name: 'Психотерапія',
    img: psychotherapy,
    webpSrc: psychotherapyWebp,
    alt_img: 'two people shaking hands for comfort',
    path_to_page: 'psychotherapy',
  },
  {
    name: 'Запрошений спікер',
    img: speaker,
    webpSrc: speakerWebp,
    alt_img: 'a smiling woman speaks',
    path_to_page: 'invited-speaker',
  },
  {
    name: 'Практикум по самозадоволенню',
    img: self_satisfaction,
    webpSrc: self_satisfactionWebp,
    alt_img: 'a woman touches her shoulder',
    path_to_page: 'self-satisfaction-workshop',
  },
  {
    name: 'Гра з картками',
    img: playing_cards,
    webpSrc: playing_cardsWebp,
    alt_img: 'colored cards with images on the table',
    path_to_page: 'playing-with-cards',
  },
];

export default dataServices;
