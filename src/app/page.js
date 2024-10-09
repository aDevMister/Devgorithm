import Image from "next/image";
import bg from "../../public/background/home-background.jpeg";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
      
        src={bg}
        alt="background-image"
        className="w-full h-full object-cover object-center opacity-25"
      />
      <div className="w-full h-screen">

      </div>
    </main>
  );
}
