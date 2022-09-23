import { StyleSheet, Text, View } from "react-native";
import MovieGenres from "./MovieGenres";

const MovieEmbedInfo = ({ genre_ids, vote_average }) => {
        return (
                <View style={styles.container}>
                        <Text style={styles.text}>
                                <Text>
                                        {MovieGenres(genre_ids).map((e) => e)}
                                </Text>
                                <Text style={styles.vote_average}>
                                        {vote_average}
                                </Text>
                        </Text>
                </View>
        );
};

const styles = StyleSheet.create({
        container: {
                marginTop: "260px",
                textAlign: "center",
                backgroundColor: "#000000c0",
                paddingVertical: "10px",
        },
        text: {
                color: "white",
                fontSize: 21,
                fontWeight: "bold",
        },
        vote_average: {
                color: "green",
        },
});

export default MovieEmbedInfo;
