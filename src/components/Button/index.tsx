import { useContext, useEffect, useState } from "react";
import { TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";
import { MainContent, PlayersTypes } from "../../contexts/main";

type TypeButton = "vertical" | "horizontal";

interface ButtonProps extends TouchableOpacityProps {
	type: TypeButton;
	id: number;
}

export function Button({ id, ...props }: ButtonProps) {
	const { selectedsItems, setSelectedsItems, player, setPlayer } = useContext(MainContent);
	const [selected, setSelected] = useState(false);
	const [selectedPlayer, setSelectedPlayer] = useState<PlayersTypes>();

	useEffect(() => {
		if (selectedsItems.length === 0) {
			setSelected(false);
		}
	}, [selectedsItems.length]);


	const handlePress = () => {
		setSelected(true);
		!selectedsItems.includes(id) && setSelectedsItems(prev => [...prev, id]);
		setSelectedPlayer(player);
		setPlayer(prev => prev === "player1" ? "player2" : "player1");
	};

	return (
		<ButtonStyle
			{...props}
			selected={selected}
			disabled={selected}
			onPress={handlePress}
			player={selectedPlayer}
		/>
	);
}

const ButtonStyle = styled.TouchableOpacity<{ type: TypeButton; selected: boolean, player: PlayersTypes | undefined }>`
	display: flex;
	flex-grow: ${props => props.type === "horizontal" ? 1 : 0};
	width: ${props => props.type === "vertical" ? "15px" : "100px"};
	height: ${props => props.type === "horizontal" ? "15px" : "100px"};
	background: ${({ selected, player }) => selected ? (player === "player1" ? "#8e44ad" : "#d35400") : "rgba(0, 0, 0, 0.082)"};
	box-sizing: border-box;
	border: 1px solid #fff;
`;
