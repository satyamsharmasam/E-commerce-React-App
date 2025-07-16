import { Outlet } from 'react-router-dom';
import { Footer, Header, ScrollToTop } from './components';
import Alert from './components/Alert';

const App = () => {
  return (
    <div className='sm:px-[5vw] md:px-[7vw] lg:px-[9vw] px-4 '>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
      <Alert />
    </div>
  );
};

export default App;
