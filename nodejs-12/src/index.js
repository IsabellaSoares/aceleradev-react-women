const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

const filterProducts = (ids, productsList) => {
	return ids.map(id => productsList.find(product => id === product.id))					
}

const getProducts = productsList => {
	return productsList.map(product => ({name: product.name, category: product.category}))
}

const getPromotion = productsList => {
	const categoriesList = productsList.map(product => product.category)
	const categories = categoriesList.filter((category, idx) => categoriesList.indexOf(category) === idx)
	return promotions[categories.length - 1]
}

const getTotalPrice = (productsList, promotion) => {
	const productPrices = productsList.map(product => product.promotions.find(p => p.looks.includes(promotion)) || product)
	const totalPrice = productPrices.reduce((total, product) => total += (product.price || product.regularPrice), 0)
	return totalPrice.toFixed(2)
}

const getRegularPrice = productsList => {
	return productsList.reduce((total, product) => total += product.regularPrice, 0).toFixed(2)
}

const calculateDiscount = (productsList, totalPrice) => {	
	return (getRegularPrice(productsList) - totalPrice).toFixed(2)
}

const getShoppingCart = (ids, productsList) => {
	const filteredProducts = filterProducts(ids, productsList)
	const products = getProducts(filteredProducts)
	const promotion = getPromotion(filteredProducts)
	const totalPrice = getTotalPrice(filteredProducts, promotion)
	const regularPrice = getRegularPrice(filteredProducts)
	const discountValue = calculateDiscount(filteredProducts, totalPrice)
	const discount = ((discountValue / regularPrice) * 100).toFixed(2) + '%'

	return {
		products,
		promotion,
		totalPrice,
		discountValue,
		discount
	};
}

module.exports = { getShoppingCart };
