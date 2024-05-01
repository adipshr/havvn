import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCallback } from "react";
import { TbPhotoPlus } from "react-icons/tb";

interface ImageUploadProps {
  onChange: (value: string) => void;
  value: string;
}

const uploadPreset = "defaultPreset";

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, value }) => {
  const handleUpload = useCallback(
    (result: any) => {
      onChange(result.info.secure_url);
    },
    [onChange]
  );

  return (
    <CldUploadWidget
      cloudName={process.env.CLOUDINARY_CLOUD_NAME}
      uploadPreset={uploadPreset}
      onUpload={handleUpload}
      options={{
        maxFiles: 1,
      }}
    >
      {({ open }) => (
        <div
          onClick={() => open?.()}
          className="
            relative
            cursor-pointer
            hover:opacity-70
            transition
            border-dashed 
            border-2 
            p-20 
            border-neutral-300
            flex
            flex-col
            justify-center
            items-center
            gap-4
            text-neutral-600
          "
        >
          <TbPhotoPlus size={50} />
          <div className="font-semibold text-lg">Click to upload</div>
          {value && (
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={value}
                alt="House"
                layout="fill"
                objectFit="cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 1024px"
              />
            </div>
          )}
        </div>
      )}
    </CldUploadWidget>
  );
};

export default ImageUpload;
