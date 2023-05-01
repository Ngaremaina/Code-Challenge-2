import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

function Footer(){
    //displaying the footer
    return(

		<footer class="footer-distributed">

			<div class="footer-right">

				<a href="https://www.facebook.com/"><i class="fa fa-facebook"></i></a>
				<a href="https://www.twitter.com/"><i class="fa fa-twitter"></i></a>
				<a href="https://www.linkedin.com/"><i class="fa fa-linkedin"></i></a>
				<a href="https://www.github.com/"><i class="fa fa-github"></i></a>

			</div>

			<div class="footer-left">

				<p class="footer-links">
                    <Link class='link-1'to='/'>Home</Link>
					<Link to = '/addbook'>Add Book</Link>
                    <Link to ='/contact us'>Contact Us</Link>
				</p>

				<p>Book App &copy; 2023</p>
			</div>

		</footer>
    )
}

export default Footer