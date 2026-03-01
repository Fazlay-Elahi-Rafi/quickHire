import Image from "next/image";
import React from "react";

import logo from "../../../public/img/logo-light.png";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <>
      <footer className="qh-footer">
        <div className="container">
          <div className="row">
            <div className="qh-footer__wrap">
              <div className="col-md-6 col-lg-3 col-xl-4 mb-4 mb-md-0">
                <div className="logo">
                  <Image src={logo} width={152} height={36} alt="logo" />
                </div>
                <p className="qh-footer__para">
                  Great platform for the job seeker that passionate about
                  startups. Find your dream job easier.
                </p>
              </div>
              <div className="col-sm-2 d-flex justify-content-center">
                <div className="">
                  <h5 className="qh-footer__text">About</h5>

                  <ul className="qh-footer__list">
                    <li>
                      <a href="#">Companies</a>
                    </li>{" "}
                    <li>
                      <a href="#">Pricing</a>
                    </li>{" "}
                    <li>
                      <a href="#">Terms</a>
                    </li>{" "}
                    <li>
                      <a href="#">Advice</a>
                    </li>{" "}
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-2 d-flex justify-content-center">
                <div className="">
                  <h5 className="qh-footer__text">Resources</h5>
                  <ul className="qh-footer__list">
                    <li>
                      <a href="#">Help Docs</a>
                    </li>{" "}
                    <li>
                      <a href="#">Guide</a>
                    </li>
                    <li>
                      <a href="#">Updates</a>
                    </li>{" "}
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-7 col-lg-5 col-xl-4 mt-4 mt-md-0">
                <h5 className="qh-footer__text">Get job notifications</h5>
                <p className="qh-footer__para qh-footer__para--mt">
                  Great platform for the job seeker that passionate about
                  startups. Find your dream job easier.
                </p>

                <form className="qh-footer__form">
                  <div className="">
                    <input type="email" placeholder="Email Address" />
                    <a href="#" className="qh-btn-primary text-center">
                      Subscribe
                    </a>
                  </div>
                </form>
              </div>
            </div>

            <div className="qh-footer__bottom">
              <p className="qh-footer__para m-0">
                2021 @ QuickHire. All rights reserved.
              </p>

              <ul className="qh-footer__list qh-footer__list--social">
                <li>
                  <a href="#">
                    <Icon className="icon" icon="ri:facebook-fill" />
                  </a>
                </li>{" "}
                <li>
                  <a href="#">
                    <Icon className="icon" icon="mynaui:instagram" />
                  </a>
                </li>{" "}
                <li>
                  <a href="#">
                    <Icon className="icon" icon="icon-park-outline:dribble" />
                  </a>
                </li>{" "}
                <li>
                  <a href="#">
                    <Icon className="icon" icon="ri:linkedin-fill" />
                  </a>
                </li>{" "}
                <li>
                  <a href="#">
                    <Icon className="icon" icon="mdi:twitter" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
