import React from "react";
import Image from "next/image";

import { Card, Headliner, Projects, About } from "@/components/portfolio";

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

        <Card className="lg:col-span-2 lg:row-span-4 relative">
          <Image
            src="/me.png"
            alt="Developer portrait"
            fill
            className="object-cover filter grayscale-20 hover:grayscale-0 transition-all duration-300"
          />
        </Card>
      </section>
    </main>
  );
}
