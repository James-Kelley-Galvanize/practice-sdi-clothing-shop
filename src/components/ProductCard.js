const ProductCard = ({ product, setFocusProductFunc }) => {
	let {
		name,
		default_price,
		description,
		// slogan,
		// category,
		id,
	} = product;

	return (
		<div
			className="product-card"
			onClick={(e) => {
				setFocusProductFunc(product);
			}}
		>
			<h3>{name}</h3>
			<p>{description}</p>
			<p>${default_price}</p>
		</div>
	);
};
export default ProductCard;
