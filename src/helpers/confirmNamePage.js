export const confirmNamePage = namePage => {
  let confirmedNamePages = {
    consultation: false,
    education: false,
    psychotherapy: false,
    speaker: false,
    satisfaction: false,
    cards: false,
    home: false,
  };

  Object.keys(confirmedNamePages).forEach(item => {
    if (namePage === '/') {
      confirmedNamePages.home = true;
    } else if (namePage.includes(item)) {
      confirmedNamePages[item] = true;
    }
  });

  return confirmedNamePages;
};
