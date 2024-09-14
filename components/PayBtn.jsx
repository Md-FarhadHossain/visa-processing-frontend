"use client";
import axios from "axios";
import { Button } from "./ui/button";

const PayButton = () => {
  const pay = async () => {
    try {
      const { data } = await axios.post(
        "https://visa-processing-backend.vercel.app/api/bkash/payment/create",
        { amount: 390, orderId: 1, payerReference: "hello@gmail.com" },
        { withCredentials: true }
      );
      window.location.href = data.bkashURL;
      console.log(data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div>
      {/* <Link href="/download">
        <Button>Download</Button>
      </Link> */}
      <Button
        type="submit"
        onClick={pay}
        className="w-full"
      >
        Download Now
      </Button>
    </div>
  );
};

export default PayButton;
