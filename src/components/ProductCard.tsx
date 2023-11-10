import Link from "next/link";
import Image from "next/image";
import { ProductVariant } from "@next-orders/api-sdk";
import { CurrencySign } from "@/components/CurrencySign";
import { Price } from "@/components/Price";

type ProductCardProps = {
  productUrl: string;
} & ProductVariant;

export const ProductCard = ({
  name,
  weightUnit,
  weightValue,
  gross,
  currency,
  media,
  productUrl,
}: ProductCardProps) => {
  const photo = media?.length ? media[0] : undefined;

  return (
    <Link href={productUrl}>
      <div className="bg-white rounded-2xl h-auto w-auto max-w-[22rem] p-3 cursor-pointer hover:scale-95 duration-200">
        <div className="flex flex-col justify-between h-full">
          <div>
            <Image
              src={photo?.url ?? "/static/no-image-zinc.png"}
              alt={photo?.alt ?? ""}
              width={400}
              height={400}
              priority
              className="w-full aspect-square rounded-xl"
            />
            <div className="mt-2 text-xl font-medium">
              <Price value={gross} />
              <span className="pl-1 text-lg">
                <CurrencySign code={currency} />
              </span>
            </div>
            <div className="font-light leading-tight line-clamp-2">{name}</div>
            <div className="mt-2 font-light text-zinc-500">
              {weightValue}
              {weightUnit}
            </div>
          </div>

          <div className="flex flex-row gap-2 items-center justify-between mt-2 w-full h-12 bg-zinc-100 rounded-xl">
            <div className="w-full text-center text-2xl font-light">+</div>
          </div>
        </div>
      </div>
    </Link>
  );
};
