import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
export default ({ children }) => {
    return (
        <div className="max-w-[580px]  shadow-lg">
            <Header></Header>
            <main className="px-10 py-3">
                {children}
            </main>
            <Footer></Footer>
            {/* <Tabs></Tabs> */}
           
        </div>
    )
}