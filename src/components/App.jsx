import { Route, Routes } from 'react-router-dom';

import Layout from './Layout/Layout';
import HomePage from '../pages/Homepage';
import ConsultationPage from '../pages/ConsultationPage';
import PsychotherapyPage from 'pages/PsychotherapyPage';
import SexEducationPage from 'pages/SexEducationPage';
import PlayingWithCardsPage from 'pages/PlayingWithCardsPage';
import SelfSatisfactionWorkPage from 'pages/SelfSatisfactionWorkPage';
import InvitedSpeakerPage from 'pages/InvitedSpeakerPage';
import NotFound from 'pages/NotFound';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="consultation" element={<ConsultationPage />} />
        <Route path="sex-education" element={<SexEducationPage />} />
        <Route path="psychotherapy" element={<PsychotherapyPage />} />
        <Route path="invited-speaker" element={<InvitedSpeakerPage />} />
        <Route
          path="self-satisfaction-workshop"
          element={<SelfSatisfactionWorkPage />}
        />
        <Route path="playing-with-cards" element={<PlayingWithCardsPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
