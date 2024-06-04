import Header from "./Header";
import Footer from "./Footer";
// import Tabs from "./Tabs";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default ({ children }) => {
    return (
        <div className="max-w-[580px] m-auto">
            <Header></Header>
            <main className="p-20">
                {children}
            </main>
            <Footer></Footer>
            {/* <Tabs></Tabs> */}

        </div>
    )
}