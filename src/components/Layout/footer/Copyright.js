import React from "react";
import BtmFooter from "@/data/CopyrightData";
import Link from "next/link";
import { Open_Sans } from "next/font/google";
const OpenSans = Open_Sans({
  subsets: ["latin"],
});
const Copyright = () => {
  return (
    <div className="copyright-part">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="copyRight_lists">
              <ul className="d-flex justify-content-center gap-4">
                {BtmFooter.map((item, i) => (
                  <li>
                    <Link href={item.link} className={OpenSans.className}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
