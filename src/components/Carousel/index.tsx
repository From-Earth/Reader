import { CardAction } from "@components/Card/Action";
import React, { useState } from "react";
import { FlatList } from "react-native";
import { Container } from "./styles";
import { Empty } from "./Empty";

interface Slide {
  id: string;
  ReadStats: string;
  text: string;
  title: string;
}

interface CardProps {
  ReadStats: string;
  text: string;
  title: string;
}

const ITEM_WIDTH = 200;
const ITEM_SPACING = 20;

const testText =
  "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid";

const Card: React.FC<CardProps> = ({ ReadStats, text, title }) => {
  return (
    <CardAction title={title} ReadStats={ReadStats}>
      {text}
    </CardAction>
  );
};

let renderItem = ({ item }: { item: Slide }) => {
  return (
    <Card title={item.title} ReadStats={item.ReadStats} text={item.text} />
  );
};

const data: Slide[] = [
  { id: "1", text: testText + 1, ReadStats: "40.5", title: "test" },
  { id: "2", text: testText + 2, ReadStats: "75.2", title: "test" },
  { id: "3", text: testText + 3, ReadStats: "100", title: "test" },
  { id: "4", text: testText + 4, ReadStats: "40.5", title: "test" },
  { id: "5", text: testText + 5, ReadStats: "75.2", title: "test" },
  { id: "6", text: testText + 6, ReadStats: "100", title: "gorill" },
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

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
        renderItem={renderItem}
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
