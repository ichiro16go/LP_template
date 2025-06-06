import React from "react";

import { Card, CardContent, CardHeader, CardTitle,CardDescription } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PlanCardProps {
    title: string;
    description: string;
    price: string;
    features: string[];
    selected:boolean
}

export default function PlanCard({title,description,price,features,selected}:PlanCardProps){
    const cardClass = selected ? "border-2 border-blue-500" : "border";
    return(
        <Card className={cardClass}>
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold mb-4">
            ¥{price}<span className="text-sm font-normal">/月</span>
          </div>
          <ul className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <Check className="text-green-500 mr-2" />
                {feature}
              </li>
            ))}
          </ul>
          <Button className="w-full" variant={selected ? "default" : "outline"}>
            無料で始める
          </Button>
        </CardContent>
      </Card>
    )
}