import {statsData} from "@/data/landing.js";
import {featuresData} from "@/data/landing.js"
import Herosection from "@/components/hero";
import { features } from "process";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
export default function Home() {
  return (
    <div className="mt-40">
      <Herosection/>


    <section className="py-20 bg-purple-100 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols md:grid-cols-4 gap-6">
           {statsData.map((statsData, index) => (
             <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue mb-2">{statsData.value}</div>
              <div>{statsData.label}</div>
              
             </div>
           ))}
        </div>
      </div>
    </section>
    <section className="py-20">
      <div>
        {featuresData.map((features,index)=>(
          <Card>
  
  <CardContent>
    {features.icon}
    <h3>{features.title}</h3>
    <p>{features.description}</p>
  </CardContent>
 
</Card>
        ))}
      </div>
    </section>

    </div>
    
  );
}
