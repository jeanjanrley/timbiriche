import React, { useContext, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import { MainContent } from "../contexts/main";
import { Tabuleiro1 } from "../components/Tabuleiro1";
import { useNavigation } from "@react-navigation/native";
import { Container } from "../components/Container";

export function MainPage() {
	const { pontuacao, player, selectedsItems, setSelectedsItems, setPontuacao, setCampeao } = useContext(MainContent);
	const { navigate } = useNavigation();

	const completo = selectedsItems.length === 31;

	useEffect(() => {
		if (completo) {
			const { player1, player2 } = pontuacao;
			const letCampeao = player1 > player2 ? "player1" : "player2";
			setCampeao(letCampeao);
			navigate("WinPage" as never);
		}
	}, [completo, navigate, player, pontuacao, setCampeao, setPontuacao, setSelectedsItems]);


	return (
		<Container>
			<TitleText style={styles.title}>DOTS AND BOXES</TitleText>
			<ContainerStyle>
				<TitleBox selected={player === "player1"} background="#8e44ad">
					<PointsText>P1: {pontuacao?.player1}</PointsText>
				</TitleBox>
				<TitleBox selected={player === "player2"} background="#d35400">
					<PointsText>P2: {pontuacao?.player2}</PointsText>
				</TitleBox>
			</ContainerStyle>
			<Tabuleiro1 />
		</Container>
	);
}

const styles = StyleSheet.create({
	title: {
		fontSize: 38,
		marginBottom: 32,
		color: "#168846"
	}
});

const ContainerStyle = styled.View`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	width: 100%;
	justify-content: space-between;
	margin-bottom: 48px;
`;

const TitleBox = styled.View<{ selected: boolean; background: string }>`
	width: 40%;
	height: 84px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	border-radius: 8px;
	padding: 12px;
	background: ${({ background }) => background};
	border: ${({ selected, background }) => `5px solid ${selected ? "#2ecc71" : background}`};
`;

const TitleText = styled.Text`
	font-size: 24px;
	font-weight: 500;
`;

const PointsText = styled.Text`
	font-size: 32px;
	font-weight: 500;
	color: #fff;
`;