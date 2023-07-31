import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  backgroundImage: {
    height: 96,
    width: '100%',
    position: 'absolute',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    alignItems: 'center',
  },
  headerButton: {
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  foodImage: {
    height: 48,
    width: 48,
  },
  foodName: {
    fontSize: 30,
    color: 'white',
  },
  quantityContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 6,
  },
  quantityButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'gray',
    borderRadius: 50,
    paddingHorizontal: 12,
  },
  quantityButton: {
    borderRadius: 50,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'gray',
    padding: 8,
  },
  quantityText: {
    fontSize: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    height: 20,
    overflow: 'hidden',
  },
  descriptionContainer: {
    marginHorizontal: 16,
    marginTop: 6,
    height: 60,
    justifyContent: 'space-between',
  },
  addToCartContainer: {
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
