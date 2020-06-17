import { useState, useEffect } from "react";

export function useImage() {
  const NO_OF_IMAGES = 32;
  const [image, setImage] = useState(1);

  useEffect(() => {
    const handle = setInterval(() => {
      const number = Math.floor(Math.random() * NO_OF_IMAGES) + 1;
      setImage(number);
    }, 4500);

    return () => clearInterval(handle);
  }, []);

  return `${image}`;
}
