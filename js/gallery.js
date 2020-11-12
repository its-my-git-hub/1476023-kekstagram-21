'use strict';

(function () {

  const pictureList = document.querySelector(`.pictures`);

  const picture = document.querySelector(`#picture`).content;

  const renderPicture = function (photo) {
    const clonedElement = picture.querySelector(`.picture`).cloneNode(true);

    const pictureImage = clonedElement.querySelector(`.picture__img`);
    const pictureComments = clonedElement.querySelector(`.picture__comments`);
    const pictureLikes = clonedElement.querySelector(`.picture__likes`);

    pictureImage.src = photo.url;
    pictureImage.alt = photo.description;
    pictureComments.textContent = photo.comments.length;
    pictureLikes.textContent = photo.likes;

    clonedElement.addEventListener(`click`, function () {
      window.preview.showBigPicture(photo);
    });

    return clonedElement;
  };

  const renderPictures = function (photos) {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < photos.length; i++) {
      fragment.appendChild(renderPicture(photos[i]));
    }
    pictureList.appendChild(fragment);
  };

  const removeAllPictures = function () {
    const pictures = pictureList.querySelectorAll(`.picture`);
    for (let i = 0; i < pictures.length; i++) {
      pictures[i].remove();
    }
  };

  window.gallery = {
    renderPictures,
    removeAllPictures
  };

})();
