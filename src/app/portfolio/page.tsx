import React from "react";
import Image from "next/image";

import {
  Card,
  Headliner,
  Projects,
  About,
  Links,
  Contact,
  TechStack,
} from "@/components/portfolio";

export default function Page() {
  return (
    <main className="h-screen bg-neutral text-neutral">
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-12 mx-auto p-6 h-full">
        <Card className="lg:col-span-7 lg:row-span-3 flex items-end">
          <Headliner />
        </Card>

        <Card className="lg:col-span-5 lg:row-span-7 flex flex-col">
          <Projects />
        </Card>

        <Card className="lg:col-span-5 lg:row-span-4">
          <About />
        </Card>

        <Card className="lg:col-span-2 lg:row-span-4 relative overflow-hidden">
          <Image
            src="/me.png"
            alt="Developer portrait"
            fill
            className="object-cover filter grayscale-20 hover:grayscale-0 scale-110 hover:scale-115 translate-y-[-5%] transition-all duration-800"
          />
        </Card>
        <Card className="lg:col-span-1 lg:row-span-5">
          <Links />
        </Card>
        <Card className="lg:col-span-5 lg:row-span-5">
          <Contact />
        </Card>
        <Card className="lg:col-span-6 lg:row-span-5">
          <TechStack />
        </Card>
      </section>
    </main>
  );
}
