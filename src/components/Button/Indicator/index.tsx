import { Tooltip } from "@components/Tooltip";
import { TouchableOpacityProps } from "react-native";
import { Container, TooltipContainer } from "./styles";
import { MutableRefObject, useRef, useState } from "react";
import { ConnectedIcon, DisconnectedIcon } from "@components/Icon";
import { getChildrenCount } from "@utils/tools";
import React from "react";
import { TouchableOpacity } from "react-native";

type Props = TouchableOpacityProps & {
  connected?: boolean;
  children?: React.ReactNode;
  messageCase?: string;
};

export function Indicator({
  connected = false,
  children,
  messageCase = "Default Text",
  ...rest
}: Props) {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const isConnected = connected && true;
  const noChild = getChildrenCount(children) === 0;
  let lastState = false;
  const buttonRef = useRef() as MutableRefObject<TouchableOpacity>;

  function toggleTooltip() {
    lastState = isTooltipVisible;
    setIsTooltipVisible(!isTooltipVisible);
    setTimeout(() => (lastState ? buttonRef.current.focus() : null));
  }

  return (
    <TooltipContainer>
      <Container
        ref={buttonRef}
        connected={connected}
        {...rest}
        onPress={toggleTooltip}
      >
        {isConnected ? <ConnectedIcon /> : <DisconnectedIcon />}
      </Container>
      {isTooltipVisible && (
        <Tooltip opened={isTooltipVisible}>
          {noChild ? messageCase : children}
        </Tooltip>
      )}
    </TooltipContainer>
  );
}
