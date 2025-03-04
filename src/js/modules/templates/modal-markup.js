import sorryPosterImage from '../../../images/home/sorry-poster.jpg';

export function modalMarkup(
  data,
  genreIds,
  cardsListId,
  movieAddedtoWatched,
  movieAddedtoQueue,
) {
  return `
    <div class="modal">
      <div class="modal__wraper"><div class="modal__image-wraper">
        <img
        src=${
          data.poster_path === null
            ? sorryPosterImage
            : `https://image.tmdb.org/t/p/w500${data.poster_path}`
        }
        />
      </div>
      <div class="modal__info-container"><div class="modal__info">
        <h1 class="modal__info-title">${data.title.toUpperCase()}</h1>
        <div class="modal__info-wraper">
          <div class="modal__info-item-wraper">
            <span class="modal__info-item">
              Vote <span class="modal__info-slash"> / </span>
              <span class="modal__info-item"> Votes </span></span
            >
            <span class="modal__info-value modal__info-value--hight">
              <span class="modal__info-value  modal__info-value--border">${
                data.vote_average
              }</span>
              <span class="modal__info-slash"> / </span><span class="modal__info-value--transparent">${
                data.vote_count
              }</span></span
            >
          </div>
          <div class="modal__info-item-wraper">
            <span class="modal__info-item"> Popularity </span>
            <span class="modal__info-value modal__info-value--hight">${data.popularity.toFixed(
              1,
            )}</span>
          </div>
          <div class="modal__info-item-wraper">
            <span class="modal__info-item"> Original Title </span>
            <span class="modal__info-value">
              ${data.title.toUpperCase()}</span></div>
          <div class="modal__info-item-wraper">
            <span class="modal__info-item"> Genre </span
            ><span class="modal__info-value">${
              genreIds ? genreIds : 'Жанр отсутствует'
            }</span>
          </div><div class="modal__info-item-wraper">
  <span class="modal__info-item"> Trailer </span>
  ${
    data.videos.results.length === 0
      ? `<span class="modal__info-value">Трейлер отсутствует</span>`
      : `<span class="modal__info-value"><span class="trailer">Watch trailer</span><img class="trailer__img" src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg" alt="YouTube"></span>`
  }
</div>
        </div>
        <div class="modal__info-about-wraper">
          <p class="modal__info-about">
            ABOUT<span class="modal__info-value modal__info-value--descrip">${
              data.overview ? data.overview : 'Нет информации по данному фильму'
            }</span>
          </p>
        </div><span class="close-btn close-btn--movie-card-modal"></span>
      </div><div class="modal__btn-wraper">
          <button
            class="common-btn common-btn__movie-modal ${
              movieAddedtoWatched === true
                ? 'common-btn__movie-modal--active'
                : ''
            }"
            data-action="add-to-watched"
            data-id="${cardsListId}"
          >
           ${
             movieAddedtoWatched === true
               ? 'Remove from watched'
               : 'Add to watched'
           }</button
          ><button
            class="common-btn common-btn__movie-modal ${
              movieAddedtoQueue === true
                ? 'common-btn__movie-modal--active'
                : ''
            }"
            data-action="add-to-queue"
            data-id="${cardsListId}"
          >
          ${movieAddedtoQueue === true ? 'Remove from queue' : 'Add to queue'}
          </button>
        </div>
    <div class="modal__background">
        <img class="modal__background-img"
            src=${
              data.backdrop_path === null
                ? ''
                : `https://image.tmdb.org/t/p/original${data.backdrop_path}`
            }
            alt="${data.title}" />
            </div>
    </div></div>
    </div>
    `;
}
