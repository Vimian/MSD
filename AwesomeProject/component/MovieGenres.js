import { useEffect, useState } from "react";

function convertGenres(genres_array, setGenres) {
        const genres = {};

        genres_array.genres.forEach((e) => {
                genres[e.id] = e.name;
        });

        setGenres(genres);
}

const MovieGenres = (genre_ids) => {
        const [genres, setGenres] = useState({});

        useEffect(() => {
                fetchPopularMovies();
        }, []);

        function fetchPopularMovies() {
                console.info("Fetching genres");
                fetch(
                        `${process.env.API_URL}genre/movie/list?api_key=${process.env.API_KEY}&language=en-US`
                )
                        .catch((err) => console.error(err))
                        .then((res) => res.json())
                        .then((res) => convertGenres(res, setGenres));
        }

        const result = [];
        genre_ids.forEach((e) => {
                result.push(genres[e]);
        });

        return result;
};

export default MovieGenres;
