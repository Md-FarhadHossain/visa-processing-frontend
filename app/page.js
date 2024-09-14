import UserInfo from "@/components/UserInfo";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <div className='flex justify-center items-center lg:text-4xl md:text-3xl text-xl font-semibold w-full'>
          <div id="top_header" className="lg:w-1/2 md:w-1/2 w-full lg:absolute md:absolute lg:p-0 md:p-0 p-4 lg:top-24 md:top-5 relative top- text-center text-pink-900">অর্ডার করতে নিচের ফরমটি পূরণ করে Order Now ক্লিক করে আপনার অর্ডারটি সম্পন্ন করুন।</div>
        </div>
        <div className="flex lg:h-[100dvh] md:h-[100dvh]  items-center justify-center">
          <UserInfo />
        </div>
      </main>
    </div>
  );
}
