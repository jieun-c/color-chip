import { Article } from "../styled/style";

const PhotoItem = ({ item }) => {
  const { id, albumId, title, url, thumbnailUrl } = item;
  return (
    <Article>
      <img src={thumbnailUrl} alt={title} />
      <div>
        <p>
          Title: {title.slice(0, 60)}
          {title.length > 60 && "..."}
        </p>
        <p>
          <span>AlbumId: {albumId} / </span>
          <span>ID: {id}</span>
        </p>

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
