import Image, { StaticImageData } from "next/image";

interface AvatarProps {
  src: string | StaticImageData;
  name: string;
  experience: string;
}

const Avatar = ({ src, name, experience }: AvatarProps) => {
  return (
    <div className={`flex flex-col gap-1 items-center`}>
      <div className="w-16 aspect-square rounded-full overflow-hidden relative">
        <Image src={src} alt="avatar" fill className="object-cover" />
      </div>

      <div className="text-center">
        <p>{name}</p>
        <p className="text-sm font-light opacity-80">{experience}</p>
      </div>
    </div>
  );
};

export default Avatar;
