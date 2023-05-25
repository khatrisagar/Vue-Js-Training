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

// getTrendingProducts() {
//     let products = [];

//     const orders = JSON.parse(localStorage.getItem("orders"));
//     orders.forEach((order) => {
//         order.product.forEach((product) => {
//             if (products.length) {
//                 products.forEach((productObject) => {
//                     if (product.id === productObject.id) {
//                         productObject.quantity += product.quantity;
//                     } else {
//                         let isProductExist = false;
//                         products.forEach((productObj) => {
//                             if (product.id === productObj.id) {
//                                 isProductExist = true;
//                             }
//                         });
//                         if (!isProductExist) {
//                             products.push({
//                                 id: product.id,
//                                 quantity: product.quantity,
//                             });
//                         }
//                     }
//                 });
//             } else {
//                 products.push({
//                     id: product.id,
//                     quantity: product.quantity,
//                 });
//             }
//         });
//     });
//     const sortedProducts = products.sort((a, b) => {
//         return b.quantity - a.quantity;
//     });
//     console.log(sortedProducts);
//     return sortedProducts;
// }
