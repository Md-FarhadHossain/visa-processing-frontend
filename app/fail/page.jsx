import Image from "next/image"
import failicon from "../../app/fail-icon.png"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const FailPage = () => {
  return (
    <>
      <div className='bg-[#E13938] h-[100dvh] flex justify-center items-center'>
        <div className='bg-white lg:w-1/4 md:w-1/2 rounded-lg p-4 lg:m-0 md:m-0 m-3'>
          {/* icon */}
          <div>
            <Image className="w-10" src={failicon} />
          </div>
          <div className="text-3xl font-bold my-4">
          পেমেন্ট ব্যর্থ হয়েছে
          </div>
          <div className="mb-4 font-semibold text-zinc-600 leading-tight text-sm">
          আপনার পেমেন্ট টি ব্যর্থ হয়েছে। আবার পেমেন্ট করতে নিচের বাটন এ ক্লিক করুন।
          </div>
          <div>
            <Link href="/"><Button className="w-full">আবার পেমেন্ট করুন</Button></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default FailPage