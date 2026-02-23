import * as React from "react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

// Imports remain the same...
import img1 from "../assets/tbc1.jpeg";
import img2 from "../assets/tbc2.jpeg";
import img3 from "../assets/team-photo.jpeg";
import img4 from "../assets/tbc4.jpeg";
import img5 from "../assets/tbc5.jpeg";
import img6 from "../assets/tbc6.jpeg";
import img7 from "../assets/tbc7.jpeg";
import img8 from "../assets/tbc8.jpeg";
import img9 from "../assets/tbc9.jpeg";
import img10 from "../assets/tbc10.jpeg";
import img11 from "../assets/tbc11.jpeg";
import img12 from "../assets/tbc12.jpeg";
import img13 from "../assets/tbc13.jpeg";
import img14 from "../assets/tbc14.jpeg";

function MyCarousel() {
  const [theImg, setTheImg] = useState(null);

  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
  ];

  return (
    <div className="w-full flex justify-center px-12 py-10">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-5xl"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {images.map((image, index) => (
            <AlertDialog key={index}>
              <AlertDialogTrigger asChild>
                <CarouselItem
                  // FIX: Removed 'image' from the argument list to use the one from .map()
                  onClick={() => {
                    setTheImg(image);
                  }}
                  className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 cursor-pointer"
                >
                  <div className="p-1">
                    <Card className="overflow-hidden border-none shadow-md bg-slate-100">
                      <CardContent className="flex aspect-square p-0 items-center justify-center">
                        <img
                          src={image}
                          alt={`Gallery image ${index + 1}`}
                          className="w-full h-[400px] object-cover transition-transform hover:scale-105 duration-300"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              </AlertDialogTrigger>

              <AlertDialogContent className="max-w-screen z-900">
                <AlertDialogHeader>
                  <AlertDialogTitle>Gallery Preview</AlertDialogTitle>
                  <AlertDialogDescription className="w-full h-full flex items-center justify-center">
                    <img
                      src={theImg}
                      className="w-full max-h-[60vh] object-contain rounded-lg shadow-sm"
                      alt="Selected preview"
                    />
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel
                    className="border border-red-500 bg-red-500 text-white hover:bg-red-600"
                    onClick={() => setTheImg(null)}
                  >
                    Close
                  </AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-12" />
        <CarouselNext className="-right-12" />
      </Carousel>
    </div>
  );
}

export default MyCarousel;
