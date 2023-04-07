const CartProductsLoader = async () => {
    const loadedProducts = await fetch("https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json")

    const products = await loadedProducts.json();
    return products;

}

export default CartProductsLoader;