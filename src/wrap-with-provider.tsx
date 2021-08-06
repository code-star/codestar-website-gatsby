import React from "react";
import Layout from "./components/layout";

export default function wrapWithProvider({
  element,
}: {
  element: React.ReactNode;
}) {
  return <Layout>{element}</Layout>;
}
