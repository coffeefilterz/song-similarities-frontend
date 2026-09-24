import { Outlet } from "react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MainLayout = () => {
  return (
    <div className="l-main">
      <div className="header-container">
        <Header className="header" />
      </div>
      <div className="content-container">
        <main className="content">
          <Outlet />
        </main>
      </div>
      <div className="footer-container">
        <Footer className="footer" />
      </div>
    </div>
  );
};

export default MainLayout;
