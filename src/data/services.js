import consultation_mob from '../assets/images/services_section/mobile/consultation_mob.jpg';
import education_mob from '../assets/images/services_section/mobile/education_mob.jpg';
import psychotherapy_mob from '../assets/images/services_section/mobile/psychotherapy_mob.jpg';
import speaker_mob from '../assets/images/services_section/mobile/speaker_mob.jpg';
import satisfaction_mob from '../assets/images/services_section/mobile/satisfaction_mob.jpg';
import cards_mob from '../assets/images/services_section/mobile/cards_mob.jpg';

import consultation_tablet from '../assets/images/services_section/tablet/consultation_tablet.jpg';
import education_tablet from '../assets/images/services_section/tablet/education_tablet.jpg';
import psychotherapy_tablet from '../assets/images/services_section/tablet/psychotherapy_tablet.jpg';
import speaker_tablet from '../assets/images/services_section/tablet/speaker_tablet.jpg';
import satisfaction_tablet from '../assets/images/services_section/tablet/satisfaction_tablet.jpg';
import cards_tablet from '../assets/images/services_section/tablet/cards_tablet.jpg';

import consultation_desktop from '../assets/images/services_section/desktop/consultation_desktop.jpg';
import education_desktop from '../assets/images/services_section/desktop/education_desktop.jpg';
import psychotherapy_desktop from '../assets/images/services_section/desktop/psychotherapy_desktop.jpg';
import speaker_desktop from '../assets/images/services_section/desktop/speaker_desktop.jpg';
import satisfaction_desktop from '../assets/images/services_section/desktop/satisfaction_desktop.jpg';
import cards_desktop from '../assets/images/services_section/desktop/cards_desktop.jpg';

const dataServices = [
  {
    name: 'Консультація',
    img_mob: consultation_mob,
    img_tablet: consultation_tablet,
    img_desktop: consultation_desktop,
    alt_img: 'woman consults two people',
    path_to_page: 'consultation',
  },
  {
    name: 'Статеве виховання',
    img_mob: education_mob,
    img_tablet: education_tablet,
    img_desktop: education_desktop,
    alt_img: 'people are looking at a book',
    path_to_page: 'sex-education',
  },
  {
    name: 'Психотерапія',
    img_mob: psychotherapy_mob,
    img_tablet: psychotherapy_tablet,
    img_desktop: psychotherapy_desktop,
    alt_img: 'two people shaking hands for comfort',
    path_to_page: 'psychotherapy',
  },
  {
    name: 'Запрошений спікер',
    img_mob: speaker_mob,
    img_tablet: speaker_tablet,
    img_desktop: speaker_desktop,
    alt_img: 'a smiling woman speaks',
    path_to_page: 'invited-speaker',
  },
  {
    name: 'Практикум по самозадоволенню',
    img_mob: satisfaction_mob,
    img_tablet: satisfaction_tablet,
    img_desktop: satisfaction_desktop,
    alt_img: 'a woman touches her shoulder',
    path_to_page: 'self-satisfaction-workshop',
  },
  {
    name: 'Гра з картками',
    img_mob: cards_mob,
    img_tablet: cards_tablet,
    img_desktop: cards_desktop,
    alt_img: 'colored cards with images on the table',
    path_to_page: 'playing-with-cards',
  },
];

export default dataServices;
