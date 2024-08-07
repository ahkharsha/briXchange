import React, { useState, useEffect } from "react";
import Link from "next/link";

import { useStateContext } from "../../context";

const Header = () => {
  const { currentAccount, connectWallet, userBlance } = useStateContext();

  return (
    <>
      <header class="rn-header haeder-default header--sticky">
        <div class="container">
          <div class="header-inner">
            <div class="header-left">
              <div class="logo-thumbnail logo-custom-css">
                <Link class="logo-light" href="/">
                  <img src="/logo/logo-white.png" alt="nft-logo" />
                </Link>
                <Link class="logo-dark" href="/">
                  <img src="/logo/logo-dark.png" alt="nft-logo" />
                </Link>
              </div>
              <div class="mainmenu-wrapper">
                <nav id="sideNav" class="mainmenu-nav d-none d-xl-block">
                  <ul class="mainmenu">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/about">About</a>
                    </li>
                    <li>
                      <a>Explore</a>
                      <ul class="submenu">
                        <li>
                          <Link href="/active">
                            Activity<i class="feather-fast-forward"></i>
                          </Link>
                        </li>

                        <li>
                          <a href="/creator">
                            Creator
                            <i class="feather-fast-forward"></i>
                          </a>
                        </li>
                        <li>
                          <a class="live-expo" href="/explor">
                            Explore
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                    <li>
                      <a>Other Pages</a>
                      <ul class="submenu">
                        <li>
                          <Link href="/ranking">
                            Ranking<i class="feather-fast-forward"></i>
                          </Link>
                        </li>
                        <li>
                          <a href="/product">
                            Product
                            <i class="feather-fast-forward"></i>
                          </a>
                        </li>
                        <li>
                          <a class="live-expo" href="/privacy">
                            Privacy
                          </a>
                        </li>
                        <li>
                          <a class="live-expo" href="/news">
                            News
                          </a>
                        </li>
                        <li>
                          <a class="live-expo" href="/fourm">
                            Fourm
                          </a>
                        </li>
                        <li>
                          <a class="live-expo" href="/connect">
                            Connect
                          </a>
                        </li>
                        <li>
                          <a class="live-expo" href="/collection">
                            Collection
                          </a>
                        </li>
                        <li>
                          <a class="live-expo" href="/blog">
                            Blog
                          </a>
                        </li>
                        <li>
                          <a class="live-expo" href="/blogdetail">
                            Blogdetail
                          </a>
                        </li>
                        <li>
                          <a class="live-expo" href="/error">
                            404
                          </a>
                        </li>
                        <li>
                          <a class="live-expo" href="/forget">
                            Forget
                          </a>
                        </li>
                        <li>
                          <a class="live-expo" href="/login">
                            Login
                          </a>
                        </li>
                        <li>
                          <a class="live-expo" href="/signup">
                            Signup
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="header-right">
              <div class="setting-option d-none d-lg-block">
                <form class="search-form-wrapper" action="#">
                  <input
                    type="search"
                    placeholder="Search Here"
                    aria-label="Search"
                  />
                  <div class="search-icon">
                    <button>
                      <i class="feather-search"></i>
                    </button>
                  </div>
                </form>
              </div>
              <div class="setting-option rn-icon-list d-block d-lg-none">
                <div class="icon-box search-mobile-icon">
                  <button>
                    <i class="feather-search"></i>
                  </button>
                </div>
                <form id="header-search-1" class="large-mobile-blog-search">
                  <div class="rn-search-mobile form-group">
                    <button type="submit" class="search-button">
                      <i class="feather-search"></i>
                    </button>
                    <input type="text" placeholder="Search ..." />
                  </div>
                </form>
              </div>

              {/* //CONNECT WALLET */}

              {currentAccount ? (
                ""
              ) : (
                <div
                  class="setting-option header-btn rbt-site-header"
                  id="rbt-site-header"
                >
                  <div class="icon-box">
                    <button
                      onClick={() => connectWallet()}
                      class="btn btn-primary-alta btn-small"
                    >
                      Wallet connect
                    </button>
                  </div>
                </div>
              )}

              {/* //END CONNECT WALLET */}
              <div class="setting-option rn-icon-list notification-badge">
                <div class="icon-box">
                  <a href={`/active`}>
                    <i class="feather-bell"></i>
                    <span class="badge">6</span>
                  </a>
                </div>
              </div>

              {currentAccount ? (
                <div>
                  <div class="setting-option rn-icon-list user-account">
                    <div class="icon-box">
                      <a>
                        <img src="/icons/boy-avater.png" alt="Images" />
                      </a>
                      <div class="rn-dropdown">
                        <div class="rn-inner-top">
                          <h4 class="title">
                            <a href="/author">
                              {currentAccount.slice(0, 15)}...
                            </a>
                          </h4>
                          <span>
                            <a href="#">Set Display Name</a>
                          </span>
                        </div>
                        <div class="rn-product-inner">
                          <ul class="product-list">
                            <li class="single-product-list">
                              <div class="thumbnail">
                                <a href="product-details.html">
                                  <img
                                    src="/portfolio/portfolio-07.jpg"
                                    alt="Nft Product Images"
                                  />
                                </a>
                              </div>
                              <div class="content">
                                <h6 class="title">
                                  <Link class="live-expo" href="/author">
                                    Balance
                                  </Link>
                                </h6>
                                <span class="price">
                                  {userBlance?.slice(0, 6)} MATIC
                                </span>
                              </div>
                              <div class="button"></div>
                            </li>
                            <li class="single-product-list">
                              <div class="thumbnail">
                                <Link class="live-expo" href="/author">
                                  <img
                                    src="/portfolio/portfolio-01.jpg"
                                    alt="Nft Product Images"
                                  />
                                </Link>
                              </div>
                              <div class="content">
                                <h6 class="title">
                                  <Link class="live-expo" href="/author">
                                    Profile
                                  </Link>
                                </h6>
                                <span class="price">Active One</span>
                              </div>
                              <div class="button"></div>
                            </li>
                            <li class="single-product-list">
                              <div class="thumbnail">
                                <Link class="live-expo" href="/author">
                                  <img
                                    src="/portfolio/portfolio-04.jpg"
                                    alt="Nft Product Images"
                                  />
                                </Link>
                              </div>
                              <div class="content">
                                <h6 class="title">
                                  <Link class="live-expo" href="/create">
                                    Create
                                  </Link>
                                </h6>
                                <span class="price">Property</span>
                              </div>
                              <div class="button"></div>
                            </li>
                          </ul>
                        </div>
                        <div class="add-fund-button mt--20 pb--20">
                          <a class="btn btn-primary-alta w-100" href="/connect">
                            Add Your More Funds
                          </a>
                        </div>
                        <ul class="list-inner">
                          <li>
                            <a href="/author">My Profile</a>
                          </li>
                          <li>
                            <a href="/edit-profile">Edit Profile</a>
                          </li>
                          <li>
                            <a href="/connect">Manage funds</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}

              <div class="setting-option mobile-menu-bar d-block d-xl-none">
                <div class="hamberger">
                  <button class="hamberger-button">
                    <i class="feather-menu"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div class="popup-mobile-menu">
        <div class="inner">
          <div class="header-top">
            <div class="logo logo-custom-css">
              <a class="logo-light" href="index.html">
                <img src="/logo/logo-white.png" alt="nft-logo" />
              </a>
              <a class="logo-dark" href="index.html">
                <img src="/logo/logo-dark.png" alt="nft-logo" />
              </a>
            </div>
            <div class="close-menu">
              <button class="close-button">
                <i class="feather-x"></i>
              </button>
            </div>
          </div>
          <nav>
            <ul class="mainmenu">
              <li>
                <a class="nav-link its_new" href="/">
                  Home
                </a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a class="nav-link its_new" href="/explor">
                  Explore
                </a>
              </li>
              <li>
                <a class="nav-link its_new" href="/">
                  Pages
                </a>
              </li>
              <li>
                <a class="nav-link its_new" href="/blog">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
