const ProductDetail = ({ product, focusProductResetFunc, photoUrl }) => {
	let {
		name,
		default_price,
		description,
		slogan,
		// category,
		id,
	} = product;

	return (
		<div className={"product-detail"}>
			<img src={photoUrl} />
			<div>
				<h1>{name}</h1>
				<h3>{slogan}</h3>
				<p>{description}</p>
				<p>${default_price}</p>
			</div>
		</div>
	);
};
export default ProductDetail;
