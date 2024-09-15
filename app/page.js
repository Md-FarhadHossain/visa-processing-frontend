import UserInfo from "@/components/UserInfo";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <div className='flex justify-center items-center lg:text-4xl md:text-2xl text-xl font-semibold w-full'>
          <div id="top_header" className="lg:w-1/2 md:w-1/2 w-full lg:absolute md:absolute lg:p-4 md:p-0 p-1 lg:top-10 md:top-0 relative top- text-center text-purple-900 rounded-lg border-purple-600 bg-purple-200 border border-dashed">অর্ডার করতে নিচের ফরমটি পূরণ করে Order Now ক্লিক করে আপনার অর্ডারটি সম্পন্ন করুন।</div>
        </div>
        <div className="flex lg:h-[100dvh] md:h-[100dvh] items-center justify-center">
          <UserInfo />
        </div>
      </main>
    </div>
  );
}
