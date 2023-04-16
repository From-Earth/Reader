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

export function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigation = useNavigation();

  //useMemo(async () => {
  //  if (getBookData("permissionToReadExternal")) {
   //   const allbooks = await updateBooks([
   //     ...(getBookData("allBooks") as Book[]),
     // ]);
      //const lasbooks = await updateBooks([
       // ...(getBookData("lastBooksRead") as Book[]),
      //]);
      //setBookData("allBooks", allbooks);
      //setBookData("lastBooksRead", lasbooks);

      //console.log("asdasdasdasdsadasd");
   // }
 // }, []);

  return (
    <Container>
      <Header isSetting={false}>
        <Indicator connected={true}>Você está conectado à nuvem</Indicator>
        <InputText value={searchQuery} onChangeText={setSearchQuery} />
        <ButtonIcon onPress={() => navigation.navigate("Settings")} />
      </Header>
      <CarouselHeader center={true} title="RECENTS" />
      <Carousel />
      <Divider />
      <CarouselAfterDivider filterQuery={searchQuery} />
    </Container>
  );
}
