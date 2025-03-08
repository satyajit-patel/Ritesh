import React from "react";
import { Compare } from "./compare";

export function CompareDemo() {
  return (
    (<div
      className="p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 px-4">
      <Compare
        firstImage="https://4kwallpapers.com/images/wallpapers/virat-kohli-black-2048x2048-16371.jpeg"
        secondImage="https://res.cloudinary.com/ddo6latuj/image/upload/v1741374389/Ritesh-removebg-preview_ztkuch.png"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[250px] w-[200px]"
        slideMode="hover" />
    </div>)
  );
}
