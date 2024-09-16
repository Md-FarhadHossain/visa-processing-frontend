import { Button } from '@/components/ui/button'
import React from 'react'

const HomePage = () => {
  return (
    <>
        <div>
            {/* Header */}
            <div className='text-center w-fll flex  flex-col items-center py-8 gap-4 bg-blue-50'>
                <div className='text-3xl text-green-600 font-bold'>ইউটিউব ও ফেসবুক মনিটাইজেশন কোর্স</div>
                <div className='w-1/3'>এই কোর্সে করে আপনারা মোবাইল অথবা কম্পিউটার এর মাধ্যমে ফেসবুক পেইজ বা ইউটিউব চ্যানেল মাত্র তিন দিনের মধ্যে মনিটাইজ করতে পারবেন</div>
                <div className='text-2xl font-bold'>200$ মূল্যের কোর্স মাত্র</div>
                <div className='text-3xl text-red-500 font-bold'>১৯৯ টাকা</div>
                <div>
                    <Button className="bg-green-600 text-lg font-semibold" size="lg">অডার করতে চাই</Button>
                </div>
            </div>
        </div>
    </>
  )
}

export default HomePage