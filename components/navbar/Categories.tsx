"use client";

import { usePathname, useSearchParams } from "next/navigation";
import ScrollMenu, { VisibilityContext } from "react-horizontal-scrolling-menu";
import CategoryBox from "../CategoryBox";
import Container from "../Container";
import { categories } from "@/data/categoryData";
import React from "react";

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }
  const LeftArrow = () => {
    const { scrollPrev } = React.useContext(VisibilityContext);
    return <button onClick={() => scrollPrev()}>left</button>;
  };

  const RightArrow = () => {
    const { scrollNext } = React.useContext(VisibilityContext);
    return <button onClick={() => scrollNext()}>right</button>;
  };
  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto w-full h-42 overflow-y-scroll no-scrollbar">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
