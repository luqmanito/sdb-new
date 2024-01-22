"use client";

import { Button } from "@/components/ui/button";
import Image from "@/node_modules/next/image";
import banner from "@/public/banner.webp";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import React, { useState } from "react";
import Icon from "@/components/icon";
import { Separator } from "@/components/ui/separator";
import Transaction from "@/network/lib/donate";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  const { setTheme } = useTheme();
  const [openDonate, setOpenDonate] = useState(false);

  const confirmTransactionEvent = async () => {
    // startLoading();
    try {
      const response = await Transaction.create({
        transaction_details: {
          gross_amount: 50000,
          order_id: "sajd12",
        },
      });
      if (response) {
        console.log(response);
      }
      return response;
    } catch (error: any) {
      console.log(error);
    }
  };

  const imageLoader = () => {
    return `https://www.unfpa.org/sites/default/files/styles/common_style/public/home-banner-news/cop28_article_trinidad_1000x560.webp?itok=4gy8tEnh/?w=500&q=75`;
  };
  const imageLoader2 = () => {
    return `https://www.unfpa.org/sites/default/files/styles/common_style/public/home/take_ac_image/Pregnant%20women%20and%20newborns%20are%20among%20the%20most%20vulnerable%20in%20conflict.webp?itok=JlaPOD5H`;
  };
  return (
    <>
      <Navbar />
      <div
        className="bg-cover bg-no-repeat h-[70vh] min-h-[400px] max-h-[620px] w-full relative"
        style={{
          backgroundImage:
            'url("https://www.unfpa.org/sites/default/files/home/medium/Gaza%20homepage%20banner%20%C2%A9%20Samar%20Abu%20Elouf%201280x520.jpg")',
        }}
      >
        <div className="absolute bottom-7 left-7 space-x-4">
          <h2 className="text-white leading-5 w-7/12 mb-6 ml-4">
            <a
              href="https://www.unfpa.org/crisis-gaza"
              className=" text-left text-5xl font-bold"
            >
              Crisis in the occupied Palestinian territory
            </a>
          </h2>
          <Button variant={"sdb"} onClick={() => setTheme("light")}>
            <Icon size={20} style={{ marginRight: 10 }} name="book-open" />
            Read More
          </Button>
          <Button variant={"sdb_light"} onClick={() => setTheme("dark")}>
            <Icon size={20} style={{ marginRight: 10 }} name="heart" />
            Donate Now
          </Button>
        </div>
      </div>
      <div className="container justify-center py-16 flex items-stretch flex-row">
        <div className="relative flex flex-row items-center min-h-[238px] tablet:flex-col ">
          <div className="relative  w-7/12 tablet:w-full group overflow-hidden ">
            <Image
              className="transform transition-transform duration-1000 ease-linear hover:scale-110"
              src={banner}
              alt="lama blog"
            />
          </div>
          <div className="absolute shadow-3xl flex items-center bg-background right-0 max-w-[538px] tablet:relative tablet:-mt-16 mobile:-mt-4 mobile:mx-4 tablet:mx-4 ">
            <div className="p-8 ">
              <p className="mb-4">News</p>
              <a
                href=""
                className="text-3xl tablet:text-2xl mobile:text-xl font-semibold  "
              >
                “Part of the solution”: Men and boys in Uganda work to stop
                cycles of gender-based violence
              </a>
              <div className="mt-10">
                <a className="left-8 border-b-2 border-b-sdb" href="">
                  Read the story
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container ">
        <div className="flex pb-10 flex-row tablet:flex-col tablet:gap-5 ">
          <div className="basis-1/3 flex justify-center">
            <div className=" w-3/4 mobile:w-full shadow-3xl ">
              <div className="relative group overflow-hidden ">
                <Image
                  className="transform h-full w-full object-cover transition-transform duration-1000 ease-linear hover:scale-110"
                  loader={imageLoader}
                  src="me.png"
                  alt="Picture of the author"
                  width={500}
                  height={500}
                />
              </div>
              <div className=" flex items-center bg-background right-0 tablet:relative ">
                <div className="p-8 overflow-hidden">
                  <p className="mb-4">News</p>
                  <a href="" className="text-2xl tablet:text-xl font-semibold">
                    UNFPA urges leaders to address gendered, discriminatory
                    impacts of climate change at COP28
                  </a>
                  <div className="mt-10">
                    <a className=" left-8 border-b-2 border-b-sdb" href="">
                      Read the story
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-1/3 flex justify-center">
            <div className=" w-3/4 mobile:w-full shadow-3xl ">
              <div className="relative group overflow-hidden ">
                <Image
                  className="transform h-full w-full object-cover transition-transform duration-1000 ease-linear hover:scale-110"
                  loader={imageLoader}
                  src="me.png"
                  alt="Picture of the author"
                  width={500}
                  height={500}
                />
              </div>
              <div className=" flex items-center bg-background right-0 tablet:relative ">
                <div className="p-8 overflow-hidden">
                  <p className="mb-4">News</p>
                  <a href="" className="text-2xl tablet:text-lg font-semibold">
                    UNFPA urges leaders to address gendered, discriminatory
                    impacts of climate change at COP28
                  </a>
                  <div className="mt-10">
                    <a className=" left-8 border-b-2 border-b-sdb" href="">
                      Read the story
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-1/3 flex justify-center">
            <div className=" w-3/4 mobile:w-full shadow-3xl ">
              <div className="relative group overflow-hidden ">
                <Image
                  className="transform h-full w-full object-cover transition-transform duration-1000 ease-linear hover:scale-110"
                  loader={imageLoader}
                  src="me.png"
                  alt="Picture of the author"
                  width={500}
                  height={500}
                />
              </div>
              <div className=" flex items-center bg-background right-0  tablet:relative ">
                <div className="p-8 overflow-hidden">
                  <p className="mb-4">News</p>
                  <a href="" className="text-2xl tablet:text-lg font-semibold">
                    UNFPA urges leaders to address gendered, discriminatory
                    impacts of climate change at COP28
                  </a>
                  <div className="mt-10">
                    <a className=" left-8 border-b-2 border-b-sdb" href="">
                      Read the story
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid place-items-center pb-16 mt-8">
        <Button
          className="w-1/4 mobile:w-3/4"
          variant="outline"
          size={"xl"}
          // onClick={() => setTheme("dark")}
          onClick={confirmTransactionEvent}
          // onClick={confirmTransactionEvent}
        >
          <p className="text-sdb text-base">SEE THE LATEST</p>
        </Button>
      </div>

      <div className="  bg-sdb_light pt-16 flex flex-row tablet:flex-col">
        <div className="basis-[10%] flex relative">
          <h1 className="text-background text-5xl text-black mobile:text-3xl w-96 font-semibold -rotate-90 absolute left-[95%] top-[40%] transform -translate-x-1/2 -translate-y-1/2 tablet:rotate-0 tablet:static tablet:translate-x-0 tablet:translate-y-0 tablet:mx-6">
            Take Action
          </h1>
        </div>
        <div className="basis-[90%] pt-8 flex flex-row tablet:flex-col">
          <div className="basis-2/5 px-8 ">
            <h1 className="text-bg text-black text-3xl mobile:text-xl text-background font-semibold">
              Pregnant women and newborns are among the most vulnerable in
              conflict
            </h1>
            <p className="py-8 text-black text-background text-lg">
              UNFPA is critically concerned for women and girls in Gaza,
              including the estimated 50,000 pregnant women – of whom 5,522 are
              expected to deliver in the next month; these women are cut off
              from safe delivery services as hospitals come under attack and the
              health system unravels, with life-saving medicines, fuel and
              electricity running out
            </p>
            <p className="text-lg text-black text-background pb-8">
              Help us deliver essential healthcare services to women in Gaza.
            </p>

            <Button
              className="w-full "
              variant={"sdb_light"}
              size={"xl"}
              onClick={() => setTheme("dark")}
            >
              <p className="text-sdb font-semibold text-base">DONATE TODAY</p>
            </Button>
          </div>
          <div className="basis-3/5 relative">
            <div className="relative group ">
              <Image
                className="relative pb-8 tablet:transform tablet:translate-y-[5%] mobile:translate-y-[15%] h-full w-3/4 tablet:w-full tablet:px-8 mobile:px-6 object-cover"
                loader={imageLoader2}
                src="me.png"
                alt="Picture of the author"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container ">
        <h1 className="text-2xl  font-semibold ml-14 pt-16 pb-6">
          16 Days of Activism Against Gender-Based Violence
        </h1>
        <div className="flex pb-10 flex-row tablet:flex-col tablet:gap-5 ">
          <div className="basis-1/3 flex justify-center">
            <div className=" w-3/4 mobile:w-full shadow-3xl ">
              <div className="relative group overflow-hidden ">
                <Image
                  className="transform h-full w-full object-cover transition-transform duration-1000 ease-linear hover:scale-110"
                  loader={imageLoader}
                  src="me.png"
                  alt="Picture of the author"
                  width={500}
                  height={500}
                />
              </div>
              <div className=" flex items-center bg-background right-0 tablet:relative ">
                <div className="p-8 overflow-hidden">
                  <p className="mb-4">News</p>
                  <a href="" className="text-xl tablet:text-xl font-semibold">
                    UNFPA urges leaders to address gendered, discriminatory
                    impacts of climate change at COP28
                  </a>
                  <div className="mt-10">
                    <a className=" left-8 border-b-2 border-b-sdb" href="">
                      Read the story
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-1/3 flex justify-center">
            <div className=" w-3/4 mobile:w-full shadow-3xl ">
              <div className="relative group overflow-hidden ">
                <Image
                  className="transform h-full w-full object-cover transition-transform duration-1000 ease-linear hover:scale-110"
                  loader={imageLoader}
                  src="me.png"
                  alt="Picture of the author"
                  width={500}
                  height={500}
                />
              </div>
              <div className=" flex items-center bg-background right-0 tablet:relative ">
                <div className="p-8 overflow-hidden">
                  <p className="mb-4">News</p>
                  <a href="" className="text-xl tablet:text-lg font-semibold">
                    UNFPA urges leaders to address gendered, discriminatory
                    impacts of climate change at COP28
                  </a>
                  <div className="mt-10">
                    <a className=" left-8 border-b-2 border-b-sdb" href="">
                      Read the story
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-1/3 flex justify-center">
            <div className=" w-3/4 mobile:w-full shadow-3xl ">
              <div className="relative group overflow-hidden ">
                <Image
                  className="transform h-full w-full object-cover transition-transform duration-1000 ease-linear hover:scale-110"
                  loader={imageLoader}
                  src="me.png"
                  alt="Picture of the author"
                  width={500}
                  height={500}
                />
              </div>
              <div className=" flex items-center bg-background right-0  tablet:relative ">
                <div className="p-8 overflow-hidden">
                  <p className="mb-4">News</p>
                  <a href="" className="text-xl tablet:text-lg font-semibold">
                    UNFPA urges leaders to address gendered, discriminatory
                    impacts of climate change at COP28
                  </a>
                  <div className="mt-10">
                    <a className=" left-8 border-b-2 border-b-sdb" href="">
                      Read the story
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid place-items-center pb-16 mt-8">
        <Button
          className="w-1/4 mobile:w-3/4"
          variant="outline"
          size={"xl"}
          onClick={() => setTheme("dark")}
        >
          <p className="text-sdb text-base">ALL CAMPAIGNS</p>
        </Button>
      </div>
      <div className=" bg-sdb_lighter pt-16 flex flex-row tablet:flex-col">
        <div className="basis-[10%] flex relative">
          <h1 className="text-black text-5xl mobile:text-3xl w-96 font-semibold -rotate-90 absolute left-[95%] top-[40%] transform -translate-x-1/2 -translate-y-1/2 tablet:rotate-0 tablet:static tablet:translate-x-0 tablet:translate-y-0 tablet:mx-6">
            EVENTS
          </h1>
        </div>
        <div className=" basis-[90%] pt-8 flex-col flex pl-8">
          <div className="flex  flex-col w-[90%]">
            <div className="flex flex-row mobile:flex-col">
              <div className="basis-4/5 text-black ">
                <p>24 November 2023</p>
                <h1 className="text-xl  mobile:text-xl font-semibold">
                  16 Days of Activism Against Gender-Based Violence 2023
                </h1>
              </div>
              <div className="basis-1/5 flex justify-end mobile:justify-start mt-4">
                <p className="underline text-black underline-offset-4">
                  See More
                </p>
              </div>
            </div>
            <Separator className="my-8 bg-black" />
          </div>
          <div className="flex  flex-col w-[90%]">
            <div className="flex flex-row mobile:flex-col">
              <div className="basis-4/5 text-black ">
                <p>24 November 2023</p>
                <h1 className="text-xl mobile:text-xl font-semibold">
                  16 Days of Activism Against Gender-Based Violence 2023
                </h1>
              </div>
              <div className="basis-1/5 flex justify-end mobile:justify-start mt-4">
                <p className="underline text-black underline-offset-4">
                  See More
                </p>
              </div>
            </div>
            <Separator className="my-8 bg-black" />
          </div>
          <div className="flex flex-col w-[90%]">
            <div className="flex flex-row mobile:flex-col">
              <div className="basis-4/5 text-black">
                <p>24 November 2023</p>
                <h1 className="text-xl mobile:text-xl font-semibold">
                  16 Days of Activism Against Gender-Based Violence 2023
                </h1>
              </div>
              <div className="basis-1/5 flex justify-end mobile:justify-start mt-4">
                <p className="underline text-black underline-offset-4">
                  See More
                </p>
              </div>
            </div>
            <Separator className="my-8 bg-black" />
          </div>
          <div className="flex flex-col w-[90%]">
            <div className="flex flex-row mobile:flex-col">
              <div className="basis-4/5 text-black">
                <p>24 November 2023</p>
                <h1 className="text-xl mobile:text-xl font-semibold">
                  16 Days of Activism Against Gender-Based Violence 2023
                </h1>
              </div>
              <div className="basis-1/5 flex justify-end mobile:justify-start mt-4">
                <p className="underline text-black underline-offset-4">
                  See More
                </p>
              </div>
            </div>
            <Separator className="my-8 bg-black" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
