import { useState } from "react";
import {
        ImageBackground,
        StyleSheet,
        Text,
        TouchableHighlight,
        View,
} from "react-native";
import MovieEmbedInfo from "./MovieEmbedInfo";

const MovieEmbed = ({
        navigation,
        id,
        poster_path,
        genre_ids,
        vote_average,
        adult,
}) => {
        const [isOver, setIsOver] = useState(false);

        function hover(e, isOver) {
                setIsOver(isOver);
        }

        return (
                <View
                        onMouseOver={(e) => hover(e, true)}
                        onMouseOut={(e) => hover(e, false)}
                >
                        <TouchableHighlight
                                onPress={() =>
                                        navigation.navigate("Detailed", { id })
                                }
                                style={styles.container}
                        >
                                <ImageBackground
                                        style={styles.image}
                                        source={{
                                                uri: `https://image.tmdb.org/t/p/original${poster_path}`,
                                        }}
                                >
                                        {isOver && (
                                                <MovieEmbedInfo
                                                        adult={adult}
                                                        genre_ids={genre_ids}
                                                        vote_average={
                                                                vote_average
                                                        }
                                                />
                                        )}
                                </ImageBackground>
                        </TouchableHighlight>
                </View>
        );
};

const styles = StyleSheet.create({
        container: {},
        image: {
                width: "230px",
                height: "345px",
        },
});

export default MovieEmbed;
