import { Product } from '@component/widgets/main-slider/types';
import Image from 'next/image';
import Link from "next/link";
import React from "react";

type Props = {
  product: Product,
  width?: number,
  height?: number,
};

const SliderCard = ({product, height, width}: Props) => {
  return (
    <div>
      <Link href={`/products/${product.id}`}>
        <Image
          src={product.image}
          alt={product.title}
          width={height || 679}
          height={width || 461}
        />
      </Link>
    </div>
  );
};

export default SliderCard;
