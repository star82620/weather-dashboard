const deviceSize = {
  desktop: "1439px",
  laptop: "1279px",
  mobile: "1023px",
};

const breakpoint = {
  desktop: `max-width: ${deviceSize.desktop}`,
  laptop: `max-width: ${deviceSize.laptop}`,
  mobile: `max-width: ${deviceSize.mobile}`,
};

export default breakpoint;
