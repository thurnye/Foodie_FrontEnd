// src/pages/IntroSpread.tsx
import React from "react";
import { A3CanvasLayout } from "../../Layouts/A3CanvasLayout";
import { About } from "../../components/Rustic_Components/About";
import { TableOfContent } from "../../components/Rustic_Components/TableOfContent";

export default function PageOneTwo() {
  return (
    <A3CanvasLayout>
        <About/>
        <TableOfContent/>
    </A3CanvasLayout>
  );
}
