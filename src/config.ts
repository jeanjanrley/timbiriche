export type LadoStatusType = "vazio" | "jogador1" | "jogador2" | null;

// Define o modelo de tabuleiro linhas e colunas
export type QuantidadeTypes = [4, 3] | [5, 4] | [6, 5];

export interface QuadradoTypes {
	id: number,
	esquerda: LadoStatusType;
	direita: LadoStatusType;
	encima: LadoStatusType;
	embaixo: LadoStatusType;
}

export interface TabuleiroType {
	formato: QuantidadeTypes;
	quadrados: QuadradoTypes[];
	total: number;
}

// Geta os quadrados
export function generateRange(totalElementos: number) {
	const result = Array.from(Array(totalElementos).keys())
		.map(value => {
			const letValue: QuadradoTypes = {
				id: value + 1,
				direita: "vazio",
				esquerda: "vazio",
				embaixo: "vazio",
				encima: "vazio",
			};
			return letValue;
		});
	return result
}

export const tabuleiro1: TabuleiroType = {
	formato: [4, 3],
	quadrados: generateRange(12),
	total: 12,
};

export const tabuleiro2: TabuleiroType = {
	formato: [5, 4],
	quadrados: generateRange(20),
	total: 20,
};

export const tabuleiro3: TabuleiroType = {
	formato: [6, 5],
	quadrados: generateRange(30),
	total: 30,
};
