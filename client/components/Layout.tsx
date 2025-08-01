import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

const Layout = ({ children, className = "" }: LayoutProps) => {
  return (
    <div className={`min-h-screen flex flex-col ${className}`}>
      <Header />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;