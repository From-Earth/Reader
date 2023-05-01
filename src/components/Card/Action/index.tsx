import { Clickable, Container, Title, TitleContainer } from "./styles";
import { MotiView } from "moti";
import { Easing } from "react-native-reanimated";
import { TouchableOpacityProps } from "react-native/types";
import { useNavigation } from "@react-navigation/native";
import { InformativeTag } from "@components/Informative Tag";
import { useMMKVStore } from "@storage/MMKV";
import { Book } from "@storage/MMKV/default";
import { useConfigStore } from "@storage/settings";

type isCarousel = {
  isCarousel?: boolean;
};

export function CardAction({
  title,
  id,
  uri,
  inPage,
  isCarousel,
  totalRead,
  image,
  ...rest
}: Book & TouchableOpacityProps & isCarousel) {
  const { setRecentBook, setCurrentlyReading } = useMMKVStore();
  const { getConfig } = useConfigStore();
  const navigation = useNavigation();

  function handlePress() {
    if (!isCarousel) {
      setRecentBook({ title, id, uri, inPage, image });
    }
    setCurrentlyReading({ title, id, uri, inPage, image });
    navigation.navigate("Book", { title, id, uri, inPage });
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
        <Container
          source={{ uri: image }}
          resizeMode="stretch"
          resizeMethod="scale"
        >
          <Clickable {...rest} onPress={() => handlePress()}>
            {getConfig("chipsIsActive") && (
              <InformativeTag readStats={`${Math.round(totalRead ?? 0)}`} />
            )}
          </Clickable>
        </Container>
        <Title>{title.length >= 20 ? `${title.slice(0, 20)}...` : title}</Title>
      </TitleContainer>
    </MotiView>
  );
}
