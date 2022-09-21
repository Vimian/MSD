import { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

const Upcoming = ({navigation}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  function fetchPopularMovies() {
    fetch(`${process.env.API_URL}movie/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=1`)
      .catch((err) => (
        console.error(err)
      ))
      .then((res) => res.json())
      .then((res) => setData(res));
  };

  return (
    <View>
      <FlatList
        data={data.results}
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