import { CardAction } from "@components/Card/Action";
import { Dimensions, FlatList } from "react-native";
import { Container, Separator } from "./styles";
import { Empty } from "../Empty";

interface Slide {
  id: string;
  ReadStats: string;
  text: string;
  title: string;
}

interface Props {
  filterQuery: string;
}

const testText =
  "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid";

const data: Slide[] = [
  { id: "1", text: testText + 1, ReadStats: "40.5", title: "test" },
  { id: "2", text: testText + 2, ReadStats: "75.2", title: "test" },
  { id: "3", text: testText + 3, ReadStats: "100", title: "test" },
  { id: "4", text: testText + 4, ReadStats: "40.5", title: "test" },
  { id: "5", text: testText + 5, ReadStats: "75.2", title: "test" },
  { id: "6", text: testText + 6, ReadStats: "100", title: "gorill" },
  { id: "7", text: testText + 7, ReadStats: "40.5", title: "test" },
  { id: "8", text: testText, ReadStats: "75.2", title: "gorila glue" },
  { id: "9", text: testText, ReadStats: "100", title: "test" },
  { id: "10", text: testText, ReadStats: "40.5", title: "test" },
  { id: "11", text: testText, ReadStats: "75.2", title: "g" },
  { id: "12", text: testText, ReadStats: "100", title: "go" },
];

const CarouselAfterDivider = ({ filterQuery }: Props) => {
  const filteredData =
    filterQuery.length === 0
      ? data
      : data.filter((item) =>
        item.title?.toLowerCase().includes(filterQuery.toLowerCase())
      );

  return (
    <Container>
      <FlatList
        key={"#"}
        data={filteredData}
        renderItem={({ item, index }) => (
          <Separator index={index}>
            <CardAction title={item.title} ReadStats={item.ReadStats}>
              {item.text}
            </CardAction>
          </Separator>
        )}
        numColumns={3}
        contentContainerStyle={{
          width: Dimensions.get("window").width,
          alignItems: "center",
          flexGrow: 1,
          paddingTop: 24,
          paddingBottom: 24,
        }}
        keyExtractor={(item) => item.id + "#"}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<Empty description={"Tente adicioná-los"}>
          Parece que não há livros
        </Empty>}
      />
    </Container>
  );
};

export default CarouselAfterDivider;
