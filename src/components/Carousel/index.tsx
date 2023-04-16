import { CardAction } from "@components/Card/Action";
import React, { useState } from "react";
import { FlatList } from "react-native";
import { Container } from "./styles";
import { Empty } from "./Empty";
import { Book } from "@storage/MMKV/default";
import { useMMKVStore } from "@storage/MMKV";

const ITEM_WIDTH = 200;
const ITEM_SPACING = 20;

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const { getBookData } = useMMKVStore()

  const data: Book[] = [ 
    ...getBookData('lastBooksRead') as Book[] || []
  ];

  const onScroll = React.useCallback((event: any) => {
    const { contentOffset } = event.nativeEvent;
    const index = Math.round(contentOffset.x / (ITEM_WIDTH + ITEM_SPACING));
    setCurrentIndex(index);
  }, []);

  return (
    <Container>
      <FlatList
        key={"#"}
        data={data}
        renderItem={({ item }) => (
            <CardAction title={item.title} id={item.id} uri={item.uri} inPage={item.inPage} totalRead={item.totalRead} isCarousel={true}/>
        )}
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 24,
          alignItems: "center",
          columnGap: 16,
          marginBottom: 1,
          height: 140,
        }}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        snapToInterval={ITEM_WIDTH + ITEM_SPACING}
        decelerationRate={0.9}
        onScroll={onScroll}
        keyExtractor={(item) => item.id + "#"}
        ListEmptyComponent={<Empty description={"Se você ler algum livro, aparecerá aqui!"}>
          Não há leituras recentes...
        </Empty>}
      />
    </Container>
  );
};

export default Carousel;

