import { Image, ImageSourcePropType, ImageStyle, StyleProp } from "react-native";
import styled from "styled-components/native";
import { useCallback, useEffect, useState } from "react";
import { useAssets } from "expo-asset";

interface ImageComponentProps {
	name?: string;
	src: ImageSourcePropType | undefined;
	style?: StyleProp<ImageStyle>;
}

export function ImageComponent({ name, src, style, ...props }: ImageComponentProps) {
	//const { onlineStatus } = useIsOnline();
	const [assets, error] = useAssets([require("../../../assets/avatar.png")]);
	const [source, setSource] = useState<ImageSourcePropType>();

	const defineSource = useCallback(() => {
		if (src) {
			return src;
		}
		//else if (onlineStatus && name) {
		//	return {
		//		uri: `https:/ui-avatars.com/api/?name=${name}&background=0D8ABC&color=fff&size=128`
		//	} as ImageSourcePropType;
		//}
		else if(assets[0]){
			return assets[0];
		}
	}, [assets, src]);

	useEffect(() => {
		const letsource = defineSource();
		setSource(letsource);
	}, [defineSource]);

	return <ImageDefault source={source} style={style} />;
}

const ImageDefault = styled(Image)`
	background: #188144;
`;