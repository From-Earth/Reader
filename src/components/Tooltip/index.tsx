import { getChildrenText } from "@utils/tools";
import { MutableRefObject, useRef } from "react";
import { Text } from "react-native/Libraries/Text/Text";
import { Content } from "./styles";
import { useTheme } from "styled-components/native";
import Animated, { Easing, FadeIn, FadeOut } from "react-native-reanimated";

interface Props {
  children?: React.ReactNode;
  opened?: boolean;
}

/**
 * TODO: focus on tooltip when opens;
 * TODO: when focus or click outside of tooltip, close it;
 * TODO: a better way to handle positioning.
 */

export function Tooltip({ children, opened }: Props) {
  const { COLORS, SIZES } = useTheme();
  const message = getChildrenText(children);
  const textRef = useRef() as MutableRefObject<Text> | any;

  setTimeout(() => opened && textRef.current.focus());

  return (
    opened && (
      <Animated.View
        entering={FadeIn.duration(200).easing(Easing.inOut(Easing.ease))}
        exiting={FadeOut.duration(200).easing(Easing.inOut(Easing.ease))}
        style={{
          position: "absolute",
          backgroundColor: COLORS.PRIMARY,
          borderRadius: SIZES.size_4,
          paddingHorizontal: SIZES.size_8,
          paddingVertical: SIZES.size_8,
          top: 40,
          alignItems: "center",
          justifyContent: "center",
          minWidth: 72,
          zIndex: 1,
        }}
      >
        <Content ref={textRef}>{message}</Content>
      </Animated.View>
    )
  );
}
