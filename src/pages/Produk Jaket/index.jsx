import Footer from "/src/components/Footer/Footer"; // Ubah path menjadi absolut
import Header from "/src/components/Header/Header"; // Ubah path menjadi absolut
import Content from "./content";
import Banner from "./banner";
import Kategori from "./kategori";
import React from "react";

export default function ProdukKaos() {
  return (
    <>
      <title>Produk Jaket</title>

      <div className="w-full border border-solid border-blk bg-white-a700">
        <Header className="bg-white-a700" />
        <div>
          <Banner />
          <Kategori />
          <Content />
        </div>
        <Footer className="mt-[92px]" />
      </div>
    </>
  );
}
