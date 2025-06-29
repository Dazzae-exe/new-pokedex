import Navbar from "@/components/layout/Navbar";
import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
