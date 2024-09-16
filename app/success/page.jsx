"use client"
import Image from 'next/image'
import successIcon from "../../app/success-icon.svg"
import failicon from "../../app/fail-icon.png"
import { Button } from '@/components/ui/button'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { Document, Page, Text, View, StyleSheet, Image as Img } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  }
});



const SuccessPage = () => {

  const paymentDetails = [
    // {
    //   label: "Payment Mthood",
    //   value: "bKash"
    // },
    {
      label: "paymentID",
      value: "TR0011r9ugPSj1726429946503"
    },
    {
      label: "trxID",
      value: "BIG70K7QDV"
    },
    {
      label: "date",
      value: "2024-09-16T01:52:47:626 GMT+0600"
    },
    {
      label: "amount",
      value: "390"
    },
    {
      label: "statusMessage",
      value: "Successful"
    },
    {
      label: "transactionStatus",
      value: "Successful"
    },
    {
      label: "currency",
      value: "Completed"
    },
    {
      label: "currency",
      value: "BDT"
    },
    {
      label: "merchantInvoiceNumber",
      value: "Invacb14"
    },
    {
      label: "customerMsisdn",
      value: "01619777283"
    },
    {
      label: "payerReference",
      value: "farhad@nullsto.edu.pl"
    }
  ]

  return (
    <>
      <div className='bg-blue-500 h-[100dvh] flex justify-center items-center'>
        {/* Success Page ✅ */}
        {/* Card */}
        <div className='bg-white w-1/3 rounded-sm p-4'>
          {/* header */}
          <div className='flex items-center'>
            <div><Image src={successIcon} /> </div>
            <div className='text-3xl font-semibold text-green-900 relative -top-3 ms-4'>Payment Successfull</div>
          </div>
          {/* Content */}


          {paymentDetails.map(data => <div key={data.label} className='flex justify-between items-center border-t py-1 even:bg-gray-100 px-4 hover:bg-gray-100'>
            <div>{data.label}</div>
            <div>{data.value}</div>
          </div>)}

          {/* Option */}
          <div className='flex justify-center mt-4 gap-3'>
            <Button className="bg-blue-500 rounded">Print</Button>
            <Button className="rounded bg-green-600">Donwload</Button>

            <PDFDownloadLink document={
              <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.section}>
                        <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvLHseUaj-dSZKJyjkxw3ssHGc1H34BCOR_g&s" style={styles.image} />
                        <Text>Payment Successfull</Text>
                    </View>
                    <View style={styles.section}>
                        <Text>Section #2</Text>
                    </View>
                </Page>
            </Document>
          } filename="FORM.pdf">
              {({ loading }) => (loading ? <button>Loading Document...</button> : <button>Download</button>)}
            </PDFDownloadLink>
          </div>

        </div>
      </div>
    </>
  )
}

export default SuccessPage