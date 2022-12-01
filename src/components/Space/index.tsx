import { useContext, useEffect, useState } from "react";
import styled from "styled-components/native";
import { MainContent, PlayersTypes } from "../../contexts/main";

interface SpaceProps {
	order: number[];
}


export function Space({ order }: SpaceProps) {
	const { selectedsItems, player, setPlayer, pontuacao, setPontuacao } = useContext(MainContent);
	const [selectedPlayer, setSelectedPlayer] = useState<PlayersTypes>();

	const selected = order.every(item => selectedsItems.includes(item));



	useEffect(() => {
		if (selected) {
			const letPlayer = player === "player1" ? "player2" : "player1";
			setSelectedPlayer(letPlayer);
			setPontuacao({ ...pontuacao, [letPlayer]: pontuacao[letPlayer] + 1 });
			setPlayer(letPlayer);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selected, setPlayer]);

	return (
		<SpaceStyle selected={selected} player={selectedPlayer} />
	);
}

const SpaceStyle = styled.View<{ selected: boolean, player: PlayersTypes | undefined }>`
	display: flex;
	flex-grow: 1;
	height: 100px;
	background: ${({ selected, player }) => selected ? (player === "player1" ? "#8e44ad" : "#d35400") : "rgba(0, 0, 0, 0.082)"};
`;
