// IMPORTS
import { useEffect, useState } from "react";

// USE PAGE ANIMATION
export default function usePageAnimation(pageKey) {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const played = sessionStorage.getItem(`pageAnimation-${pageKey}`);
    if (!played) {
      setHasAnimated(false);
      sessionStorage.setItem(`pageAnimation-${pageKey}`, "true");
    } else {
      setHasAnimated(true);
    }
  }, [pageKey]);

  return hasAnimated;
}
