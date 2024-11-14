import React, { Suspense } from "react";
import { Heading, Img, BannerProduk } from "../../components";

const ProductCard = ({ image, title, price }) => (
  <div className="flex flex-col">
    <div className="relative border border-black">
      <Img src={image} alt={title} className="h-96 w-full object-cover" />
      <div className="absolute bottom-0 left-0 right-0 bg-white p-4 border-t border-black">
        <Heading as="h3" className="text-xl font-bold text-black">
          {title}
        </Heading>
        <Heading as="p" className="text-lg font-bold text-black">
          {price}
        </Heading>
      </div>
    </div>
  </div>
);

const data = [
  {
    image: "/asset/image/id-11134207-7r98w-lt201x3ntx6c2c-1.png",
    title: "Hoodie Putih",
    price: "Rp 250.000",
  },
  {
    image: "/asset/image/id-11134207-7r98o-lyue2lfdso2mf7-1.png",
    title: "Hoodie Coklat",
    price: "Rp 250.000",
  },
  {
    image: "/asset/image/id-11134207-7r98z-lqlqxalrove676-1.png",
    title: "Jaket Traker Hitam",
    price: "Rp 300.000",
  },
  {
    image: "/asset/image/id-11134207-7rask-m0mu0hciut3gdd-1.png",
    title: "Jaket Traker Hijau",
    price: "Rp 300.000",
  },
  {
    image: "/asset/image/id-11134207-7r98q-lqlqrworrysua1-1.png",
    title: "Jaket Traker Coklat",
    price: "Rp 300.000",
  },
];

export default function Content() {
  return (
    <div className="px-[120px]">
      <div className="mt-[125px]">
        <div className="grid grid-cols-4 gap-x-10 gap-y-[75px]">
          <Suspense fallback={<div>Loading products...</div>}>
            {data.map((product, index) => (
              <div key={`product-${index}`}>
                <ProductCard {...product} />
              </div>
            ))}
          </Suspense>
        </div>
        <BannerProduk />
      </div>
    </div>
  );
}
