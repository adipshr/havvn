import { FiCopy } from "react-icons/fi";
import toast from "react-hot-toast";

const copyToClipboardFallback = () => {
  const url = window.location.href;
  document.execCommand("copy", true, url);
  toast.success("Link copied to clipboard!");
};

const CopyToClipboardButton = () => {
  const copyToClipboard = () => {
    if (navigator?.clipboard?.writeText) {
      const url = window.location.href;
      navigator.clipboard
        .writeText(url)
        .then(() => {
          toast.success("Link copied to clipboard!");
        })
        .catch((error) => {
          console.error("Failed to copy link: ", error);
          toast.error("Failed to copy link. Please try again.");
          copyToClipboardFallback();
        });
    } else {
      copyToClipboardFallback();
    }
  };

  return (
    <button
      className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-md flex items-center"
      onClick={copyToClipboard}
    >
      <FiCopy className="mr-2" />
      Copy Link
    </button>
  );
};
export default CopyToClipboardButton;
