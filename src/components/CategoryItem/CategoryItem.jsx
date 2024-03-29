import "./categories-item-styles.scss";

const CateogoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Show now</p>
      </div>
    </div>
  );
};

export default CateogoryItem;
