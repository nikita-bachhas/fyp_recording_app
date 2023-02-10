import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';

const SearchBarComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'White',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  }
});

export default SearchBarComponent;