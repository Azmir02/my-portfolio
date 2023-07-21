"use client";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import Logo from "@/svg/Logo";
import Menudata from "@/data/Menudata";
import { DM_Sans } from "next/font/google";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "500",
});

const Menubar = () => {
  return (
    <>
      <Navbar expand="lg" className="py-3">
        <Container>
          <Link href="#">
            <Logo />
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {Menudata?.map((menu, i) => (
                <Link
                  className={DmSans.className + " " + "mx-3"}
                  href={menu.url}
                >
                  {menu.title}
                </Link>
              ))}
            </Nav>
            <button className={DmSans.className}>Contact Now</button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Menubar;
