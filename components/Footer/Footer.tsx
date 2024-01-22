"use client";

import React from "react";
import Image from "next/image";
import Icon from "@/components/icon";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <>
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
                    // onClick={() => setTheme("dark")}
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
