import Directory from '../../components/item-directory/directory-render.component';
import categories from '../../components/item-directory/item-directory.component';

const Home = () => {
  return <Directory categories={categories} />;
};

export default Home;
