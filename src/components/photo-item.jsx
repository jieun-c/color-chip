import { Article } from "../styled/style";

const PhotoItem = ({ item }) => {
  const { id, albumId, title, url, thumbnailUrl } = item;
  return (
    <Article>
      <img src={thumbnailUrl} alt={title} />
      <div>
        <p>Title: {title}</p>
        <p>AlbumId: {albumId}</p>
        <p>ID: {id}</p>
        <p>
          <a href={url} target="_blank" rel="noopener noreferrer">
            Link
          </a>
        </p>
      </div>
    </Article>
  );
};

export default PhotoItem;
