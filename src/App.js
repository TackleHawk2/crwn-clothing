import Directory from "./components/item-directory/directory-render.component";
import categories from './components/item-directory/item-directory.component';

const App = () => {
  return (
    <Directory categories={categories} />
  );
}

export default App;
