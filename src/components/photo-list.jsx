import { Section } from "../styled/style";
import PhotoItem from "./photo-item";

const PhotoList = ({ state }) => {
  return (
    <Section>
      {state.map((item) => (
        <PhotoItem key={item.id} item={item} />
      ))}
    </Section>
  );
};

export default PhotoList;
