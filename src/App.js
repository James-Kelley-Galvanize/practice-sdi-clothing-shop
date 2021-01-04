import "./App.css";
import { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			focusProduct: null,
			products: [],
			photoUrl: "",
		};
		this.setFocusProductFunc = this.setFocusProductFunc.bind(this);
		this.focusProductResetFunc = this.focusProductResetFunc.bind(this);
	}

	async componentDidMount() {
		let res = await fetch(`http://3.21.164.220/products/?count=50`);
		let products = await res.json();
		this.setState({ products });
	}
	async setFocusProductPhotos() {
		let { focusProduct } = this.state;
		let res = await fetch(
			`http://3.21.164.220/products/${focusProduct.id}/styles`
		);
		let json = await res.json();
		console.log(json);
		this.setState({ photoUrl: await json.results[0].photos[0].url });
	}

	setFocusProductFunc(prod) {
		this.setState({ focusProduct: prod }, this.setFocusProductPhotos);
	}
	focusProductResetFunc() {
		this.setState({ focusProduct: null, photoUrl: "" });
	}

	render() {
		//destructure FTW
		let { products, focusProduct, photoUrl } = this.state;
		let { setFocusProductFunc, focusProductResetFunc } = this;
		return (
			<div className="App">
				<Router>
					<NavBar focusProductResetFunc={focusProductResetFunc} />

					<div className="sales-floor">
						<Switch>
							<Route exact path="/">
								<Home />
							</Route>
							<Route path="/products">
								<ProductList
									products={products}
									setFocusProductFunc={setFocusProductFunc}
									focusProduct={focusProduct}
									focusProductResetFunc={focusProductResetFunc}
									photoUrl={photoUrl}
								/>
							</Route>
							<Route path="/detail">
								<ProductDetail />
							</Route>
						</Switch>
					</div>
					<div className="bottom-bar">BOTTOM BAR</div>
				</Router>
			</div>
		);
	}
}

export default App;
