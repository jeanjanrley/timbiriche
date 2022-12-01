import React, { useContext } from "react";
import styled from "styled-components/native";
import { MainContent } from "../contexts/main";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAssets } from "expo-asset";
import { StyleSheet } from "react-native";
import { Container } from "../components/Container";

export function WinPage() {
	const { campeao, setCampeao, setPontuacao, setSelectedsItems, setPlayer } = useContext(MainContent);
	const { navigate } = useNavigation();
	const [assets, error] = useAssets([require("../../assets/trofeu.png")]);

	const handleSair = () => {
		try {
			navigate("Preload" as never);
		} catch (error) {
			console.log(error);
		}
	};

	const handleNovamente = () => {
		try {
			navigate("Home" as never);
			setCampeao(undefined);
			setPontuacao({ player1: 0, player2: 0 });
			setSelectedsItems([]);
			setPlayer("player1");
		} catch (error) {
			console.log(error);
		}
	};

	if (!campeao) {
		return null;
	}

	return (
		<Container style={styles.container} backgroundColor={styles.container.backgroundColor}>
			{assets && assets[0] && <Image source={assets[0]} resizeMode="contain" style={{ height: 220, marginBottom: 44 }} />}
			<HeaderArea>
				<Title>Parabéns Jogador nº {campeao === "player1" ? 1 : 2}</Title>
				<TextWin>Você é o campeão</TextWin>
			</HeaderArea>
			<ButtonsArea>
				<Button onPress={handleSair}>
					<Text>Sair</Text>
				</Button>
				<Button onPress={handleNovamente}>
					<Text>Jogar Novamente</Text>
				</Button>
			</ButtonsArea>
		</Container>
	);
}


const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		padding: 24,
		flex: 1,
		backgroundColor: "#27ae60",
	}
});

const HeaderArea = styled.View`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-bottom: 64px;
	justify-content: center;
	align-items: center;
`;

const Title = styled.Text`
	font-size: 32px;
	color: #fff;
	font-weight: 500;
	margin-bottom: 8px;
`;

const TextWin = styled.Text`
	font-size: 24px;
	color: #fff;
	font-weight: 500;
`;

const ButtonsArea = styled.View`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: space-between;
`;

const Button = styled.TouchableOpacity`
	height: 64px;
	border-radius: 8px;
	display: flex;
	flex-grow: 1;
	max-width: 49%;
	background: #178043;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

const Text = styled.Text`
	font-size: 16px;
	color: #fff;
`;
