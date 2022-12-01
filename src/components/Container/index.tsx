import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { ViewProps } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";


interface ContainerProps extends ViewProps {
	children: React.ReactNode;
	backgroundColor?: string;
}

export function Container({ style, backgroundColor, children, ...props }: ContainerProps) {
	return (
		<ContainerComponent style={style} {...props}>
			<StatusBar backgroundColor={backgroundColor} />
			{children}
		</ContainerComponent>
	);
}

const ContainerComponent = styled(SafeAreaView)`
	display: flex;
	flex-direction: column;
	flex: 1;
	align-items: center;
	justify-content: center;
	padding: 24px;
`;