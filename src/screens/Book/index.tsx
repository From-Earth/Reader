import { Header } from "@components/Header";
import { Container, Title } from "./styles";
import { Button } from "@components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Book } from "@storage/MMKV/default";
import Pdf from "react-native-pdf";
import { SafeAreaView, useWindowDimensions } from "react-native";
import { useMMKVStore } from "@storage/MMKV";
import { useEffect, useRef } from "react";

export function Books() {
  const { setBookProperty, getProp } = useMMKVStore();
  const navigation = useNavigation();
  const route = useRoute();
  const { id, title, uri, inPage } = route.params as Book;

  const { width, height } = useWindowDimensions();

  const pdfRef = useRef<Pdf>(null); // create a ref to the PDF component

  useEffect(() => {
    setTimeout(() => {
      pdfRef.current?.setPage(inPage as number);
    }, 50);
  }, []);

  return (
    <Container>
      <Header isSetting={false}>
        <Button variant="action" onPress={navigation.goBack}>
          voltar
        </Button>
        <Title>{title}</Title>
      </Header>
      <SafeAreaView style={{ flex: 1 }}>
        <Pdf
          trustAllCerts={false}
          source={{ uri, cache: true }}
          onError={(error) => {
            console.log(error);
          }}
          ref={pdfRef}
          onLoadComplete={(numberOfPages, filePath) => {
            setBookProperty(id, "allBooks", "totalPages", numberOfPages);
            setBookProperty(id, "lastBooksRead", "totalPages", numberOfPages);
          }}
          onPageChanged={(page, numberOfPages) => {
            setBookProperty(id, "allBooks", "inPage", page);
            setBookProperty(
              id,
              "allBooks",
              "totalRead",
              (page / numberOfPages) * 100
            );
            setBookProperty(id, "lastBooksRead", "inPage", page);
            setBookProperty(
              id,
              "lastBooksRead",
              "totalRead",
              (page / numberOfPages) * 100
            );
          }}
          style={{ flex: 1, width, height }}
        />
      </SafeAreaView>
    </Container>
  );
}
