import React, { useState } from "react";
import { useQRCode } from "next-qrcode";
import CopyToClipboardButton from "./CopyToClipboard";
import ShareOnWhatsapp from "./ShareOnWhatsapp";
import ShareOnWhatsAppButton from "./ShareOnWhatsapp";

interface QRCodeProps {
  url: string;
}

const QRCode: React.FC<QRCodeProps> = ({ url }) => {
  const { Image: QrImage } = useQRCode();
  const [showQR, setShowQR] = useState(false);

  const handleToggleQR = () => {
    setShowQR((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={handleToggleQR}
        className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-md flex items-center"
      >
        {showQR ? "Hide QR" : "Generate QR"}
      </button>
      {showQR && (
        <div className="mb-4">
          <QrImage
            text={url}
            options={{
              type: "image/jpeg",
              quality: 0.3,
              errorCorrectionLevel: "M",
              margin: 3,
              scale: 4,
              width: 200,
              color: {
                dark: "#000000",
                light: "#ffffff",
              },
            }}
          />
        </div>
      )}

      <div className="flex space-x-4">
        <CopyToClipboardButton />
        <ShareOnWhatsAppButton url={url} />
      </div>
    </div>
  );
};

export default QRCode;
