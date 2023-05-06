import { ButtonIcon } from "@components/Button/Icon";
import { Indicator } from "@components/Button/Indicator";
import { Header } from "@components/Header";
import { Container } from "./styles";
import Carousel from "@components/Carousel";
import { CarouselHeader } from "./Header";
import { Divider } from "@components/Divider";
import CarouselAfterDivider from "@components/Carousel/afterDivider";
import { InputText } from "@components/Input";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useMMKVStore } from "@storage/MMKV";
import { Book } from "@storage/MMKV/default";
import { useConfigStore } from "@storage/settings";

export function Home() {
  const { getBookData } = useMMKVStore();
  const { getConfig } = useConfigStore()
  const [searchQuery, setSearchQuery] = useState("");
  const navigation = useNavigation();

  const hasRecent = getBookData("lastBooksRead") as Book[];

  return (
    <Container>
      <Header isSetting={false}>
        <Indicator connected={getConfig('auth')['isActive']} alternativeMessage="Você não está conectado">Você está conectado.</Indicator>
        { getConfig('searchIsActive') && <InputText value={searchQuery} onChangeText={setSearchQuery} />}
        <ButtonIcon onPress={() => navigation.navigate("Settings")} />
      </Header>
      {hasRecent.length > 0 && <CarouselHeader center={true} title="RECENTS" />}
      <Carousel />
      {hasRecent.length > 0 && <Divider />}
      <CarouselAfterDivider filterQuery={searchQuery} />
    </Container>
  );
}
