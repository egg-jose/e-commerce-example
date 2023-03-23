import categories from "./assets/categories";
import Directory from "./componets/Directory/Directory";

const App = () => {
  return (
    <>
      <Directory categories={categories} />
    </>
  );
};

export default App;
