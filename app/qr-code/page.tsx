"use client";
import { QRCodeSVG } from "qrcode.react";

const page = () => {
   return (
      <div className="w-full h-screen flex flex-col gap-[2vw] items-center justify-center">
         <p className="text-2xl font-bold">Scan moko</p>
         <QRCodeSVG value={"http://192.168.1.23:3000"} size={451} />
      </div>
   );
};

export default page;
