import CateogoryItem from "../CategoryItem/CategoryItem";
import "./categories.styles.scss";

const Categories = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CateogoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Categories;
