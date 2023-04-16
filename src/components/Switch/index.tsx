import { View } from "moti";
import { useMemo } from "react";
import { Pressable } from "react-native";
import { getSwitchVariant } from "./switch.utils";

interface switchProps {
  variant?: "primary" | "light";
  isChecked?: () => void;
  unChecked?: () => void;
  isActive?: boolean;
  lastValue: boolean;
}

export function Switch({ variant = "primary", isChecked, unChecked, lastValue, isActive }: switchProps) {
  useMemo(() => {
    if (isActive) {
      isChecked && isChecked();
    } else if (!isActive && unChecked && lastValue) {
      unChecked();
    }
  }, [isActive])

  return (
    <Pressable>
      <View
        animate={{
          backgroundColor: getSwitchVariant({
            variant: variant,
            active: isActive,
            forBg: true,
          }),
        }}
        transition={{ type: "timing", duration: 200 }}
        style={{
          justifyContent: "center",
          width: 48,
          height: 24,
          borderRadius: 12,
        }}
      >
        <View
          animate={{
            translateX: isActive ? 26 : 2,
          }}
          transition={{ type: "timing", duration: 200 }}
          style={{
            backgroundColor: "white",
            height: 20,
            width: 20,
            borderRadius: 10,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.33,
            shadowRadius: 4,
            elevation: 5,
          }}
        />
      </View>
    </Pressable>
  );
}

