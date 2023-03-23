import "./directoryContainer.style.scss";
import CategoryItem from "../CategoryItem/CategoryItem";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem {...category} key={category.id} />
      ))}
    </div>
  );
};

export default Directory;
