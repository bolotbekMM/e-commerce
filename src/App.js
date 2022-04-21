import './App.css';
import BasicBreadcrumbs from './components/UI/breadCrumbs/BreadCrumbs';
import Card from './components/UI/card/Card';
import MainCard from './components/UI/card/MainCard';
import Header from './layout/header/Header';
import Routes from './routes/Router';

function App() {
  return (
    <>
      <Card>
        <Header />
        <BasicBreadcrumbs />
        <Routes />
      </Card>
      <MainCard></MainCard>
    </>
  );
}

export default App;
