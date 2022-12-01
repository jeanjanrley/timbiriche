import "react-native-gesture-handler";
import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { MainContextProvider } from "./src/contexts/main";
import { NavigationContainer } from "@react-navigation/native";
import { AppRouters } from "./src/routers";


export default function App() {

	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<MainContextProvider>
					<AppRouters />
				</MainContextProvider>
			</NavigationContainer>
		</SafeAreaProvider>
	);
}