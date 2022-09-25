import { StyleSheet, Text, View } from "react-native";
import MovieEmbedGenres from "./MovieEmbedGenres";
import MovieGenres from "./MovieGenres";

const MovieEmbedInfo = ({ genre_ids, vote_average }) => {
        return (
                <View style={styles.container}>
                        <Text style={styles.rating}>
                                Rating{" "}
                                <Text style={styles.vote_average}>
                                        {vote_average}
                                </Text>
                        </Text>
                        <MovieEmbedGenres
                                style={styles.genres}
                                genres={MovieGenres(genre_ids)}
                        />
                </View>
        );
};

const styles = StyleSheet.create({
        container: {
                backgroundColor: "#000000c0",
                paddingVertical: "10px",
                textAlign: "center",
                position: "absolute",
                bottom: "0",
                width: "100%",
        },
        rating: {
                fontSize: 21,
                color: "white",
        },
        vote_average: {
                color: "green",
                fontSize: 21,
                fontWeight: "bold",
        },
        genres: {
                fontSize: 14,
                color: "white",
        },
});

export default MovieEmbedInfo;
