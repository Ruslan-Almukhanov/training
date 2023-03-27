import React, { useEffect } from "react";
import { Carousel } from "antd";
import Link from "next/link";
import Image from "next/image";
import { $products, pageOpened } from "@component/widgets/model";
import { useStore } from "effector-react";
import SliderCard from "@component/features/ui/slider-card";

const MainSlider = () => {
  const products = useStore($products);

  useEffect(() => {
    pageOpened();
  }, []);

  return (
    <Carousel autoplay>
      {products.map((product) => (
        <SliderCard product={product} key={product.id} />
      ))}
    </Carousel>
  );
};

export default MainSlider;
