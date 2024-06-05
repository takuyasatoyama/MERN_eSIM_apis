import Header from "./Header";
import Footer from "./Footer";

const Main = ({ children }) => {
  return (
    <div className="max-w-[580px]  shadow-lg">
      <Header></Header>
      <main className="px-10 py-3">{children}</main>
      <Footer></Footer>
    </div>
  );
};
export default Main;