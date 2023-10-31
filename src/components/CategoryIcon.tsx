import Image from "next/image";
import { MenuCategoryIcon } from "@next-orders/api-sdk";

type CategoryIconProps = {
  icon: MenuCategoryIcon;
};

export const CategoryIcon = ({ icon }: CategoryIconProps) => {
  const iconUrl = `${process.env.NEXT_PUBLIC_API_URL}/image/static/${icon}.png`;

  return (
    <Image
      src={iconUrl ?? "/static/no-image-zinc.png"}
      alt=""
      width={48}
      height={48}
      className="w-6 h-6 group-hover:scale-125 duration-200"
    />
  );
};
