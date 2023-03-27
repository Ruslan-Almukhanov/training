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
      <div>
        <Link href="/products">
          <Image src={"https://image2.jdomni.in/banner/28012021/D7/A0/6C/7B41BE82E0199AB8146A198E3E_1611832523054.png?output-format=webp"} alt={"Men style"} width={1366} height={550}></Image>
        </Link>
      </div>
      <div>
        <Link href="/products">
          <Image src={"https://image3.jdomni.in/banner/28012021/35/F5/99/5B09F40B3B173CDF62C4FF424B_1611832540980.png?output-format=webp"} alt={"Man clothes exclusive collection"} width={1366} height={550}></Image>
        </Link>
      </div>
    </Carousel>
  );
};

export default MainSlider;
