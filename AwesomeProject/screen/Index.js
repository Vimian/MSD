import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detailed from "./Detailed";
import Home from "./Home";
import Upcoming from "./Upcoming";

const Stack = createNativeStackNavigator();

const Index = () => {
        return (
                <NavigationContainer>
                        <Stack.Navigator initialRouteName="Home">
                                <Stack.Screen name="Home" component={Home} />
                                <Stack.Screen
                                        name="Upcoming"
                                        component={Upcoming}
                                />
                                <Stack.Screen
                                        name="Detailed"
                                        component={Detailed}
                                />
                        </Stack.Navigator>
                </NavigationContainer>
        );
};

export default Index;
