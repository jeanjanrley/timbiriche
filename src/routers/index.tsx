import { createStackNavigator, StackNavigationOptions  } from "@react-navigation/stack";
import { MainPage } from "../pages/main";
import { PreloadPage } from "../pages/preload";
import { WinPage } from "../pages/winPage";

const Stack = createStackNavigator();

const options: StackNavigationOptions  = {
	headerShown: false
};

export function AppRouters() {
	return (
		<Stack.Navigator screenOptions={options} initialRouteName="Preload">
			<Stack.Screen name="Preload" component={PreloadPage} />
			<Stack.Screen name="Home" component={MainPage} />
			<Stack.Screen name="WinPage" component={WinPage} />
		</Stack.Navigator>
	);
}