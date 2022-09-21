import { useEffect, useState } from "react";
import { FlatList, SliderComponent, Text, View } from "react-native";
import MovieEmbed from "../component/MovieEmbed";

const Upcoming = ({ navigation }) => {
        const [data, setData] = useState([]);

        useEffect(() => {
                fetchPopularMovies();
        }, []);

        function fetchPopularMovies() {
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
                />
        );

        return (
                <View>
                        <FlatList
                                data={data.results}
                                renderItem={renderItem}
                                keyExtractor={(item) => item.id}
                                numColumns={4}
                        />
                </View>
        );
};

export default Upcoming;
