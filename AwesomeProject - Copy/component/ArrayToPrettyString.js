import { Text } from "react-native";

const ArrayToPrettyString = ({ style, genres }) => {
        var result = "";

        for (let i = 0; i < genres.length; i++) {
                result =
                        genres.length - 1 != i
                                ? result + `${genres[i].name}, `
                                : result + genres[i].name;
        }

        return <Text style={style}>{result}</Text>;
};

export default ArrayToPrettyString;
