"use client";

// import { webList, appList, portfolioList, ItemProject } from "@/lib/data";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Icon from "@/components/icon";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { Separator } from "@/components/ui/separator";

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

  function SeparatorDemo() {
    return (
      <div>
        <div className="flex h-5 items-center space-x-4 text-sm">
          <div>Home</div>
          <Separator orientation="vertical" />
          <div>Crisis</div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      {/* <section className="px-4 md:px-8 lg:px-16 xl:px-32 pb-20">text</section> */}
      <div
        className="bg-cover bg-no-repeat h-[70vh] min-h-[400px] max-h-[620px] w-full relative"
        style={{
          backgroundImage:
            'url("https://www.unfpa.org/sites/default/files/home/medium/Gaza%20homepage%20banner%20%C2%A9%20Samar%20Abu%20Elouf%201280x520.jpg")',
        }}
      />
      <div className="container my-14">
        <SeparatorDemo />
        <h2 className=" mt-8 text-5xl font-bold">Palestina</h2>
        <div className="mx-auto py-8">
          <article className="prose text-lg lg:prose-lg">
            <p>
              Yemen remains one of the world’s largest humanitarian crises. In
              2023, a staggering 21.6 million people require some form of
              humanitarian assistance as 80 percent of the country struggles to
              put food on the table and access basic services.
            </p>
            <p>
              Eight years of conflict, compounded by economic collapse, natural
              disasters and the COVID-19 pandemic, have taken an inordinate toll
              on women and girls. The health system has virtually collapsed
              cutting their access to life-saving sexual and reproductive health
              services. Today a woman dies during pregnancy and childbirth every
              two hours from causes which are almost entirely preventable with
              access to services. In 2023, more than 1.5 million pregnant and
              breastfeeding women are projected to suffer acute malnutrition –
              with risks of negative birth outcomes and malnourished infants.
            </p>
            <br />
            <p>
              Violence against women and girls, already high before the
              conflict, has worsened, with displaced women and girls,
              female-headed households and those with disabilities particularly
              at risk. Girls are increasingly vulnerable to child marriage,
              human trafficking and child labour. As needs soar, protection
              systems are at best overstretched or entirely absent.
            </p>
            <p>
              UNFPA’s priority is to ensure that all Yemeni women and girls can
              access services that are vital to their health, well-being and
              lives. As part of the Yemen Humanitarian Response Plan, UNFPA is
              appealing for $70 million in 2023 to reach 3.9 million people.
              With this funding, UNFPA will deliver:
            </p>
          </article>
        </div>
      </div>
      <Footer />
    </>
  );
}
