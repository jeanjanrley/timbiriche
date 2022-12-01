import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";



interface MainContextProps {
	selectedsItems: number[];
	setSelectedsItems: Dispatch<SetStateAction<number[]>>;
	player: PlayersTypes;
	setPlayer: Dispatch<SetStateAction<PlayersTypes>>;
	pontuacao: PontuacaoTypes;
	setPontuacao: Dispatch<SetStateAction<PontuacaoTypes>>;
	campeao: PlayersTypes | undefined;
	setCampeao: Dispatch<SetStateAction<PlayersTypes | undefined>>;
}

export type PlayersTypes = "player1" | "player2"

interface PontuacaoTypes {
	player1: number;
	player2: number;
}

const letPontuacao: PontuacaoTypes = {
	player1: 0,
	player2: 0
};

export const MainContent = createContext<MainContextProps>({} as MainContextProps);

export function MainContextProvider({ children }: { children: ReactNode }) {
	const [selectedsItems, setSelectedsItems] = useState<number[]>([]);
	const [player, setPlayer] = useState<PlayersTypes>("player1");
	const [pontuacao, setPontuacao] = useState<PontuacaoTypes>(letPontuacao);
	const [campeao, setCampeao] = useState<PlayersTypes>();

	return (
		<MainContent.Provider
			value={{ selectedsItems, setSelectedsItems, player, setPlayer, pontuacao, setPontuacao, campeao, setCampeao }}
		>
			{children}
		</MainContent.Provider>
	);
}