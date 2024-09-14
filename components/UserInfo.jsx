"use client"

import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import axios from 'axios'
import HowToPay from './HowToPay'

import Illustration from '../app/bkash-icon.svg';
import Image from 'next/image'


const UserInfo = () => {

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const { data } = await axios.post(
                "https://visa-processing-backend.vercel.app/api/bkash/payment/create",
                { amount: 100, orderId: 1, payerReference: "hello@gmail.com" },
                { withCredentials: true }
            );
            window.location.href = data.bkashURL;
            console.log(data);
        } catch (error) {
            console.log(error.response.data);
        }
    }

    return (

        <>
            <div>
                <div className='flex lg:flex-row md:flex-col flex-col lg:gap-8 md:gap-8 gap-0 items-center'>
                    <div>
                        <HowToPay />
                    </div>
                    <div className='lg:p-0 md:p-0 p-4 lg:w-[22rem] md:w-[22rem] w-full'>
                        <form onSubmit={handleSubmit} className='bg-white p-6  rounded-lg border shadow-md'>
                            <div>
                                <div className='text-3xl text-black font-semibold mb-4'>অর্ডার করুন</div>
                                {/* <div className='text-gray-400 pb-6'>Lorem ipsum dolor sit amet consectetur.</div> */}
                            </div>
                            <div className="flex items-center flex-col text-black">
                                {/* Name */}
                                <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
                                    <Label htmlFor="user_name" className="">আপনার নাম লিখুন: </Label>
                                    <Input required type="text" id="user_name" />
                                </div>
                                {/* Email */}
                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <Label htmlFor="email">আপনার ইমেইল লিখুন: </Label>
                                    <Input required type="email" id="email" />
                                </div>

                                <div className=' text-right w-full pt-2 flex justify-between'>
                                    <div>Total:</div> <div>--------------------------------</div> <div className='w-1 h-'></div> <div className='font-bold'>৩৯০ ৳</div>
                                </div>


                                <div className='w-full mt-4'>
                                    <Button
                                        type="submit"
                                        className="w-full bg-[#e2136e]"
                                    >
                                        <span className='relative left-1'>Order Now -</span> <Image className='w-12 relative right-2' src={Illustration} />
                                    </Button>
                                </div>


                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserInfo