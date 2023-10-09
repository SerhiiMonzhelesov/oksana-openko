export const confirmNamePage = namePage => {
  let confirmedNamePages = {
    consultation: false,
    education: false,
    psychotherapy: false,
    speaker: false,
    satisfaction: false,
    cards: false,
  };

  const arrDetailsPath = namePage.replace('/', '').split('-');

  Object.keys(confirmedNamePages).forEach(item => {
    if (arrDetailsPath.includes(item)) {
      confirmedNamePages[item] = true;
    }
  });

  return confirmedNamePages;
};
