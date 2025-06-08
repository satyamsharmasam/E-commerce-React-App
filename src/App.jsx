import { Outlet } from 'react-router-dom';
import { Footer, Header, ScrollToTop } from './components';

const App = () => {
  return (
    <div className='sm:px-[5vw] md:px-[7vw] lg:px-[9vw] px-4 '>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
