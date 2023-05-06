import { Container } from "./styles";
import { useRoute } from "@react-navigation/native";
import { Book } from "@storage/MMKV/default";
import Pdf from "react-native-pdf";
import { SafeAreaView, StatusBar, useWindowDimensions } from "react-native";
import { useMMKVStore } from "@storage/MMKV";
import { useEffect, useRef } from "react";
import { HeaderReader } from "@components/Header/Reader";

export function Books() {
  const { setBookProperty } = useMMKVStore();
  const route = useRoute();
  const { id, title, uri, inPage } = route.params as Book;

  const { width, height } = useWindowDimensions();

  const pdfRef = useRef<Pdf>(null); // create a ref to the PDF component

  useEffect(() => {
    setTimeout(() => {
      pdfRef.current?.setPage(inPage as number);
      pdfRef.current?.state;
    });
  }, []);

  return (
    <Container>
      <StatusBar backgroundColor={"#FFFBFB"} barStyle={"dark-content"} />
      <HeaderReader title={title} />
      <SafeAreaView style={{ flex: 1 }}>
        <Pdf
          enableAnnotationRendering={true}
          trustAllCerts={false}
          source={{ uri }}
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
