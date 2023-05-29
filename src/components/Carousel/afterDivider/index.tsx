import { CardAction } from "@components/Card/Action";
import { Dimensions, FlatList } from "react-native";
import { Container, Separator } from "./styles";
import { Empty } from "../Empty";
import { Book } from "@storage/MMKV/default";
import { useAsyncStore } from "@storage/MMKV/versaofudida";

interface Props {
  filterQuery: string;
}

const CarouselAfterDivider = ({ filterQuery }: Props) => {
  const { getBookData } = useAsyncStore();
  const data: Book[] = [...((getBookData("allBooks") as Book[]) || [])];

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
            <CardAction
              title={item.title}
              id={item.id}
              uri={item.uri}
              totalRead={item.totalRead}
              inPage={item.inPage}
              image={item.image}
            />
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
        ListEmptyComponent={
          <Empty description={"Tente adicioná-los"}>
            Parece que não há livros
          </Empty>
        }
      />
    </Container>
  );
};

export default CarouselAfterDivider;
