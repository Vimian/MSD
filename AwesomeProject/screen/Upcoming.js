import { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MovieEmbed from "../component/MovieEmbed";

const Upcoming = ({ navigation }) => {
        const [data, setData] = useState([]);

        useEffect(() => {
                fetchPopularMovies();
        }, []);

        function fetchPopularMovies() {
                console.info("Fetching upcoming movies");
                fetch(
                        `${process.env.API_URL}movie/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=1`
                )
                        .catch((err) => console.error(err))
                        .then((res) => res.json())
                        .then((res) => setData(res));
        }

        const renderItem = ({ item }) => (
                <MovieEmbed
                        navigation={navigation}
                        id={item.id}
                        poster_path={item.poster_path}
                        genre_ids={item.genre_ids}
                        vote_average={item.vote_average}
                        adult={item.adult}
                />
        );

        return (
                <View>
                        <FlatList
                                data={data.results}
                                renderItem={renderItem}
                                keyExtractor={(item) => item.id}
                                horizontal={true}
                                contentContainerStyle={styles.list}
                        />
                </View>
        );
};

const styles = StyleSheet.create({
        list: {
                paddingHorizontal: "100px",
                width: "100%",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
        },
});

export default Upcoming;
