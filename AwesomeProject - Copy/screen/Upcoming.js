import { useEffect, useState } from "react";
import {
        FlatList,
        Image,
        StyleSheet,
        TouchableHighlight,
        View,
} from "react-native";

const updateListData = (
        event,
        pageCounter,
        setPageCounter,
        data,
        setData,
        lastFetch,
        setLastFetch
) => {
        if (
                event.nativeEvent.contentSize.height -
                        event.nativeEvent.layoutMeasurement.height -
                        event.nativeEvent.contentOffset.y <=
                        1000 &&
                pageCounter <= data.total_pages
        ) {
                fetchPopularMovies(
                        pageCounter,
                        setPageCounter,
                        data,
                        setData,
                        lastFetch,
                        setLastFetch
                );
        }
};

function fetchPopularMovies(
        pageCounter,
        setPageCounter,
        data,
        setData,
        lastFetch,
        setLastFetch
) {
        if (lastFetch + 1000 > Date.now()) {
                return;
        }

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
        setLastFetch(Date.now());
}

const Upcoming = ({ navigation }) => {
        const [data, setData] = useState([]);
        const [pageCounter, setPageCounter] = useState(1);
        const [lastFetch, setLastFetch] = useState(0);

        useEffect(() => {
                fetchPopularMovies(
                        pageCounter,
                        setPageCounter,
                        data,
                        setData,
                        lastFetch,
                        setLastFetch
                );
        }, []);

        const renderItem = ({ item }) => (
                <View>
                        <TouchableHighlight
                                onPress={() => {
                                        const id = item.id;
                                        navigation.navigate("Detailed", { id });
                                }}
                        >
                                <Image
                                        style={styles.image}
                                        source={{
                                                uri: `https://image.tmdb.org/t/p/original${item.poster_path}`,
                                        }}
                                ></Image>
                        </TouchableHighlight>
                </View>
        );

        return (
                <View>
                        <FlatList
                                onScroll={(event) =>
                                        updateListData(
                                                event,
                                                pageCounter,
                                                setPageCounter,
                                                data,
                                                setData,
                                                lastFetch,
                                                setLastFetch
                                        )
                                }
                                data={data.results}
                                renderItem={renderItem}
                                keyExtractor={(item) => item.id}
                                numColumns={2}
                                contentContainerStyle={styles.list}
                        />
                </View>
        );
};

const styles = StyleSheet.create({
        list: {
                alignItems: "center",
        },
        image: {
                flex: 1,
                margin: 2,
                width: "69%",
                aspectRatio: 2 / 3,
                flexDirection: "column",
        },
});

export default Upcoming;
