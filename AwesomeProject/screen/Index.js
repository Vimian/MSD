import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home"
import RDefault from "./RDefault";
import Upcoming from "./Upcoming";

const Stack = createNativeStackNavigator();

const Index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="rdefault" component={RDefault} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="upcoming" component={Upcoming} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Index;