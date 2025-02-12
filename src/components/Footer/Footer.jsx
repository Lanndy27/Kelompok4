import React from "react";
import { Img, Heading, Text } from "./..";
import { Link } from "react-router-dom";

const Footer = ({ className, ...props }) => {
  return (
    <footer {...props} className={`${className} flex flex-col bg-gray-300`}>
      <div className="h-[2px] w-full self-stretch bg-blk" />
      <div className="py-[46px] mt-[-2px] relative flex justify-center self-stretch bg-gray-300 md:py-5">
        <div className="container-xs mb-1.5 flex justify-between md:px-5 w-full">
          {/* Tautan Penting (Kiri) */}
          <div className="w-[30%] flex flex-col items-start sm:w-full pl-[120px]">
            <ul>
              <li>
                <a href="#">
                  <Text as="p" className="text-[18px] font-bold text-blk mt-8">
                    Tautan Penting
                  </Text>
                </a>
              </li>
              <li>
                <a
                  href="Galeri"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-[30px]"
                >
                  <Text as="p" className="text-[18px] font-normal text-blk">
                    Galeri
                  </Text>
                </a>
              </li>
              <li>
                <Link to="/Tips-Bahan" className="mt-5">
                  <Text as="p" className="text-[18px] font-normal text-blk">
                    Tips
                  </Text>
                </Link>
              </li>
              <li>
                <a
                  href="Trending"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5"
                >
                  <Text as="p" className="text-[18px] font-normal text-blk">
                    Trending
                  </Text>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noreferrer" className="mt-5">
                  <Text as="p" className="text-[18px] font-normal text-blk">
                    Produk Kami
                  </Text>
                </a>
              </li>
            </ul>
          </div>

          {/* Temukan Kami Di (Tengah) */}
          <div className="flex flex-col items-center justify-center">
            <ul>
              <li>
                <a href="#">
                  <Text
                    as="p"
                    className="text-[18px] font-bold text-blk whitespace-nowrap"
                  >
                    Temukan Kami di
                  </Text>
                </a>
              </li>
              <li>
                <a
                  href="instagram"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-[30px]"
                >
                  <Text as="p" className="text-[18px] font-normal text-blk">
                    Instagram
                  </Text>
                </a>
              </li>
              <li>
                <a
                  href="facebook"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5"
                >
                  <Text as="p" className="text-[18px] font-normal text-blk">
                    Facebook
                  </Text>
                </a>
              </li>
              <li>
                <a
                  href="pinterest"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5"
                >
                  <Text as="p" className="text-[18px] font-normal text-blk">
                    Pinterest
                  </Text>
                </a>
              </li>
            </ul>
          </div>

          {/* Logo (Kanan) */}
          <div className="flex items-center justify-end w-[30%] sm:w-full pr-[120px]">
            <img
              src="asset/image/logo-new.svg"
              alt="Footer Logo"
              className="w-[294px] h-[152px] object-contain"
            />
          </div>
        </div>
      </div>

      {/* Bagian untuk Copyright */}
      <div className="flex justify-center items-center py-[20px] bg-gray-300">
        <Heading
          as="h6"
          className="text-[18px] font-bold text-blk mt-[38px] mb-[10px]"
        >
          Copyright © 20242020 All rights reserved
        </Heading>
      </div>
    </footer>
  );
};

export default Footer;
