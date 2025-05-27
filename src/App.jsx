import { Route, Routes } from "react-router-dom";
import Barres from "./pages/Barres";
import Estampage from "./pages/Estampage";
import ForgeLibre from "./pages/Forge-libre";
import { Home } from "./pages/Home";
import LaminageCirculaire from "./pages/Laminage-circulaire";
import { Layout } from "./pages/Layout";
import { MentionsLegals } from "./pages/Mentions-legals";
import Oxycoupage from "./pages/Oxycoupage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/barres" element={<Barres />} />
        <Route path="/oxycoupage" element={<Oxycoupage />} />
        <Route path="/estampage" element={<Estampage />} />
        <Route path="/forge-libre" element={<ForgeLibre />} />
        <Route path="/laminage-circulaire" element={<LaminageCirculaire />} />
        <Route path="/mentions-legales" element={<MentionsLegals />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
