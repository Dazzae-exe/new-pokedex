import RootLayout from "@/layout/RootLayout.tsx";
import HomePage from "./pages/home/Home";
import PokedexPage from "./pages/pokedex/Pokedex";

import { createBrowserRouter, RouterProvider } from "react-router";

const pokeRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "pokedex", element: <PokedexPage /> }
    ],
  },
]);

function App() {
  return <RouterProvider router={pokeRouter} />;
}

export default App;
