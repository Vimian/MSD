import { FlatList, SafeAreaView, Text, View } from 'react-native';

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
  const renderItem = ({item}) => (
    <Item name={item.name} />
  );
  
  return (
    <View>
      <FlatList
        data={items}
        renderItem={renderItem}
      />
    </View>
  );
};


const Item = ({ name }) => (
  <View>
    <Text>{name}test</Text>
  </View>
)

export default My;