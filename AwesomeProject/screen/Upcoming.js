import { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

const Upcoming = ({navigation}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("helloooo");
    fetchPopularMovies();
  }, []);

  function fetchPopularMovies() {
    console.log(process.env.API_KEY)
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=1`)
      .catch((err) => (
        console.error(err)
      ))
      .then((res) => res.json())
      .then((res) => setData(res.results));
  };

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
      />
    </View>
  );
};

const renderItem = ({item}) => (
  <Item id={item.id} />
);

const Item = ({ id }) => (
  <View>
    <Text>{id}</Text>
  </View>
)

export default Upcoming;