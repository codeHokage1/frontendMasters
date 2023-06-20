const addItem = document.querySelector("#add");
const removeItem = document.querySelector("#remove");

const itemQty = document.querySelector("#quantity");

const cartIcon = document.querySelector(".cart-icon");
const cartModal = document.querySelector(".cart-modal");
const itemsInCart = document.querySelector(".items-in-cart");
const addToCart = document.querySelector("#add-to-cart");

function add() {
	itemQty.innerText = parseInt(itemQty.innerText) + 1;
}
function remove() {
	if (itemQty.innerText > 0) {
		itemQty.innerText = parseInt(itemQty.innerText) - 1;
	}
}
function addItemToCart() {
	if (itemQty.innerText > 0) {
		itemsInCart.style.display = "block";
		itemsInCart.innerText = itemQty.innerText;
		itemQty.innerText = 0;
	}
}

addItem.addEventListener("click", add);
removeItem.addEventListener("click", remove);
addToCart.addEventListener("click", addItemToCart);

cartIcon.addEventListener("click", () => {
	if (itemsInCart.innerText > 0) {
		cartModal.classList.toggle("hidden");
	}
});
