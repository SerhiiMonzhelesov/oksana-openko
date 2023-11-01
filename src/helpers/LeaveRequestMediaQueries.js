import { useMediaQuery } from 'react-responsive';

export function LeaveRequestMediaQueries() {
  const mediaMatchers = {
    min768: useMediaQuery({ query: '(min-width: 768px)' }),
    min1440: useMediaQuery({ query: '(min-width: 1440px)' }),
  };

  const getPaddingStyle = isFormVisible => {
    let paddingStyle = { paddingTop: '112px', paddingBottom: '192px' };

    if (!isFormVisible) {
      paddingStyle = { paddingTop: '112px', paddingBottom: '180px' };
    }

    if (mediaMatchers.min768) {
      if (isFormVisible) {
        paddingStyle.paddingTop = '248px';
        paddingStyle.paddingBottom = '248px';
      } else {
        paddingStyle.paddingTop = '176px';
        paddingStyle.paddingBottom = '316px';
      }
    }

    if (mediaMatchers.min1440) {
      if (isFormVisible) {
        paddingStyle.paddingTop = '136px';
        paddingStyle.paddingBottom = '152px';
      } else {
        paddingStyle.paddingTop = '152px';
        paddingStyle.paddingBottom = '128px';
      }
    }

    return paddingStyle;
  };

  return {
    mediaMatchers,
    getPaddingStyle,
  };
}
