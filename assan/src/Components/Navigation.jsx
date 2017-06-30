import React from 'react'
export default class Navigation extends React.Component {
    render() {
        return (
            <div className="navbar navbar-default navbar-static-top yamm sticky" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="/"><img src="logo.png" alt="ASSAN" /></a>
                    </div>


                    <div className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown active ">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Home <i className="fa fa-angle-down"></i></a>
                                <ul className="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">
                                    <li className="dropdown-submenu">
                                        <a tabindex="-1" href="#">Sliders </a>
                                        <ul className="dropdown-menu">
                                            <li><a href="index.html">Revolution Full-width</a></li>
                                            <li><a href="home-revolution-boxed.html">Revolution Boxed</a></li>
                                            <li><a href="home-revolution-fullscreen.html">Revolution Fullscreen</a></li>
                                            <li><a href="ken-burns.html">Ken burns Slider</a></li>
                                            <li><a href="home-carousel.html">Carousel Slider</a></li>
                                            <li><a href="home-flexslider.html">Flex slider</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <a tabindex="-1" href="#">Revolution 5</a>
                                        <ul className="dropdown-menu">
                                            <li><a href="r5-classNameic.html">Carousel classNameic</a></li>
                                            <li><a href="r5-gym.html">Slider Gym</a></li>
                                        </ul>
                                    </li>

                                    <li><a href="home-parallax.html">Home - Parallax</a></li>
                                    <li><a href="home-youtube-hero.html">Home -Youtube hero</a></li>
                                    <li><a href="home-self-video.html">Home - Self Video</a></li>
                                    <li><a href="home-boxed.html">Home - Boxed</a></li>
                                    <li><a href="home-construction.html">Home - Construction</a></li>
                                    <li><a href="home-portfolio.html">Home - Portfolio</a></li>

                                    <li className="dropdown-submenu">
                                        <a tabindex="-1" href="#">Multi level menu </a>
                                        <ul className="dropdown-menu">
                                            <li><a href="#"> menu level 2</a></li>
                                            <li className="dropdown-submenu">
                                                <a tabindex="-1" href="#">menu level 2 </a>
                                                <ul className="dropdown-menu">
                                                    <li><a href="#"> menu level 3</a></li>
                                                    <li><a href="#"> menu level 3</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle " data-toggle="dropdown">Portfolio <i className="fa fa-angle-down"></i></a>
                                <ul className="dropdown-menu multi-level" role="menu">
                                    <li className="dropdown-submenu">
                                        <a tabindex="-1" href="#">Cube Portfolio </a>
                                        <ul className="dropdown-menu">
                                            <li><a href="juicy-portfolio.html"> Juicy Projects</a></li>
                                            <li><a href="cube-fullwidth.html"> Full Width</a></li>
                                            <li><a href="cube-masonry.html"> Masonry</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <a tabindex="-1" href="#">Grid Text Boxed </a>
                                        <ul className="dropdown-menu">
                                            <li><a href="portfolio-2.html"> 2 Columns</a></li>
                                            <li><a href="portfolio-3.html"> 3 Columns</a></li>
                                            <li><a href="portfolio-4.html"> 4 Columns</a></li>

                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <a tabindex="-1" href="#">Grid Boxed </a>
                                        <ul className="dropdown-menu">
                                            <li><a href="grid-portfolio-2-no-text.html">2 Columns</a></li>
                                            <li><a href="grid-portfolio-3-no-text.html">3 Columns</a></li>
                                            <li><a href="grid-portfolio-4-no-text.html">4 Columns</a></li>

                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <a tabindex="-1" href="#">No space Full width </a>
                                        <ul className="dropdown-menu">
                                            <li><a href="portfolio-full-width-2.html">2 columns</a></li>
                                            <li><a href="portfolio-full-width-3.html">3 columns</a></li>
                                            <li><a href="portfolio-full-width-4.html">4 columns</a></li>
                                            <li><a href="portfolio-full-width-5.html">5 columns</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <a tabindex="-1" href="#">No Space Boxed </a>
                                        <ul className="dropdown-menu">
                                            <li><a href="portfolio-no-space-bx-2.html"> 2 Columns</a></li>
                                            <li><a href="portfolio-no-space-bx-3.html"> 3 Columns</a></li>
                                            <li><a href="portfolio-no-space-bx-4.html"> 4 Columns</a></li>

                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <a tabindex="-1" href="#">Portfolio Masonry </a>
                                        <ul className="dropdown-menu">
                                            <li><a href="masonry-portfolio-3.html"> 3 Columns</a></li>
                                            <li><a href="masonry-portfolio-4.html"> 4 Columns</a></li>
                                            <li><a href="masonry-portfolio-full.html"> Full Width</a></li>

                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <a tabindex="-1" href="#">Portfolio Items</a>
                                        <ul className="dropdown-menu">
                                            <li><a href="portfolio-single.html">Single item</a></li>
                                            <li><a href="portfolio-single-2.html">Single item 2</a></li>
                                        </ul>
                                    </li>

                                </ul>
                            </li>

                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Blog <i className="fa fa-angle-down"></i></a>
                                <ul className="dropdown-menu" role="menu">
                                    <li><a href="blog-full.html">Blog - full width</a></li>
                                    <li><a href="blog-leftimg.html">Blog - left image</a></li>
                                    <li><a href="blog-sidebar.html">Blog - sidebar</a></li>
                                    <li><a href="blog-2col.html">Blog - 2 column</a></li>
                                    <li><a href="blog-timeline.html">Blog - Timeline</a></li>
                                    <li><a href="blog-masonary.html">Blog - Masonry</a></li>
                                    <li><a href="blog-single.html">Blog - Single</a></li>
                                </ul>
                            </li>

                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Pages <i className="fa fa-angle-down"></i></a>
                                <ul className="dropdown-menu" role="menu">
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="me.html">About - Me</a></li>
                                    <li><a href="services.html">Services</a></li>
                                    <li><a href="team.html">Our Team</a></li>
                                    <li><a href="pricing.html">Our Pricing</a></li>
                                    <li><a href="faq.html">FAQS</a></li>
                                    <li><a href="email-template.html">Email Template</a></li>
                                    <li className="dropdown-submenu">
                                        <a tabindex="-1" href="#">Contact </a>
                                        <ul className="dropdown-menu">
                                            <li><a href="contact.html"> Contact default</a></li>
                                            <li><a href="contact-advanced.php">Contact advanced</a></li>
                                            <li><a href="contact-option.php">Contact option</a></li>
                                            <li><a href="contact-flat.php">Contact Flat</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="search-results.html">Search Results</a></li>
                                    <li><a href="career.html">Career</a></li>
                                    <li><a href="gallery.html">Gallery</a></li>

                                    <li><a href="process.html">Our Process</a></li>

                                </ul>
                            </li>


                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Features  <i className="fa fa-angle-down"></i></a>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-submenu">
                                        <a tabindex="-1" href="#">Headers </a>
                                        <ul className="dropdown-menu">
                                            <li><a href="index.html">Header 1 - Default</a></li>
                                            <li><a href="header-dark.html">Header 2 - dark </a></li>
                                            <li><a href="header-transparent.html">header 3 - transparent </a></li>
                                            <li><a href="header-center-logo.html">header 4 - Logo center </a></li>
                                            <li><a href="header-side-panel.html">header 5 - Side panel </a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <a tabindex="-1" href="#">Footers </a>
                                        <ul className="dropdown-menu">
                                            <li><a href="index.html">Footer dark - 1</a></li>
                                            <li><a href="footer-2.html">Footer dark - 2</a></li>
                                            <li><a href="footer-3.html">Footer dark - 3 </a></li>
                                            <li><a href="footer-light-1.html">Footer Light - 1</a></li>
                                            <li><a href="footer-light-2.html">Footer Light - 2</a></li>
                                            <li><a href="footer-light-3.html">Footer Light - 3 </a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <a tabindex="-1" href="#">Page Templates </a>
                                        <ul className="dropdown-menu">
                                            <li><a href="full-width.html">Full Width</a></li>
                                            <li><a href="left-sidebar.html">Left Sidebar</a></li>
                                            <li><a href="right-sidebar.html">Right sidebar</a></li>
                                            <li><a href="both-sidebar.html">Both Sidebar</a></li>
                                            <li><a href="both-right-sidebar.html">Both Right sidebar</a></li>
                                            <li><a href="both-left-sidebar.html">Both Left Sidebar</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <a tabindex="-1" href="#">Coming Soon </a>
                                        <ul className="dropdown-menu">
                                            <li><a href="coming-soon-1.html">Coming soon 1</a></li>
                                            <li><a href="coming-soon-2.html">Coming soon 2</a></li>
                                            <li><a href="coming-soon-3.html">Coming soon 3</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="side-nav.html">side navigation </a></li>
                                    <li><a href="maintenance-page.html">Maintenance page </a></li>
                                    <li><a href="blank.html">Blank Page</a></li>
                                    <li><a href="error.html">Error - 404</a></li>
                                    <li><a href="login-ragister.html">Login / Register</a></li>
                                    <li><a href="login-ragister-classNameic.html">Login / Register - classNameic </a></li>
                                    <li><a href="invoice.html">Invoice</a></li>
                                    <li><a href="site-map.html">Site Map</a></li>
                                </ul>
                            </li>


                            <li className="dropdown yamm-fw">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Shortcodes  <i className="fa fa-angle-down"></i></a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <div className="yamm-content">
                                            <div className="row">

                                                <div className="col-sm-3">
                                                    <h3 className="heading">Shortcode 1</h3>
                                                    <ul className="nav mega-vertical-nav">

                                                        <li><a href="typography.html"><i className="fa fa-text-height"></i> Typography</a></li>
                                                        <li><a href="grid-system.html"><i className="fa fa-bars"></i> Grid System</a></li>
                                                        <li><a href="testimonials.html"><i className="fa fa-comment-o"></i> testimonials </a></li>
                                                        <li><a href="tabs-accordian.html"><i className="fa fa-table"></i> tabs &amp;  Accordions </a></li>
                                                    </ul>

                                                </div>
                                                <div className="col-sm-3">
                                                    <h3 className="heading">Shortcode 2 </h3>
                                                    <ul className="nav mega-vertical-nav">
                                                        <li><a href="buttons.html"><i className="fa fa-cog"></i> Buttons</a></li>
                                                        <li><a href="social-buttons.html"><i className="fa fa-share"></i> Social Buttons</a></li>
                                                        <li><a href="alerts.html"><i className="fa fa-bell"></i> Alerts </a></li>
                                                        <li><a href="other-elements.html"><i className="fa fa-cogs"></i> Other Elements </a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-3">
                                                    <h3 className="heading">Shortcode 3</h3>
                                                    <ul className="nav mega-vertical-nav">
                                                        <li><a href="font-awesome.html"><i className="fa fa-flag"></i> Font Awesome icons</a></li>
                                                        <li><a href="pe-icons.html"><i className="pe-7s-like"></i> Pe icons</a></li>
                                                        <li><a href="carousel-shortcodes.html"><i className="fa fa-sliders"></i> Carousel Sliders </a></li>
                                                        <li><a href="tables.html"><i className="fa fa-table"></i> Tables </a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-3">
                                                    <h3 className="heading">Shortcode 4</h3>
                                                    <ul className="nav mega-vertical-nav">
                                                        <li><a href="pricing-tables.html"><i className="fa fa-usd"></i> Pricing tables</a></li>
                                                        <li><a href="videos.html"><i className="fa fa-image"></i> Responsive videos</a></li>
                                                        <li><a href="cta.html"><i className="fa fa-map-pin"></i> call to cations </a></li>
                                                        <li><a href="maps.html"><i className="fa fa-map-marker"></i> Google maps </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}