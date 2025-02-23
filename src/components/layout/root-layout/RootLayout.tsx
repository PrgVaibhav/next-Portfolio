import { Outlet } from "react-router-dom";
import { Navbar } from "../navbar/Navbar";

export const RootLayout = () => {
  return (
    <div className="w-full p-4 sm:p-0 sm:w-[50vw] m-auto flex flex-col gap-4  sm:gap-[1vw]">
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>{/* Footer */}</footer>
    </div>
  );
};
