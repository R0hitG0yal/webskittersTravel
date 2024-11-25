'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  setTimeout(() => router.push('/demo'), 3000);
  const [image, setImage] = useState<string>('/assets/photo-1530631673369-bc20fdb32288.avif');

  return (<div className="w-[screen] h-[screen] border-2">
    <Image
      src={image}
      width={1000}
      height={1000}
      alt="Splash Image"
      className="m-auto"
    />
  </div>
  );
}
