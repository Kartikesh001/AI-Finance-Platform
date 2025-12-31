import Herosection from "@/components/hero";
import {howItWorksData} from "@/data/landing";
import {testimonialsData} from "@/data/landing";
import Image from "next/image";
import { statsData, featuresData } from "@/data/landing";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="mt-40">
      <Herosection />

      {/* STATS SECTION */}
      <section className="py-20 bg-purple-100 mt-4 ">
        <div className="container mx-auto px-4">
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statsData.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold  mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-15">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-700 ">Everything you need to manage your finances</h2>
        <div className="container mx-auto px-4 grid gap-6 md:grid-cols-3">
  
          {featuresData.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardHeader className="flex flex-col items-center gap-3  font-bold text-xl">
                {feature.icon}
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground text-semibold">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section className="py-15 bg-blue-100">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-700 ">How it Works</h2>
        <div className=" grid grid-cols-1 gap-6 md:grid-cols-3">
  
          {howItWorksData.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-1">{step.icon}</div>
              <h3 className="text-semibold mb-1 text-xl">{step.title}</h3>
              <p className="text-gray-600  ">{step.description}</p>


            </div>
          ))}
        </div>
      </section>
      <section className="py-20">
  <h2 className="text-3xl font-bold text-center mb-10 text-gray-700">
    Testimonials
  </h2>

  <div className="container mx-auto px-4 grid gap-6 md:grid-cols-3">
    {testimonialsData.map((testimonial, index) => (
      <Card key={index} className="text-center p-6">
        <CardContent>
          {/* Avatar + Name */}
          <div className="flex items-center justify-center mb-4">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={48}
              height={48}
              className="rounded-full"
            />
            <div className="ml-4 text-left">
              <div className="font-semibold">
                {testimonial.name}
              </div>
              <div className="text-gray-500 text-sm">
                {testimonial.role}
              </div>
            </div>
          </div>

          {/* Quote */}
          <p className="text-gray-600 italic">
            “{testimonial.quote}”
          </p>
        </CardContent>
      </Card>
    ))}
  </div>
</section>





      
    </div>
  );
}
