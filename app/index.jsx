import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-primary">
      <Text className="text-2xl font-semibold font-pblack text-white">
        Hello Android :)
      </Text>
      <StatusBar style="auto" />
      <Link
        href="/example"
        style={{ color: "blue", fontWeight: "700", fontSize: 18 }}
      >
        Go to Examples
      </Link>
    </View>
  );
}
