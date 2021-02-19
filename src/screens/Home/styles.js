import { StyleSheet } from 'react-native';

const corRosa = '#FF007F';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 8,
  },

  button: {
    backgroundColor: '#5758BB',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    height: 40,
    borderRadius: 8,
  },

  titleButton: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 400,
    height: 200,
  },
});
