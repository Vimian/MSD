import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import ArrayToPrettyString from "../component/ArrayToPrettyString";

const Detailed = ({ route }) => {
        const { id } = route.params;

        const [data, setData] = useState([]);

        useEffect(() => {
                fetchPopularMovies();
        }, []);

        function fetchPopularMovies() {
                fetch(
                        `${process.env.API_URL}movie/${id}?api_key=${process.env.API_KEY}&language=en-US`
                )
                        .catch((err) => console.error(err))
                        .then((res) => res.json())
                        .then((res) => setData(res));
        }

        return (
                <View style={styles.container}>
                        <Image
                                style={styles.backdrop}
                                source={{
                                        uri: `https://image.tmdb.org/t/p/original${
                                                data.backdrop_path != null
                                                        ? data.backdrop_path
                                                        : data.poster_path
                                        }`,
                                }}
                        ></Image>

                        <Text style={styles.title}>{data.title}</Text>

                        <View style={{ flexDirection: "row" }}>
                                <View style={{ flex: 2 }}>
                                        <Text style={styles.text}>
                                                <Text>
                                                        Rating:{" "}
                                                        {Math.floor(
                                                                data.vote_average *
                                                                        10
                                                        ) / 10}{" "}
                                                        , length {data.runtime}{" "}
                                                        min.
                                                </Text>
                                        </Text>

                                        <Text style={styles.text}>
                                                {data.overview}
                                        </Text>
                                </View>

                                <View style={{ flex: 1 }}>
                                        <Text>
                                                <Text style={styles.subTitle}>
                                                        Genres:{" "}
                                                </Text>
                                                <Text style={styles.text}>
                                                        {data.genres && (
                                                                <ArrayToPrettyString
                                                                        style={{}}
                                                                        genres={
                                                                                data.genres
                                                                        }
                                                                />
                                                        )}
                                                </Text>
                                        </Text>
                                        <Text>
                                                <Text style={styles.subTitle}>
                                                        Languages:{" "}
                                                </Text>
                                                <Text style={styles.text}>
                                                        {data.spoken_languages && (
                                                                <ArrayToPrettyString
                                                                        style={{}}
                                                                        genres={
                                                                                data.spoken_languages
                                                                        }
                                                                />
                                                        )}
                                                </Text>
                                        </Text>
                                        <Text>
                                                <Text style={styles.subTitle}>
                                                        Status:{" "}
                                                </Text>
                                                <Text style={styles.text}>
                                                        {data.status}
                                                </Text>
                                        </Text>
                                </View>
                        </View>
                </View>
        );
};

const styles = StyleSheet.create({
        container: {
                backgroundColor: "#000",
        },
        backdrop: {
                width: "100%",
                aspectRatio: 2 / 1,
        },
        title: {
                color: "white",
                textAlign: "center",
        },
        text: {
                color: "white",
        },
        subTitle: {
                color: "grey",
        },
});

export default Detailed;
