 // HomeScreenStyles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  backgroundImage: {
    blurRadius: 40,
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  topButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 4,
  },
  barsButton: {
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    borderRadius: 16,
    padding: 8,
  },
  avatarButton: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: 16,
    padding: 3,
  },
  avatarImage: {
    height: 48,
    width: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255,255,255,0.7)',
  },
  punchLineContainer: {
    marginVertical: 48,
    marginHorizontal: 16,
  },
  punchLineText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  punchLineTextBold: {
    fontWeight: '800',
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 12,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 16,
  },
  searchIcon: {
    color: 'gray',
  },
  searchInput: {
    marginLeft: 8,
    color: '#333',
  },
  adjustmentsButton: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
  },
  categoriesContainer: {
    marginTop: 24,
    paddingTop: 24,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  categoryButton: {
    marginRight: 24,
  },
  categoryText: {
    color: 'white',
    fontSize: 16,
    letterSpacing: 1,
  },
  categoryTextBold: {
    fontWeight: 'bold',
  },
  activeLineImage: {
    height: 16,
    width: 20,
  },
  foodCardsContainer: {
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
});

export default styles;
