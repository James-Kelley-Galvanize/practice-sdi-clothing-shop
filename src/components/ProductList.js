import ProductCard from "./ProductCard";
import ProductDetail from "./ProductDetail";
const ProductList = ({
	products,
	setFocusProductFunc,
	focusProduct,
	focusProductResetFunc,
	photoUrl,
}) => {
	let productCards = products.map((product) => (
		<ProductCard product={product} setFocusProductFunc={setFocusProductFunc} />
	));
	let properHtml =
		focusProduct === null ? (
			productCards
		) : (
			<div>
				<ProductDetail
					product={focusProduct}
					focusProductResetFunc={focusProductResetFunc}
					photoUrl={photoUrl}
				/>
			</div>
		);
	return <div className="product-list">{properHtml}</div>;
};
export default ProductList;
