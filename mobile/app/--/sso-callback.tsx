
import { Redirect } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

export default function SsoCallback() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) return null;

  if (isSignedIn) {
    return <Redirect href="/(tabs)" />;
  }

  return <Redirect href="/(auth)" />;
}
