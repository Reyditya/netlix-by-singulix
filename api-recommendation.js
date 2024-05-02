const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTljMmRmMTI3OTRmOGQ0MTBjOWZjNjk2NDliMGQ1NiIsInN1YiI6IjVkZjMxMTMwZDFhODkzMDAxNDcyNzk4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G6gBibtyUWjjKkffXsFFWj8xXyd2zIhtLjl0RFEyTLY",
  },
};

fetch(
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
  options
)
  .then((response) => response.json())
  .then((response) => {
    if (response.results && response.results.length > 0) {
      const randomIndex = Math.floor(Math.random() * response.results.length);
      const movieTitle = response.results[randomIndex].title;
      document.querySelector(".title-info h1").textContent = movieTitle;
      const movieOverview = response.results[randomIndex].overview;
      document.querySelector(".title-info-synopsis").textContent =
        movieOverview;
      const maturityNumber = response.results[randomIndex].adult
        ? "18+"
        : "16+";
      document.querySelector(".maturity-number").textContent = maturityNumber;
      const voteAverage = response.results[randomIndex].vote_average;
      document.querySelector(".vote-average").textContent = voteAverage;
      const language = response.results[randomIndex].original_language;
      document.querySelector(".language").textContent = language;

      const movieBackdrop = response.results[randomIndex].backdrop_path;
      const backdropUrl = "https://image.tmdb.org/t/p/original" + movieBackdrop;

      document.querySelector(
        ".bg-img"
      ).style.backgroundImage = `url(${backdropUrl})`;

      const imageContainer = document.getElementById("imageContainer");
      const carousel = document.createElement("div");
      carousel.classList = "carousel";

      const shuffledResults = response.results.sort(() => 0.5 - Math.random());
      shuffledResults.slice().forEach((movie) => {
        const img = document.createElement("img");
        img.src = "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
        img.alt = "Movie Poster";
        img.style.objectFit = "cover";
        img.width = 330;
        img.height = 190;
        carousel.appendChild(img);

        imageContainer.innerHTML = "";
        imageContainer.appendChild(carousel);
      });
    } else {
      throw new Error("No movie data available");
    }
  })
  .catch((err) => console.error(err));
