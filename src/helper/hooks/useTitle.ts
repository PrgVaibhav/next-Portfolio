import { useEffect } from "react";

interface UseTitle {
  title: string;
}

export const useTitle = ({ title }: UseTitle) => {
  useEffect(() => {
    document.title = title
      ? `${title} | Vaibhav Kumar`
      : "Vaibhav Kumar | ReactJS Developer & Frontend Engineer";
  }, [title]);

  return null;
};
