import React, { useEffect } from "react";
import { Carousel } from "antd";
import Link from "next/link";
import Image from "next/image";
import { $products, pageOpened } from "@component/widgets/model";
import { useStore } from "effector-react";

const MainSlider = () => {
  const products = useStore($products);

  useEffect(() => {
    pageOpened();
  }, []);

  return (
    <Carousel autoplay>
      {products.map((product) => (
        <Link href={`/products/${product.id}`} key={product.id}>
          <Image
            src={product.image}
            alt={"Men style"}
            width={679}
            height={461}
          ></Image>
        </Link>
      ))}
    </Carousel>
  );
};

export default MainSlider;
