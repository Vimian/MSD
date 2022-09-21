import { useEffect, useState } from "react";
import { Text, View } from "react-native";

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
                <View>
                        <Text>Detailed</Text>
                        <Text>{data.id}</Text>
                        <Text>{data.original_title}</Text>
                        <Text>{data.overview}</Text>
                </View>
        );
};

export default Detailed;
