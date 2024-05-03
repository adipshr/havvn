import { FaWhatsapp } from "react-icons/fa";
import toast from "react-hot-toast";

interface ShareOnWhatsAppButtonProps {
  url: string;
}

const ShareOnWhatsAppButton: React.FC<ShareOnWhatsAppButtonProps> = ({
  url,
}) => {
  const shareOnWhatsApp = () => {
    const listingUrl = encodeURIComponent(url);
    const message = encodeURIComponent(
      "Check out this amazing property on Havvn!"
    );

    const shareURL = `whatsapp://send?text=${message}%0A${listingUrl}`;

    window.open(shareURL, "_blank");

    toast.success("Message added to WhatsApp with clickable link!");
  };

  return (
    <button
      className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md flex items-center"
      onClick={shareOnWhatsApp}
    >
      Share on
      <FaWhatsapp className="mr-2 ml-3" size={20} />
    </button>
  );
};

export default ShareOnWhatsAppButton;
