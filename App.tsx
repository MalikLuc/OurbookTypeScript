import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styled } from 'nativewind';

//className="flex-1 items-center justify-center bg-white"
const StyledView = styled(View)
const StyledText = styled(Text)
export default function App() {

    // Youtube Data API v3 Key
  return (
      <StyledView className="flex-1 items-center justify-center bg-blue ">
          <StyledText>Open up App.tsx to start working on your app!</StyledText>
          <StatusBar style="auto" />
      </StyledView>
  );
}
