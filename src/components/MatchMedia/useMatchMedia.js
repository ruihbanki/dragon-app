import React from "react";
import MatchMediaContext from "./MatchMediaContext";

export default function useMatchMedia() {
  const matchesBreakpoints = React.useContext(MatchMediaContext);

  const match = React.useCallback(
    (values) => {
      let result = null;
      for (const key in values) {
        if (matchesBreakpoints[key]) {
          result = values[key];
        } else {
          break;
        }
      }
      return result;
    },
    [matchesBreakpoints]
  );

  return { match };
}
