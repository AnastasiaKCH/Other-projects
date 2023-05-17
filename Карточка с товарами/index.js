const API_URL = "https://fakestoreapi.com";

class API {
    addProductToCart(productID) {
        const body = JSON.stringify({
            userID: 3,
            date: "2022-02-05",
            products: [{ productID, quantity: 1 }]
        });

        return fetch(`${API_URL}/carts/7`, {
            method: "POST",
            body
        });
    }

    fetchAllProducts(params = {}) {
        const queryParams = new URLSearchParams(params);
        return fetch(`${API_URL}/products?${queryParams.toString()}`);
    }
}

const api = new API();

function handleError(err) {
    console.log(err);
    alert("Возникла ошибка при отправке запроса");
}

window.addEventListener("load", function () {
    const div = document.querySelector(".mainblock");

    api
        .fetchAllProducts({ limit: 10 })
        .then((res) => res.json())
        .then((products) => {
            products.forEach((product) => {
                const block = document.createElement("div");
                const img = document.createElement("img");
                const p = document.createElement("p");
                const price = document.createElement("p");
                const button = document.createElement("button");


                block.classList.add("block");
                img.classList.add("image");
                p.classList.add("products_item");
                price.classList.add("price");
                button.classList.add("products_addBtn");

                img.setAttribute("src", `${product.image}`);
                button.setAttribute("data-product-id", product.id);

                button.innerHTML = "Заказать";
                p.innerHTML = product.title;
                price.innerHTML = `${product.price} $`;

                div.append(block);
                block.append(img);
                block.append(p);
                block.append(price);
                block.append(button);
            });
        })
        .catch(handleError);


    div.addEventListener("click",
        function (event) {
            if (event.target.tagName === "BUTTON") {
                event.target.disable = true;
                api
                    .addProductToCart(event.target.getAttribute("data-product-id"))
                    .then(() => {
                        event.target.textContent = "Добавлено";
                    })
                    .catch(() => {
                        event.target.disabled = false;
                    });
            }
        });
});

