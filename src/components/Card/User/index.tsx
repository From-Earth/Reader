import {
  Canvas,
  LinearGradient,
  RoundedRect,
  vec,
  useFont,
  Text,
  Image,
  useImage,
} from "@shopify/react-native-skia";
import { ActivityIndicator, Dimensions } from "react-native";
import ReadexPro from "../../../assets/fonts/ReadexPro-Regular.ttf";
import { useMMKVStore } from "@storage/MMKV";
import { Book } from "@storage/MMKV/default";

const width = Dimensions.get("window").width - 48;
const height = 160;

interface Props {
  name: string;
}

export function CardUser({ name }: Props): JSX.Element | null {
  const { getBookData } = useMMKVStore();
  const fontTitle = useFont(ReadexPro, 20);
  const fontNormal = useFont(ReadexPro, 10);
  const imgPath = getBookData("currentlyReading") as Book;
  const image = imgPath && useImage(imgPath.image);

  if (fontTitle === null || fontNormal === null || image === null) {
    return <ActivityIndicator />;
  }

  return (
    <Canvas
      style={{
        width,
        height,
        borderWidth: 2,
        borderColor: "#B5B7C4",
        borderRadius: 6,
        marginTop: 24,
      }}
    >
      <RoundedRect
        x={0}
        y={0}
        height={height}
        width={width}
        r={10}
        opacity={0.125}
      >
        <LinearGradient
          start={vec(0, 0)}
          end={vec(256, 256)}
          colors={["#B5B7C4", "#F4EFEF"]}
        />
      </RoundedRect>
      <Text text={`${name}`} font={fontTitle} y={80} x={48} color={"#B5B7C4"} />
      <Text
        text="Package: regular"
        font={fontNormal}
        y={104}
        x={48}
        color={"#B5B7C4"}
      />
      {imgPath && (
        <Image
          image={image}
          x={width - 84}
          y={64}
          width={60}
          height={60}
          fit="fill"
        />
      )}
      {imgPath && (
        <Text
          text="Last read"
          font={fontNormal}
          y={48}
          x={width - 84}
          color={"#B5B7C4"}
        />
      )}
    </Canvas>
  );
}
