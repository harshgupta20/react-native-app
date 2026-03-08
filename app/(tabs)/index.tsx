import { Text, View } from "react-native";
import "../globals.css";

export default function Index() {
  return (
    // <SafeAreaView>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Welcome Harsh.</Text>
        {/* <Link href="/onboarding">Go to Onboarding</Link>
        <Link href="/movies/avengers">Go to Avengers</Link>
        <Button title="Go to Onboarding" onPress={() => { }} /> */}
      </View>
    // </SafeAreaView>
  );
}
