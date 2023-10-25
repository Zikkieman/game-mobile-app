import { StyleSheet, View } from "react-native";
import Colors from "../../constants/color";

export default function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    marginHorizontal: 24,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
