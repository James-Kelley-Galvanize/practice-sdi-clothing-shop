import { Link, useRouteMatch } from "react-router-dom";

const NavBar = ({ focusProductResetFunc }) => {
	return (
		<div className="nav-bar">
			<h2>SDA Clothing Shop</h2>

			<Link to="/">
				<button id="home">HOME</button>
			</Link>

			<Link to="/products">
				<button
					id="products"
					onClick={(e) => {
						focusProductResetFunc();
					}}
				>
					Products
				</button>
			</Link>
		</div>
	);
};

export default NavBar;
