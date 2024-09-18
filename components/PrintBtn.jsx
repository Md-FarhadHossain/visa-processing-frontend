"use client"
import { Button } from "./ui/button";

const PrintBtn = () => {
  return (
    <Button
      onClick={() => window.print()}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      Print
    </Button>
  );
};

export default PrintBtn;
