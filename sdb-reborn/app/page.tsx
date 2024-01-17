"use client";

import { Button } from "@/components/ui/button";
import Image from "@/node_modules/next/image";
import banner from "@/public/banner.webp";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import React, { useState } from "react";
import Icon from "@/components/icon";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Transaction from "@/network/lib/donate";

const components: { title: string; sub_title: Array<any> }[] = [
  {
    title: "Who We Are",
    sub_title: [
      {
        title: "Hover Card12",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
      {
        title: "Hover Card2",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
      {
        title: "Hover Card3",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
    ],
  },
  {
    title: "What We Do",
    sub_title: [
      {
        title: "Hover Card4",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
      {
        title: "Hover Card5",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
      {
        title: "Hover Card6",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
    ],
  },
  {
    title: "About Us",
    sub_title: [
      {
        title: "Hover Card7",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
      {
        title: "Hover Card8",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
      {
        title: "Hover Card9",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
    ],
  },
  {
    title: "Our Work",
    sub_title: [
      {
        title: "Hover Card10",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
      {
        title: "Hover Card11",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
      {
        title: "Hover Card12",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
    ],
  },
  {
    title: "Report",
    sub_title: [
      {
        title: "Hover Card13",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
      {
        title: "Hover Card14",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
      {
        title: "Hover Card15",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
    ],
  },
  {
    title: "Data",
    sub_title: [
      {
        title: "Hover Card16",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
      {
        title: "Hover Card17",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
      {
        title: "Hover Card18",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
    ],
  },
  {
    title: "Contact Us",
    sub_title: [
      {
        title: "Hover Card19",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
      {
        title: "Hover Card20",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
      {
        title: "Hover Card21",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
    ],
  },
];

// export function SheetDemo() {
//   return (
//     <Sheet>
//       <SheetTrigger asChild>
//         <Button variant="outline">Open</Button>
//       </SheetTrigger>
//       <SheetContent>
//         <SheetHeader>
//           <SheetTitle>Edit profile</SheetTitle>
//           <SheetDescription>
//             Make changes to your profile here. Click save when your done.
//           </SheetDescription>
//         </SheetHeader>
//         <div className="grid gap-4 py-4">
//           <div className="grid grid-cols-4 items-center gap-4">
//             <Label htmlFor="name" className="text-right">
//               Name
//             </Label>
//             <Input id="name" value="Pedro Duarte" className="col-span-3" />
//           </div>
//           <div className="grid grid-cols-4 items-center gap-4">
//             <Label htmlFor="username" className="text-right">
//               Username
//             </Label>
//             <Input id="username" value="@peduarte" className="col-span-3" />
//           </div>
//         </div>
//         <SheetFooter>
//           <SheetClose asChild>
//             <Button type="submit">Save changes</Button>
//           </SheetClose>
//         </SheetFooter>
//       </SheetContent>
//     </Sheet>
//   );
// }

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

  // function handleDonate() {
  //   // window.snap.pay("T99487531-b1cd-4d04-8c73-46319680afd2");
  //   window.snap.pay("51870423-c3e9-4329-9edb-b77ef1d7d752", {
  //     onSuccess: function (result) {
  //       /* You may add your own implementation here */
  //       alert("payment success!");
  //       console.log(result);
  //     },
  //     onPending: function (result) {
  //       /* You may add your own implementation here */
  //       alert("wating your payment!");
  //       console.log(result);
  //     },
  //     onError: function (result) {
  //       /* You may add your own implementation here */
  //       alert("payment failed!");
  //       console.log(result);
  //     },
  //     onClose: function () {
  //       /* You may add your own implementation here */
  //       alert("you closed the popup without finishing the payment");
  //     },
  //   });
  // }
  const imageLoader = () => {
    return `https://www.unfpa.org/sites/default/files/styles/common_style/public/home-banner-news/cop28_article_trinidad_1000x560.webp?itok=4gy8tEnh/?w=500&q=75`;
  };
  const imageLoader2 = () => {
    return `https://www.unfpa.org/sites/default/files/styles/common_style/public/home/take_ac_image/Pregnant%20women%20and%20newborns%20are%20among%20the%20most%20vulnerable%20in%20conflict.webp?itok=JlaPOD5H`;
  };
  return (
    <>
      <header className="bg-background py-4 px-6">
        <div className=" mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="text-white text-3xl font-semibold">
              <Image
                src="/logo-sdb.png"
                alt="lama blog"
                width={50}
                height={50}
              />
            </a>
            <h1 className="text-bg text-xl font-semibold ml-4">
              Sedekah Bersama
            </h1>
          </div>

          <nav className=" md:flex space-x-2">
            <a href="#" className="hover:text-gray-300">
              INA
            </a>
            <a href="#" className="hover:text-gray-300">
              ENG
            </a>
          </nav>
        </div>
      </header>

      <header className=" bg-sdb_light py-4 px-8 relative">
        <div className=" mx-auto flex items-center ">
          <a
            href="/"
            className="text-white tablet:hidden text-3xl font-semibold"
          >
            <Icon name="home" />
          </a>

          <nav className="hidden ml-4 lg_tablet:flex ">
            {components.map((component) => (
              <NavigationMenu key={component.title}>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>
                      {component.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="w-[400px] gap-3 p-4 md:w-[100px] lg:w-[200px] ">
                        {component.sub_title.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                          />
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            ))}
          </nav>

          <div className="lg_tablet:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button className="text-white focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Sedekah Bersama</SheetTitle>
                  <SheetDescription>
                    Generasi Millenial Cinta Sedekah
                  </SheetDescription>
                </SheetHeader>
                <Accordion type="single" collapsible>
                  {components.map((item, index) => {
                    return (
                      <AccordionItem key={index} value={item.title}>
                        <AccordionTrigger>{item.title}</AccordionTrigger>
                        {item.sub_title.map((component, index) => (
                          <AccordionContent key={index}>
                            {component.title}
                          </AccordionContent>
                        ))}
                      </AccordionItem>
                    );
                  })}
                </Accordion>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button
                      id="pay-button"
                      size={"lg"}
                      className="large_mobile:mt-8"
                      variant="outline"
                      onClick={() => setTheme("dark")}
                    >
                      Donate
                      <Icon
                        size={20}
                        style={{ marginLeft: 10 }}
                        name="helping-hand"
                      />
                    </Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <Dialog>
          <DialogTrigger className="right-0 w-36 top-0 hover:bg-sdb_darker cursor-pointer bg-sdb_dark h-full absolute">
            <div className="flex flex-row gap-4 items-center justify-center">
              <div>Donate</div>
              <div>
                <Icon size={25} name="helping-hand" />
              </div>
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        {/* <div
          onClick={handleDonate}
          className="right-0 w-36 top-0 hover:bg-sdb_darker cursor-pointer bg-sdb_dark h-full absolute"
        >
          <div className="flex mt-5 flex-row gap-4 items-center justify-center">
            <div>Donate</div>
            <div>
              <Icon size={25} name="helping-hand" />
            </div>
          </div>
        </div> */}
      </header>
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
      <div className="bg-sdb_darker py-10">
        <div className="px-28 tablet:px-12 large_mobile:px-4">
          <div className="flex larger_tablet:flex-col ">
            <div className="flex-none">
              <Image
                src="/logo-sdb.png"
                alt="lama blog"
                width={75}
                height={75}
              />
            </div>
            <div className="flex-1 larger_tablet:py-4 mid_mobile:px-4 ">
              <div className="flex mid_mobile:flex-col">
                <div className="flex-1 larger_tablet:flex-none ">
                  <div className="flex">
                    <div className="flex-1 mobile:flex-none flex mid_mobile:justify-start justify-end">
                      <div className="text-left px-5 mobile:px-0 ">
                        <div>Transparency Portal</div>
                        <div>Sitemap</div>
                        <div>UNFPA Privacy Policy</div>
                        <div>UNFOA worldwide</div>
                      </div>
                    </div>
                    <div className="flex-1 flex justify-end">
                      <div className="text-left px-5">
                        <div>Report wrongdoing</div>
                        <div>Terms of Use</div>
                        <div>Transparancy</div>
                        <div>Contact</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex justify-center w-32 ">
                  <Button
                    size={"lg"}
                    className="large_mobile:mt-8"
                    variant="outline"
                    onClick={() => setTheme("dark")}
                  >
                    Donate
                    <Icon size={20} style={{ marginLeft: 10 }} name="heart" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 my-4" />
        <div className="flex flex-row mid_mobile:flex-col w-full ">
          <div className=" basis-1/2 text-center">
            © All rights reserved. 2024
          </div>
          <div className=" basis-1/2 justify-center flex flex-row gap-4">
            <div>Follow Us</div>
            <div>
              <Icon size={20} name="twitter" />
            </div>
            <div>
              <Icon size={20} name="facebook" />
            </div>
            <div>
              <Icon size={20} name="youtube" />
            </div>
            <div>
              <Icon size={20} name="instagram" />
            </div>
            <div>
              <Icon size={20} name="linkedin" />
            </div>
          </div>
        </div>
      </div>
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
