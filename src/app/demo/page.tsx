"use client"
import { useState } from "react";
import Card from "../../../components/OnboardingCard";
import { useRouter } from "next/navigation";

  
  export default function Demo(){
    const [currentRender, setCurrentRender] = useState<number>(0);
    const router = useRouter();


    const pages = [{
      imageSrc : "/assets/photo-1504598318550-17eba1008a68.avif",
      heading : "Get ready for your next adventure",
      descrition: "Explore thousands of destinations with travellers all around the world."
    },{
      imageSrc : "/assets/premium_photo-1677343210638-5d3ce6ddbf85.avif",
      heading : "Get ready for your next adventure",
      descrition: "Explore thousands of destinations with travellers all around the world."
    },{
      imageSrc : "/assets/photo-1730818203797-897b2838105a.avif",
      heading : "Get ready for your next adventure",
      descrition: "Explore thousands of destinations with travellers all around the world."
    }]

    function handleCardButtonClick() {
      if(currentRender == pages.length-1)
        router.push('/auth/signup');
      setCurrentRender((prev) => (prev < pages.length - 1 ? prev + 1 : 0));
    }

    return <div className=" relative w-screen h-screen mx-auto">
        <img 
        src={pages[currentRender].imageSrc}
        key={currentRender}
        alt='bg-img'
        className="h-screen w-screen -z-10" />
        <div>
        <Card 
        heading={pages[currentRender].heading} 
        description={pages[currentRender].descrition} 
        handleClick={handleCardButtonClick} />
    </div>
    </div>
  }


