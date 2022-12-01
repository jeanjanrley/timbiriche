import { ImageSourcePropType, ViewProps } from "react-native";
import styled from "styled-components/native";
import { ImageComponent } from "../imageComponent";


interface UserTypes extends ViewProps {
	nome: string;
	foto?: ImageSourcePropType | undefined;
}

export function UserComponent({ foto, nome, style }: UserTypes) {
	return (
		<UserContainer style={style}>
			<ImageComponent src={foto} style={{ width: 52, height: 52, borderRadius: 26 }} />
			<SectionUser>
				<UserTitle>{nome}</UserTitle>
			</SectionUser>
		</UserContainer>
	);
}

const UserContainer = styled.View`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	background: #188144;
	border-radius: 8px;
	padding: 8px;
	height: 68px;
	flex-grow: 1;
	max-width: 49%;
`;

const SectionUser = styled.View`
	display: flex;
	flex: 1;
	margin-left: 12px;
`;

const UserTitle = styled.Text`
	font-size: 20px;
	color: #fff;
	font-weight: 500;
`;