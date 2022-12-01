import styled from "styled-components/native";
import { Button } from "../Button";
import { Space } from "../Space";

const order1 = [1, 4, 5, 8];
const order2 = [2, 5, 6, 9];
const order3 = [3, 6, 7, 10];
const order4 = [8, 11, 12, 15];
const order5 = [9, 12, 13, 16];
const order6 = [10, 13, 14, 17];
const order7 = [15, 18, 19, 22];
const order8 = [16, 19, 20, 23];
const order9 = [17, 20, 21, 24];
const order10 = [22, 25, 26, 29];
const order11 = [23, 26, 27, 30];
const order12 = [24, 27, 28, 31];


export function Tabuleiro1() {

	return (
		<Container>
			<Section>
				<Dot />
				<Button id={1} type="horizontal" />
				<Dot />
				<Button id={2} type="horizontal" />
				<Dot />
				<Button id={3} type="horizontal" />
				<Dot />
			</Section>
			<Section>
				<Button id={4} type="vertical" />
				<Space order={order1} />
				<Button id={5} type="vertical" />
				<Space order={order2} />
				<Button id={6} type="vertical" />
				<Space order={order3} />
				<Button id={7} type="vertical" />
			</Section>
			<Section>
				<Dot />
				<Button id={8} type="horizontal" />
				<Dot />
				<Button id={9} type="horizontal" />
				<Dot />
				<Button id={10} type="horizontal" />
				<Dot />
			</Section>
			<Section>
				<Button id={11} type="vertical" />
				<Space order={order4} />
				<Button id={12} type="vertical" />
				<Space order={order5} />
				<Button id={13} type="vertical" />
				<Space order={order6} />
				<Button id={14} type="vertical" />
			</Section>
			<Section>
				<Dot />
				<Button id={15} type="horizontal" />
				<Dot />
				<Button id={16} type="horizontal" />
				<Dot />
				<Button id={17} type="horizontal" />
				<Dot />
			</Section>
			<Section>
				<Button id={18} type="vertical" />
				<Space order={order7} />
				<Button id={19} type="vertical" />
				<Space order={order8} />
				<Button id={20} type="vertical" />
				<Space order={order9} />
				<Button id={21} type="vertical" />
			</Section>
			<Section>
				<Dot />
				<Button id={22} type="horizontal" />
				<Dot />
				<Button id={23} type="horizontal" />
				<Dot />
				<Button id={24} type="horizontal" />
				<Dot />
			</Section>
			<Section>
				<Button id={25} type="vertical" />
				<Space order={order10} />
				<Button id={26} type="vertical" />
				<Space order={order11} />
				<Button id={27} type="vertical" />
				<Space order={order12} />
				<Button id={28} type="vertical" />
			</Section>
			<Section>
				<Dot />
				<Button id={29} type="horizontal" />
				<Dot />
				<Button id={30} type="horizontal" />
				<Dot />
				<Button id={31} type="horizontal" />
				<Dot />
			</Section>
		</Container>
	);
}

const Container = styled.View`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
`;

const Dot = styled.View`
	width: 15px;
	height: 15px;
	background: #000;
`;

const Section = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;