import React from "react";

import logo from "../../../public/img/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

const Navbar = ({ navBgColor }) => {
  return (
    <>
      <nav className={`qh-navbar ${navBgColor}`}>
        <div className="container px-sm-0">
          <div className="row">
            <div className="qh-navbar__wrap">
              <div className="qh-navbar__left">
                <div className="qh-navbar__logo">
                  <Link href="/">
                    <Image
                      src={logo}
                      width={152}
                      height={36}
                      unoptimized={true}
                      alt="logo"
                    />
                  </Link>
                </div>
                <ul className="qh-navbar__list d-none d-md-flex">
                  <li>
                    <Link href="#">Find Jobs</Link>
                  </li>
                  <li>
                    <Link href="#">Browse Companies</Link>
                  </li>
                </ul>
              </div>
              <div className="qh-navbar__right d-none d-md-flex">
                <Link className="qh-navbar__btn" href="#">
                  Login
                </Link>
                <hr />
                <Link className="qh-navbar__btn" href="#">
                  Sign Up
                </Link>
              </div>
              <div className="qh-menu d-md-none">
                <a
                  data-bs-toggle="offcanvas"
                  href="#offcanvasExample"
                  role="button"
                  aria-controls="offcanvasExample"
                >
                  <Icon icon="fe:bar" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <div className="qh-navbar__logo">
            <Link href="#">
              <Image
                src={logo}
                width={152}
                height={36}
                unoptimized={true}
                alt="logo"
              />
            </Link>
          </div>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="qh-navbar__list d-block">
            <li className="mb-2">
              <Link href="#">Find Jobs</Link>
            </li>
            <li className="mb-2">
              <Link href="#">Browse Companies</Link>
            </li>
          </ul>

          <div className="qh-navbar__right mt-5">
            <Link className="qh-navbar__btn" href="#">
              Login
            </Link>
            <hr />
            <Link className="qh-navbar__btn" href="#">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
