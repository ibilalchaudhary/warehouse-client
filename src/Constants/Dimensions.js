const {Dimensions} = require('react-native');

module.exports = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
};
