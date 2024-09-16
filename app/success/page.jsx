"use client"

import Image from 'next/image'
import successIcon from "../../app/success-icon.svg"
import { Button } from '@/components/ui/button'
import dynamic from 'next/dynamic'

const PDFDownloadButton = dynamic(() => import('../../components/PDFDownloadButton'), { 
  ssr: false,
  loading: () => <button>Loading Document...</button>
})

const SuccessPage = () => {


  const paymentDetails = [
    { label: "paymentID", value: "TR0011r9ugPSj1726429946503" },
    { label: "trxID", value: "BIG70K7QDV" },
    { label: "date", value: "2024-09-16T01:52:47:626 GMT+0600" },
    { label: "amount", value: "390" },
    { label: "statusMessage", value: "Successful" },
    { label: "transactionStatus", value: "Successful" },
    { label: "currency", value: "Completed" },
    { label: "currency", value: "BDT" },
    { label: "merchantInvoiceNumber", value: "Invacb14" },
    { label: "customerMsisdn", value: "01619777283" },
    { label: "payerReference", value: "farhad@nullsto.edu.pl" }
  ]

  return (
    <div className='bg-blue-500 h-[100dvh] flex justify-center items-center'>
      <div className='bg-white w-1/3 rounded-sm p-4'>
        <div className='flex items-center'>
          <div><Image src={successIcon} alt="Success Icon" /></div>
          <div className='text-3xl font-semibold text-green-900 relative -top-3 ms-4'>Payment Successful</div>
        </div>
        
        {paymentDetails.map(data => (
          <div key={data.label} className='flex justify-between items-center border-t py-1 even:bg-gray-100 px-4 hover:bg-gray-100'>
            <div>{data.label}</div>
            <div>{data.value}</div>
          </div>
        ))}
        
        <div className='flex justify-center mt-4 gap-3'>
          <Button className="bg-blue-500 rounded">Print</Button>
          
          <PDFDownloadButton paymentDetails={paymentDetails} />
        </div>
      </div>
    </div>
  )
}

export default SuccessPage