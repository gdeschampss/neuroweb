import { useState, useEffect } from "react";

export function useMediaQuery(query: string): boolean {
  const [value, setValue] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setValue(media.matches);

    const listener = (e: MediaQueryListEvent) => setValue(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return value;
}
