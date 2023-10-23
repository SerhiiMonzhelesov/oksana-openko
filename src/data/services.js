import consultation from '../assets/images/services_section/consultation.jpg';
import sex_education from '../assets/images/services_section/sexeducation.jpg';
import psychotherapy from '../assets/images/services_section/psychotherapy.jpg';
import speaker from '../assets/images/services_section/speaker.jpg';
import self_satisfaction from '../assets/images/services_section/self_satisfaction.jpg';
import playing_cards from '../assets/images/services_section/game_vs_cards.jpg';

const dataServices = [
  {
    name: 'Консультація',
    img: consultation,
    alt_img: 'woman consults two people',
    path_to_page: 'consultation',
  },
  {
    name: 'Статеве виховання',
    img: sex_education,
    alt_img: 'people are looking at a book',
    path_to_page: 'sex-education',
  },
  {
    name: 'Психотерапія',
    img: psychotherapy,
    alt_img: 'two people shaking hands for comfort',
    path_to_page: 'psychotherapy',
  },
  {
    name: 'Запрошений спікер',
    img: speaker,
    alt_img: 'a smiling woman speaks',
    path_to_page: 'invited-speaker',
  },
  {
    name: 'Практикум по самозадоволенню',
    img: self_satisfaction,
    alt_img: 'a woman touches her shoulder',
    path_to_page: 'self-satisfaction-workshop',
  },
  {
    name: 'Гра з картками',
    img: playing_cards,
    alt_img: 'colored cards with images on the table',
    path_to_page: 'playing-with-cards',
  },
];

export default dataServices;
