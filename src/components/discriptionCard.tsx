import React from "react";
import { Card,CardHeader,CardTitle,CardContent } from "./ui/card";

interface DescriptionCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export default function DescriptionCard(descriptionSection: DescriptionCardProps) {
    return (
        <Card>
        <CardHeader>
          {descriptionSection.icon}
          <CardTitle>{descriptionSection.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            {descriptionSection.description}
          </p>
        </CardContent>
      </Card>
    );

}