import { Button } from "@/components/ui/button";
import Image from "next/image";
import bannerImg from "../app/banner.jpg";
import { PinRightIcon } from "@radix-ui/react-icons";
import { CheckCircle } from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";
import OrderNow from "./order-now/page";
import Link from "next/link";

const HomePage = () => {
  const whatToLearnText = [
    {
      label: "পেজ মনিটাইজেশন অ্যাপ্লাই",
    },
    {
      label: "6OK ওয়াচ টাইম কমপ্লিট প্রসেস",
    },
    {
      label: "5k ফলোয়ার কমপ্লিট প্রসেস",
    },
    {
      label: "Google Threshold Method",
    },
    {
      label: "4K ইউটিউব ওয়াচ টাইম প্রসেস",
    },
    {
      label: "1K সাবস্ক্রাইব কমপ্লিট প্রসেস 4K ওয়াচ টাইম কমপ্লিট প্রসেস",
    },
    {
      label: "Page policy issue remove_",
    },
    {
      label: "ইউটিউব থেকে আয়",
    },
    {
      label: "100% SEO করা",
    },
    {
      label: "Unlimited ফেসবুক অ্যাকাউন্ট",
    },
    {
      label: "ক্রিকেট লাইভ",
    },
    {
      label: "ফেসবুক মার্কেটিং",
    },
    {
      label: "সিরিয়াল আপলোড A Z",
    },
    {
      label: "কপিরাইট কোডিং ফাইল",
    },
    {
      label: "e-TIN certificete Apply",
    },
    {
      label: "Professional Video Editing",
    },
    {
      label: "ভিডিও এডিটিং Audio Editing And Graphics",
    },
    {
      label: "এছাড়াও ডেমো ভিডিওতে যা কিছু দেখতে পাচ্ছেন সবকিছুই শিখতে পারবেন",
    },
  ];

  const orderNowSec = [
    {
      label: "কোর্সের মান নিয়ে আপনি নিশ্চিন্ত থাকতে পারেন।",
    },
    {
      label: "প্রিমিয়াম টেলিগ্রাম চ্যানেল",
    },
    {
      label:
        "কোন অংশ ভাল করে না বুঝলে আপনি বার বার টেনে টেনে দেখার সুযোগ পাচ্ছেন।",
    },
    {
      label:
        "কোর্সটি ধারাবাহিক পর্ব আকারে সাজানো এবং বাংলা ভাষায় তৈরি। তাই যে কেউ সহজে বুঝবে।",
    },
    {
      label: "কোর্স শেষে ইনকাম কিভাবে করবেন সবকিছু ভিডিও দেওয়া আছে।",
    },
    {
      label:
        "কোর্সটি পূর্ণাঙ্গ কোর্স, একদম নতুন থেকে শুরু করে এডভান্স লেভেল পর্যন্ত।",
    },
    {
      label: "বাংলায় সবকিছু",
    },
  ];

  const needToKnow = [
    {
      label: "এই কোর্স গুলো বিভিন্ন পেইড ব্যাচের লাইভ রেকোর্ডেড",
    },
    {
      label: "কোনো লাইভ সাপোর্ট থাকবে না",
    },
    {
      label: "মোবাইল ফোন দিয়েও কাজ করতে পারবেন",
    },
    {
      label:
        "কাজ করার প্রবল ইচ্ছা কিন্তু কোনো কোর্সে ভর্তি হতে পারছেন না। তারা এই কোম্বো প্যাকেজ টা ক্রয় করতে পারেন। কিন্তু ক্রয় করে বসে থাকলে কাজ হবেনা। অবশ্যই পরিশ্রমি হতে হবে।",
    },
    {
      label: "অর্ডার করার পর সাথে সাথে আপনার ইমেইল এ এক্সেস পেয়ে যাবেন",
    },
  ];

  return (
    <>
      <div className=" container mx-auto">
        {/* Header */}
        <div className="text-center w-fll flex lg:mt-8 md:mt-4 mt-2 flex-col items-center py-8 gap-4 rounded-lg bg-blue-50 mx-2">
          <div className="lg:text-5xl md:text-4xl text-4xl text-green-600 font-bold">
            ইউটিউব ও ফেসবুক মনিটাইজেশন কোর্স
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full text-lg">
            এই কোর্সে করে আপনারা মোবাইল অথবা কম্পিউটার এর মাধ্যমে ফেসবুক পেইজ বা
            ইউটিউব চ্যানেল মাত্র তিন দিনের মধ্যে মনিটাইজ করতে পারবেন
          </div>
          <div className="text-2xl font-bold">200$ মূল্যের কোর্স মাত্র</div>
          <div className="text-3xl text-red-500 font-bold">১৯৯ টাকা</div>
          <div>
            <Link href="/order-now">
              <Button
                className="bg-green-600 text-lg h-14 font-semibold"
                size="lg"
              >
                অডার করতে চাই
              </Button>
            </Link>
          </div>
        </div>

        {/* Banner seciton */}
        <div className="py-16 flex justify-between lg:flex-row md:flex-col flex-col-reverse
         lg:mx-36 md:mx-36 lg:px-0 md:px-0 px-3 gap-4">
          <div className="">
            <Image className="w-[40rem] rounded" src={bannerImg} />
          </div>
          <div>
            <div className="text-3xl bg-green-900 text-white font-bold text-center py-2 rounded mb-3">
              যা যা শিখবেন
            </div>

            {/* content */}
            <div>
              <div>
                {whatToLearnText.map((data) => (
                  <div
                    className="flex items-center gap-2 py-1 border-b border-green-400 even:bg-green-50 px-2"
                    key={data.label}
                  >
                    <span className="text-green-600">
                      <CheckCircle />
                    </span>
                    <span className="text-lg">{data.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div>
          <div className="text-3xl bg-green-900 text-white font-bold text-center py-2 rounded mb-3 lg:mx-0 md:mx-0 mx-3">
            ডেমো দেখতে ও বিস্তারিত জানতে নিচের ভিডিও টি দেখুন
          </div>

          <div className="flex justify-center">
            <iframe
              className="rounded-md lg:h-[315px] md:h-[315px] h-[14rem] lg:m-0 md:m-0 mx-3"
              width="560"
              // height="315"
              src="https://www.youtube.com/embed/etTie_ZN148?si=QZzfv-sk4XXmg6Dq"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* order now section */}
        <div className="py-16 flex justify-between lg:flex-row md:flex-col flex-col-reverse
         lg:mx-36 md:mx-36 lg:px-0 md:px-0 px-3 gap-4">
          <div className="">
            <Image className="w-[40rem] rounded" src={bannerImg} />
          </div>
          <div>
            <div className="text-3xl bg-green-900 text-white font-bold text-center py-2 rounded mb-3">
              কোর্সের বৈশিষ্ট্য
            </div>

            {/* content */}
            <div>
              <div>
                {orderNowSec.map((data) => (
                  <div
                    className="flex items-center gap-2 py-1 border-b border-green-400 even:bg-green-50 px-2"
                    key={data.label}
                  >
                    <span className="text-green-600">
                      <CheckCircle />
                    </span>
                    <span className="text-lg">{data.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CountdownTimer */}
        <CountdownTimer />

        {/* Need to know */}

        <div className="py-14 flex justify-between lg:mx-14 md:mx-14 mx-3 lg:flex-row md:flex-row flex-col-reverse">
          <div className="">
            <Image className="w-[40rem] rounded" src={bannerImg} />
          </div>
          <div className="lg:w-1/2 md:w-1/2 w-full">
            <div className="text-3xl bg-green-900 text-white font-bold text-center py-2 rounded mb-3">
              যা যা জানা উচিত কিনার আগে
            </div>

            {/* content */}
            <div>
              <div>
                {needToKnow.map((data) => (
                  <div
                    className="flex items-center gap-2 py-1 border-b border-green-400 even:bg-green-50 px-2"
                    key={data.label}
                  >
                    <span className="text-green-600">
                      <CheckCircle />
                    </span>
                    <span className="text-lg">{data.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* What will get */}
        <div className="bg-green-50 rounded-lg pb-8">
          <div className="text-3xl bg-green-900 text-white font-bold text-center py-2 rounded mb-3 lg:mx-0 md:mx-0 mx-3">
            কোর্স এর সাথে বোনাস হিসেবে পাবেন
          </div>
          <div>
            <div className="flex justify-center flex-col items-center gap-4 lg:m-0 md:m-0 mx-3">
              <Image className="w-max rounded" src={bannerImg} />
              <Link href="/order-now"><Button className="bg-green-600 text-lg font-semibold h-14" size="lg">
                অডার করতে চাই
              </Button></Link>
            </div>
          </div>
        </div>

        {/* Order now */}
        <div className="bg-pink-50 rounded-lg mt-8 h-[90dvh]">
          <div className="relative">
            <OrderNow />
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="text-center font-sm font-medium font-mono mt-6 mb-2 text-gray-700">
        Copyright &copy; 2024 Farhad Hossain
      </footer>
    </>
  );
};

export default HomePage;
