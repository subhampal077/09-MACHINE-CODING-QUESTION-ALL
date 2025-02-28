import React, { useState } from "react";
import QRCode from "react-qr-code";

const QRCodeGenerator = () => {
  const [input, setInput] = useState("");
  const [qrCode, setQrCode] = useState("");

  return (
    <div className="py-10 flex flex-col items-center">
      <h1 className="mb-5 text-2xl font-semibold">QR Code Generator</h1>
      <div className="mb-10 flex flex-col gap-2 w-80">
        <input
          className="px-4 py-1 outline-none border-2 border-gray-400 rounded"
          type="text"
          name="qr-code"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your value here"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={() => {
            setQrCode(input);
            setInput("");
          }}
          className="bg-blue-500 text-white font-semibold px-4 py-1 rounded disabled:cursor-not-allowed"
        >
          Generate
        </button>
      </div>

      <div>
        <QRCode value={qrCode} />
      </div>
    </div>
  );
};

export default QRCodeGenerator;
