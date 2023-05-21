import { useEffect } from "react";

const useDescriptionTitle = (description, title) => {
  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"]');
    metaDescription.setAttribute("content", description);

    const titleElement = document.querySelector("title");
    titleElement.innerText = "Tasks List | " + title;
  }, [description, title]);
};

export default useDescriptionTitle;
