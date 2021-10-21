import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    width: 320,
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 5,
    elevation: 10,
    shadowOffset: 10,
    shadowColor: "silver",
    shadowRadius: 5,
    shadowOffset: {
      height: 3,
      width: 3,
    },
  },
  cardImg: {
    height: 320,
    width: undefined,
  },
  cardContent: {
    paddingHorizontal: 15,
    paddingBottom: 10,
    borderTopColor: "red",
    borderTopWidth: 1,
  },
  title: {
    fontFamily: "Poppins",
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  para: {
    fontFamily: "Poppins",
    paddingBottom: 10,
  },
});

export default styles;
