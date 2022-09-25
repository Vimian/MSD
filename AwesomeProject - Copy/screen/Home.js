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
                width: "100%",
                backgroundColor: "#000",
        },
});

export default Home;
