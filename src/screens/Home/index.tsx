import { ButtonIcon } from "@components/Button/Icon";
import { Indicator } from "@components/Button/Indicator";
import { Header } from "@components/Header";
import { Container } from "./styles";
import Carousel from "@components/Carousel";
import { CarouselHeader } from "./Header";
import { Divider } from "@components/Divider";
import CarouselAfterDivider from "@components/Carousel/afterDivider";
import { InputText } from "@components/Input";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Book } from "@storage/MMKV/default";
import { useConfigStore } from "@storage/settings";
import * as Network from "expo-network";
import { useAsyncStore } from "@storage/MMKV/versaofudida";

export function Home() {
  const { getBookData } = useAsyncStore();
  const { getConfig } = useConfigStore();
  const [searchQuery, setSearchQuery] = useState("");
  const navigation = useNavigation();
  const [isConnected, setIsConnected] = useState(false);
  const isLogged =
    getConfig("account")?.isAuthenticated === undefined
      ? false
      : getConfig("account")?.isAuthenticated;

  const hasRecent = getBookData("lastBooksRead") as Book[];

  function checkNetwork() {
    Network.getNetworkStateAsync().then((network) => {
      setIsConnected(network.isConnected as boolean);
    });
  }

  useEffect(() => {
    checkNetwork();
  }, [Network.getNetworkStateAsync().then((network) => network.isConnected)]);

  return (
    <Container>
      <Header isSetting={false}>
        <Indicator
          connected={isLogged && isConnected}
          alternativeMessage="Você não está conectado"
        >
          Você está conectado.
        </Indicator>
        {getConfig("searchIsActive") && (
          <InputText value={searchQuery} onChangeText={setSearchQuery} />
        )}
        <ButtonIcon onPress={() => navigation.navigate("Settings")} />
      </Header>
      {hasRecent.length > 0 && <CarouselHeader center={true} title="RECENTS" />}
      <Carousel />
      {hasRecent.length > 0 && <Divider />}
      <CarouselAfterDivider filterQuery={searchQuery} />
    </Container>
  );
}
