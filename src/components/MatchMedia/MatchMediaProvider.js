import React from "react";
import MatchMediaContext from "./MatchMediaContext";

export default function MatchMediaProvider(props) {
  const { children, breakpoints } = props;

  const [matchesBreakpoints, setMatchesBreakpoints] = React.useState(null);

  const changeMatches = React.useCallback(
    (event) => {
      const { media, matches } = event;
      const breakpoint = Object.keys(breakpoints).find(
        (key) => breakpoints[key] === media
      );
      setMatchesBreakpoints((prev) => ({
        ...prev,
        [breakpoint]: matches,
      }));
    },
    [breakpoints]
  );

  React.useEffect(() => {
    const next = {};
    for (const key in breakpoints) {
      const media = breakpoints[key];
      const mql = window.matchMedia(media);
      next[key] = mql.matches;
      mql.addEventListener("change", changeMatches);
    }
    setMatchesBreakpoints(next);
  }, [changeMatches, breakpoints]);

  if (!matchesBreakpoints) {
    return null;
  }

  return (
    <MatchMediaContext.Provider value={matchesBreakpoints}>
      {children}
    </MatchMediaContext.Provider>
  );
}
