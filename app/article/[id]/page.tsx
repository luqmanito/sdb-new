"use client";

// import { webList, appList, portfolioList, ItemProject } from "@/lib/data";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
// import Navbar from "@/components/Navbar/navbar";
// import { FaLink } from "react-icons/fa";

export default function DetailProjectPage() {
  const params = useParams();
  // const [project, setProject] = useState<ItemProject | null>(null);

  // const findItemInList = (lists: ItemProject[][], id: string) => {
  //   for (const list of lists) {
  //     const foundItem = list.find((item) => item.url === id);
  //     if (foundItem) {
  //       setProject(foundItem);
  //     }
  //   }
  //   return null;
  // };
  // useEffect(() => {
  //   findItemInList([webList], params.id);
  //   findItemInList([appList], params.id);
  //   findItemInList([portfolioList], params.id);
  // }, [params.id]);

  return (
    <>
      <Navbar />
      <section className="px-4 md:px-8 lg:px-16 xl:px-32 pb-20">text</section>
    </>
  );
}
