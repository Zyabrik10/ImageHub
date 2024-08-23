import { imageAPI, lightbox, queryAPIConfig, searchForm } from "./js/config";
import _ from "lodash";

// Main function

window.addEventListener("load", async () => {
  try {
    lightbox.init(".image-collection-list");
    searchForm.init(".search-form");
    searchForm.findAndRender(queryAPIConfig.query);

    const anchor = document.querySelector(".anchor");
    const imageColletionTop =
          lightbox.lightboxContainer.container.getBoundingClientRect().top;

    window.addEventListener(
      "scroll",
      _.throttle(async () => {
        if (
          window.scrollY + innerHeight >=
          lightbox.lightboxContainer.container.scrollHeight
        ) {
          queryAPIConfig.page += 1;

          const response = await imageAPI.fetch({
            query: queryAPIConfig.query,
            page: queryAPIConfig.page,
            orientation: "horizontal",
            per_page: 20,
            category: "nature",
          });

          const images = response.data.hits.map(
            ({ id, largeImageURL, tags }) => {
              return {
                url: largeImageURL,
                largeUrl: largeImageURL,
                description: tags,
                id,
              };
            }
          );

          lightbox.addImages(images);
        }

        if (
          window.scrollY + innerHeight >=
          imageColletionTop + innerHeight * 1.5
        ) {
          !anchor.classList.contains("active") &&
            anchor.classList.add("active");
        } else {
          anchor.classList.contains("active") &&
            anchor.classList.remove("active");
        }
      }, 500)
    );
  } catch (e) {
    console.error(e);
  }
});
