import { MotiView } from "moti";
import { Easing } from "react-native-reanimated";
import { TouchableOpacityProps } from "react-native/types";
import { InformativeTag } from "@components/Informative Tag";
import { Book } from "@storage/MMKV/default";
import { useConfigStore } from "@storage/settings";
import { Container, Title, TitleContainer } from "./styles";
import { useAsyncStore } from "@storage/MMKV/versaofudida";

type isCarousel = {
  isCarousel?: boolean;
};

export function CardAction({
  title,
  id,
  uri,
  isCarousel,
  totalRead,
  image,
  ...rest
}: Book & TouchableOpacityProps & isCarousel) {
  const { setRecentBook, setCurrentlyReading } = useAsyncStore();
  const { getConfig } = useConfigStore();

  function handlePress() {
    if (!isCarousel) {
      setRecentBook({ title, id, uri });
    }
    setCurrentlyReading({ title, id, uri });
  }

  return (
    <MotiView
      from={{ scale: 0.8, opacity: 0.8 }}
      transition={{
        type: "timing",
        duration: 125,
        easing: Easing.inOut(Easing.linear),
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
    >
      <TitleContainer>
        <Container {...rest} onPress={() => handlePress()}>
          {getConfig("chipsIsActive") && (
            <InformativeTag readStats={`${Math.round(totalRead ?? 0)}`} />
          )}
        </Container>
        <Title>{title.length >= 20 ? `${title.slice(0, 20)}...` : title}</Title>
      </TitleContainer>
    </MotiView>
  );
}
