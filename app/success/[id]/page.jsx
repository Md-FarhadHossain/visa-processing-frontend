import Image from "next/image";
import successIcon from "../../../app/success-icon.svg";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import PrintBtn from "@/components/PrintBtn";

const PDFDownloadButton = dynamic(
  () => import("../../../components/PDFDownloadButton"),
  {
    ssr: false,
    loading: () => <button>Loading Document...</button>,
  }
);

const TransId = async ({ params }) => {
  const response = await fetch(
    `https://visa-processing-backend.vercel.app/payments/${params.id}`
  );
  const usersData = await response.json();

  // Format the date
  const originalDate = usersData.date;
  let formattedDate = "Date not available";

  // Parse the date string using regex
  const parsedDate = originalDate.match(
    /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/
  );

  if (parsedDate) {
    const [, year, month, day, hour, minute] = parsedDate;

    // Create an array of month names
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Convert hour to 12-hour format and determine AM/PM
    let hour12 = parseInt(hour);
    let ampm = hour12 >= 12 ? "PM" : "AM";
    hour12 = hour12 % 12;
    hour12 = hour12 ? hour12 : 12; // the hour '0' should be '12'

    // Format the date string
    formattedDate = `${monthNames[parseInt(month) - 1]} ${parseInt(
      day
    )}, ${year} at ${hour12.toString().padStart(2, "0")}:${minute.padStart(
      2,
      "0"
    )} ${ampm}`;
  }

  // Add the formatted date to usersData
  usersData.formattedDate = formattedDate;

  const paymentDetails = [
    { label: "P.ID", value: usersData.paymentID },
    { label: "Trx ID", value: usersData.trxID },
    { label: "Date", value: usersData.formattedDate },
    { label: "Amount", value: usersData.amount },
    { label: "Status Message", value: usersData.statusMessage },
    { label: "Transaction Status", value: usersData.transactionStatus },
    { label: "Currency", value: usersData.currency },
    {
      label: "Merchant Invoice Number",
      value: usersData.merchantInvoiceNumber,
    },
    { label: "Customer Msisdn", value: usersData.customerMsisdn },
    { label: "Payer Reference", value: usersData.payerReference },
  ];

  return (
    <div className="bg-blue-500 h-[100dvh] flex justify-center items-center">
      <div className="bg-white lg:w-1/3 md:w-1/2 rounded-sm p-4 mx-3">
        <div className="flex items-center">
          <div>
            <Image src={successIcon} alt="Success Icon" />
          </div>
          <div className="text-3xl font-semibold text-green-900 relative -top-3 ms-4">
            Payment Successful
          </div>
        </div>

        {paymentDetails.map((data) => (
          <div
            key={data.label}
            className="flex justify-between items-center border-t text-green-950 border-green-400 py-1 even:bg-green-50 lg:px-4 md:px-4 px-2 hover:bg-green-100"
          >
            <div>{data.label}</div>
            <div>{data.value}</div>
          </div>
        ))}

        <div className="flex justify-center mt-4 gap-3">
          <PrintBtn />
          <PDFDownloadButton paymentDetails={paymentDetails} />
        </div>
      </div>
    </div>
  );
};

export default TransId;
