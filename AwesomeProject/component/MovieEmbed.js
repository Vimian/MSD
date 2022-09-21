import { Image, StyleSheet, TouchableHighlight, View } from "react-native";

const MovieEmbed = ({ navigation, id, poster_path }) => {
        return (
                <View>
                        <TouchableHighlight
                                onPress={() =>
                                        navigation.navigate("Detailed", { id })
                                }
                                style={styles.container}
                        >
                                <Image
                                        style={styles.image}
                                        source={{
                                                uri: `https://image.tmdb.org/t/p/original${poster_path}`,
                                        }}
                                />
                        </TouchableHighlight>
                </View>
        );
};

const styles = StyleSheet.create({
        container: {
                padding: "auto",
        },
        image: {
                width: "230px",
                height: "345px",
        },
});

export default MovieEmbed;
