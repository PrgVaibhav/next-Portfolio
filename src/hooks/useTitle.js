import { useEffect } from "react";

export const useTitle = ({ title }) => {
  useEffect(() => {
    document.title = `${title} | Vaibhav Kumar`;
  }, [title]);
  return null;
};
