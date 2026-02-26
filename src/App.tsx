import type { ComponentType } from "react";
import { Navigate, Route, Routes, useParams } from "react-router-dom";

type SupportModule = { SupportPage: ComponentType };
type PrivacyModule = { PrivacyPage: ComponentType };

const supportModules = import.meta.glob("./pages/*/SupportPage.tsx", { eager: true }) as Record<
  string,
  SupportModule
>;
const privacyModules = import.meta.glob("./pages/*/PrivacyPage.tsx", { eager: true }) as Record<
  string,
  PrivacyModule
>;

function ProductSupportRoute() {
  const { product = "lingshot" } = useParams();
  const key = `./pages/${product}/SupportPage.tsx`;
  const fallbackKey = "./pages/lingshot/SupportPage.tsx";
  const Page = supportModules[key]?.SupportPage || supportModules[fallbackKey]?.SupportPage;
  return Page ? <Page /> : <Navigate to="/lingshot" replace />;
}

function ProductPrivacyRoute() {
  const { product = "lingshot" } = useParams();
  const key = `./pages/${product}/PrivacyPage.tsx`;
  const fallbackKey = "./pages/lingshot/PrivacyPage.tsx";
  const Page = privacyModules[key]?.PrivacyPage || privacyModules[fallbackKey]?.PrivacyPage;
  return Page ? <Page /> : <Navigate to="/lingshot/privacy" replace />;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/lingshot" replace />} />
      <Route path="/:product" element={<ProductSupportRoute />} />
      <Route path="/:product/privacy" element={<ProductPrivacyRoute />} />
      <Route path="*" element={<Navigate to="/lingshot" replace />} />
    </Routes>
  );
}

export default App;
