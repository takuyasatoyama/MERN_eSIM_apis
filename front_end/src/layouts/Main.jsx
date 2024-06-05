import Header from "./Header";
import Footer from "./Footer";

const Main = ({ children }) => {
  return (
    <div className="max-w-[580px] shadow-lg m-auto">
      <Header></Header>
      <main className="w-[100%]">{children}</main>
      <Footer></Footer>
    </div>
  );
};
export default Main;