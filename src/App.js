import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import './App.css';
import BasicBreadcrumbs from './components/UI/breadCrumbs/BreadCrumbs';
import Card from './components/UI/card/Card';
import MainCard from './components/UI/card/MainCard';
import Footer from './layout/footer/Footer';
import Header from './layout/header/Header';
import Routes from './routes/Router';
// import { getTotals } from './store/cartSlice';
import { getProductsFromServer } from './store/productsAction';

function App() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsFromServer());
    // dispatch(getTotals());
  }, [dispatch]);

  return (
    <>
      <Card>
        <Header />
        {pathnames.length > 0 && <BasicBreadcrumbs />}
      </Card>
      <Routes />
      <Footer />
      <MainCard></MainCard>
    </>
  );
}

export default App;
