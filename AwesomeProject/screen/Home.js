import { Button, StyleSheet, View } from 'react-native';
import My from '../component/MyComponent';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <My />
      <Button
        title='Go to RDefault'
        onPress={() => navigation.navigate("rdefault")}
      />
      <Button
        title='Go to Upcoming'
        onPress={() => navigation.navigate("upcoming")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;