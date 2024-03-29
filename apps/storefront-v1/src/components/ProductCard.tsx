import Link from 'next/link';
import Image from 'next/image';
import { IconPlus } from '@tabler/icons-react';
import { CurrencyCode, ProductVariant } from '@next-orders/api-sdk';
import { Price } from './Price';
import {
  DEFAULT_IMAGE_URL,
  getCurrencySign,
  getProductFirstPhoto,
  getWeightLocalizedUnit,
} from '../client/helpers';
import { getDictionary, Locale } from '../dictionaries';

type ProductCardProps = {
  locale: Locale;
  productUrl: string;
  currencyCode: CurrencyCode | undefined;
} & ProductVariant;

export const ProductCard = ({
  locale,
  name,
  weightUnit,
  weightValue,
  gross,
  currencyCode,
  media,
  productUrl,
}: ProductCardProps) => {
  const firstPhoto = getProductFirstPhoto(media);
  const currencySign = getCurrencySign(currencyCode);
  const weightUnitLocalized = getWeightLocalizedUnit(weightUnit, locale);

  const { ADD_LABEL } = getDictionary(locale);

  return (
    <Link
      href={productUrl}
      className="bg-white rounded-2xl h-auto w-auto max-w-[22rem] p-3 cursor-pointer active:scale-95 lg:active:scale-90 lg:hover:scale-95 duration-200"
    >
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="relative w-full aspect-square">
            <Image
              src={firstPhoto?.url ?? DEFAULT_IMAGE_URL}
              alt={firstPhoto?.alt ?? ''}
              fill
              sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
              className="rounded-xl object-cover object-center"
            />
          </div>

          <div className="mt-2 text-xl font-medium">
            <Price value={gross} />
            <span className="pl-1 text-lg">{currencySign}</span>
          </div>
          <p className="font-normal leading-tight line-clamp-2">{name}</p>
          <div className="mt-2 font-light text-zinc-500">
            {weightValue}
            {weightUnitLocalized}
          </div>
        </div>

        <div className="flex flex-row gap-2 items-center justify-center mt-2 w-full h-12 bg-zinc-100 rounded-xl">
          <IconPlus stroke={1.5} className="w-5 h-5" />
          <div className="text-center text-base font-light">{ADD_LABEL}</div>
        </div>
      </div>
    </Link>
  );
};
