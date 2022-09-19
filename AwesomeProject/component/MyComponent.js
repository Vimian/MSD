import { Text, View } from 'react-native';
import { FlatList } from 'react-native-web';

const items = [
  {
    name: 'First Item',
  },
  {
    name: 'Second Item',
  },
  {
    name: 'Third Item',
  },
];

const My = () => {
  return (
    <View>
      <FlatList
        data={items}
        renderItem={renderItem}
      />
    </View>
  );
};

const renderItem = ({item}) => (
  <Item name={item.name} />
);

const Item = ({ name }) => (
  <View>
    <Text>{name}test</Text>
  </View>
)

export default My;