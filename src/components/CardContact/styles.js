import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  contactInformation: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.3,
    borderRadius: 4,
    borderColor: '#c0392b',
    padding: 8,
    marginBottom: 8,
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 80,
    marginRight: 8,
  },

  titleAvatar: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#c0392b',
  },

  icon: {
    marginLeft: 'auto',
    marginRight: 8,
  },
});
