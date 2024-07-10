const deviceSize = {
  desktop: "1439px",
  laptop: "1023px",
  tablet: "767px",
  mobile: "474px",
};

const breakpoint = {
  desktop: `max-width: ${deviceSize.desktop}`,
  laptop: `max-width: ${deviceSize.laptop}`,
  tablet: `max-width: ${deviceSize.tablet}`,
  mobile: `max-width: ${deviceSize.mobile}`,
};

export default breakpoint;
