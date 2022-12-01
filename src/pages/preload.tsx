import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { useFonts } from "expo-font";
import React, { useCallback, useContext } from "react";
import * as SplashScreen from "expo-splash-screen";
import { UserComponent } from "../components/UserComponent";
import { AntDesign } from "@expo/vector-icons";
import { MainContent } from "../contexts/main";
import { useNavigation } from "@react-navigation/native";
import { useAssets } from "expo-asset";
import { StyleSheet } from "react-native";
import { Container } from "../components/Container";

SplashScreen.preventAutoHideAsync();

export function PreloadPage() {
	const { setPlayer, setCampeao, setPontuacao, setSelectedsItems } = useContext(MainContent);
	const { navigate } = useNavigation();
	const [assets, error] = useAssets([
		require("../../assets/jean.png"),
		require("../../assets/gustavo.png"),
		require("../../assets/nicolas.png")
	]);

	const [fontsLoaded] = useFonts({
		"Blue-Gun": require("../fonts/blueGunFont.ttf")
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	const handlePlayGame = () => {
		try {
			setPlayer("player1");
			setCampeao(undefined);
			setPontuacao({ player1: 0, player2: 0 });
			setSelectedsItems([]);
			navigate("Home" as never);
		}
		catch (error) {
			console.log(error);
		}
	};

	return (
		<Container onLayout={onLayoutRootView} style={styles.container} backgroundColor={styles.container.backgroundColor}>
			<HeaderArea>
				<TitleText style={{ fontFamily: "Blue-Gun" }}>Dots And</TitleText>
				<TitleText style={{ fontFamily: "Blue-Gun" }}>Boxes</TitleText>
			</HeaderArea>
			<HeaderArea>
				<SubTitle>Responsáveis</SubTitle>
				<UsersArea>
					{
						assets && assets[2] &&
						<UserComponent nome="Jean Janrley" foto={assets[0]} style={{ width: "100%", maxWidth: "100%" }} />
					}
				</UsersArea>
				<UsersArea>
					{
						assets && assets[0] && assets[1] &&
						<>
							<UserComponent nome="Gustavo C." foto={assets[1]} />
							<UserComponent nome="Nicolas H." foto={assets[2]} />
						</>
					}
				</UsersArea>
			</HeaderArea>
			<Button onPress={handlePlayGame}>
				<AntDesign name="play" size={24} color="#fff" />
				<TextButton>
					Jogar
				</TextButton>
			</Button>
		</Container >
	);
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-evenly",
		flex: 1,
		alignItems: "center",
		padding: 24,
		backgroundColor: "#27ae60",
	}
});

const HeaderArea = styled.View`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
`;

const TitleText = styled.Text`
	font-size: 86px;
	color: #fff;
	margin-bottom: 8px;
`;

const SubTitle = styled.Text`
	font-size: 32px;
	font-weight: 500;
	color: #fff;
	margin-bottom: 16px;
`;

const UsersArea = styled.View`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: space-between;
	margin-bottom: 12px;
`;

const ColumnContainer = styled.View`
	display: flex;
	flex-direction: column;
	width: 100%;
`;


const Button = styled.TouchableOpacity`
	width: 100%;
	height: 64px;
	border-radius: 8px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	background: #188144;
`;


const TextButton = styled.Text`
	margin-left: 16px;
	color: #fff;
	font-weight: 500;
	font-size: 24px;
`;


