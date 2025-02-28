import { useEffect, useState } from "react";

export default function useDebounce(param, delay = 1000) {
  const [debounceValue, setDebounceValue] = useState(param);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebounceValue(param);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [param, delay]);

  return debounceValue;
}
