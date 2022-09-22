import Header from './components/Header';
import Footer from './components/Footer';
import ShipperList from './components/ShipperList';

function App() {
    return (
        <>
            <Header />
            <div className='container mh-650'>

              <ShipperList />

            </div>

            <Footer />
        </>
    );
}

export default App;