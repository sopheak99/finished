import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <footer id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-3 margin30">
                            <div className="footer-col">
                                <h3>About assan</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem quam, adipiscing condimentum tristique vel, eleifend sed turpis. Pellentesque cursus arcu id magna euismod in elementum purus molestie.
                                </p>
                                <ul className="list-inline footer-social">
                                    <li>
                                        <a href="" className="social-icon-md si-dark si-gray-round si-colored-facebook">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" className="social-icon-md si-dark si-gray-round si-colored-twitter">
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" className="social-icon-md si-dark si-gray-round si-colored-google-plus">
                                            <i className="fa fa-google-plus"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" className="social-icon-md si-dark si-gray-round si-colored-pinterest">
                                            <i className="fa fa-pinterest"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" className="social-icon-md si-dark si-gray-round si-colored-linkedin">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6 margin30">
                            <div className="footer-col">
                                <h3>Contact</h3>

                                <ul className="list-unstyled contact">
                                    <li><p><strong><i className="fa fa-map-marker"></i> Address:</strong> vaisahali, jaipur, 302012</p></li>
                                    <li><p><strong><i className="fa fa-envelope"></i> Mail Us:</strong> <a href="#">Support@designmylife.com</a></p></li>
                                    <li> <p><strong><i className="fa fa-phone"></i> Phone:</strong> +91 1800 2345 2132</p></li>
                                    <li> <p><strong><i className="fa fa-print"></i> Fax</strong> 1800 2345 2132</p></li>
                                    <li> <p><strong><i className="fa fa-skype"></i> Skype</strong> assan.856</p></li>

                                </ul>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6 margin30">
                            <div className="footer-col">
                                <h3>Featured Work</h3>
                                <ul className="list-inline f2-work">
                                    <li><a href="portfolio-single.html"><img src="img/img-1.jpg" className="img-responsive" alt="" /></a></li>
                                    <li><a href="portfolio-single.html"><img src="img/img-2.jpg" className="img-responsive" alt="" /></a></li>
                                    <li><a href="portfolio-single.html"><img src="img/img-3.jpg" className="img-responsive" alt="" /></a></li>
                                    <li><a href="portfolio-single.html"><img src="img/img-4.jpg" className="img-responsive" alt="" /></a></li>
                                    <li><a href="portfolio-single.html"><img src="img/img-5.jpg" className="img-responsive" alt="" /></a></li>
                                    <li><a href="portfolio-single.html"><img src="img/img-6.jpg" className="img-responsive" alt="" /></a></li>
                                    <li><a href="portfolio-single.html"><img src="img/img-7.jpg" className="img-responsive" alt="" /></a></li>
                                    <li><a href="portfolio-single.html"><img src="img/img-8.jpg" className="img-responsive" alt="" /></a></li>
                                    <li><a href="portfolio-single.html"><img src="img/img-9.jpg" className="img-responsive" alt="" /></a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6 margin30">
                            <div className="footer-col">
                                <h3>Newsletter</h3>
                            <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem quam,
                            </p>
                                <form role="form" className="subscribe-form">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Enter email to subscribe" />
                                        <span className="input-group-btn">
                                            <button className="btn  btn-theme-dark btn-lg" type="submit">Ok</button>
                                        </span>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="footer-btm">
                                <span>©2017. Theme by Design_mylife</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}