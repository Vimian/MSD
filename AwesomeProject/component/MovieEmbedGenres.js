import { Text } from "react-native";

const MovieEmbedGenres = ({ style, genres }) => {
        var result = "";

        for (let i = 0; i < genres.length; i++) {
                result =
                        genres.length - 1 != i
                                ? result + `${genres[i]} * `
                                : result + genres[i];
        }

        return <Text style={style}>{result}</Text>;
};

export default MovieEmbedGenres;
