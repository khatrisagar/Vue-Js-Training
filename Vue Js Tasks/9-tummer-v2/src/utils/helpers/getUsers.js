export const getUsers = () => {
    return JSON.parse(localStorage.getItem("users"));
};

// getTrendingProducts() {
//             let products = {};
//             const orders = JSON.parse(localStorage.getItem("orders"));
//             orders.forEach((order) => {
//                 order.product.forEach((product) => {
//
//                     if (products[product.id]) {
//                         products[product.id] += product.quantity;
//                     } else {
//
//                         products[product.id] = product.quantity;
//                     }
//                 });
//             });
//             return products;
//         },
