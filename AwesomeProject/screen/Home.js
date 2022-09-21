import { StyleSheet, View } from "react-native";
import Upcoming from "./Upcoming";

const Home = ({ navigation }) => {
        return (
                <View style={styles.container}>
                        <Upcoming navigation={navigation} />
                </View>
        );
};

const styles = StyleSheet.create({
        container: {
                flex: 1,
                backgroundColor: "#fff",
                alignItems: "center",
        },
});

export default Home;
