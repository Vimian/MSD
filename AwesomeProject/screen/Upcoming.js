import { useEffect, useState } from "react";
import { FlatList, ScrollView, StyleSheet } from "react-native";
import MovieEmbed from "../component/MovieEmbed";

const updateListData = (event, pageCounter, setPageCounter, data, setData) => {
        if (
                event.nativeEvent.contentSize.height -
                        event.nativeEvent.layoutMeasurement.height -
                        event.nativeEvent.contentOffset.y <=
                        700 &&
                pageCounter <= data.total_pages
        ) {
                console.log(data);
                fetchPopularMovies(pageCounter, setPageCounter, data, setData);
        }
};

function fetchPopularMovies(pageCounter, setPageCounter, data, setData) {
        console.info(`Fetching upcoming movies, from page ${pageCounter}`);
        fetch(
                `${process.env.API_URL}movie/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=${pageCounter}`
        )
                .catch((err) => console.error(err))
                .then((res) => res.json())
                .then((res) => {
                        if (data.results && data.results.length > 0) {
                                res.results = data.results.concat(res.results);
                        }
                        return res;
                })
                .then((res) => setData(res));

        setPageCounter(pageCounter + 1);
}

const Upcoming = ({ navigation }) => {
        const [data, setData] = useState([]);
        const [pageCounter, setPageCounter] = useState(1);

        useEffect(() => {
                fetchPopularMovies(pageCounter, setPageCounter, data, setData);
        }, []);

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
                <ScrollView
                        onScroll={(event) =>
                                updateListData(
                                        event,
                                        pageCounter,
                                        setPageCounter,
                                        data,
                                        setData
                                )
                        }
                        scrollEventThrottle={1000}
                >
                        <FlatList
                                data={data.results}
                                renderItem={renderItem}
                                keyExtractor={(item) => item.id}
                                horizontal={true}
                                contentContainerStyle={styles.list}
                        />
                </ScrollView>
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
