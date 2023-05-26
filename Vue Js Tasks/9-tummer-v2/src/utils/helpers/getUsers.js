// import { users } from "@/constants/users";

// const setUsers = () => {
//     localStorage.setItem("users", JSON.stringify(users));
// };

export const getUsers = () => {
    // setUsers();
    return JSON.parse(localStorage.getItem("users"));
};

// getTrendingProducts() {
//     this.setSale();
//     let products = [];

//     const orders = JSON.parse(localStorage.getItem("orders")) || [];
//     orders?.forEach((order) => {
//       order?.product?.forEach((product) => {
//         if (products.length) {
//           products.forEach((productObject) => {
//             if (product.id === productObject.id) {
//               productObject.quantity += product.quantity;
//             } else {
//               let isProductExist = false;
//               products.forEach((productObj) => {
//                 if (product.id === productObj.id) {
//                   isProductExist = true;
//                 }
//               });
//               if (!isProductExist) {
//                 products.push({
//                   id: product.id,
//                   quantity: product.quantity,
//                 });
//               }
//             }
//           });
//         } else {
//           products.push({
//             id: product.id,
//             quantity: product.quantity,
//           });
//         }
//       });
//     });
//     const sortedProducts = products.sort((a, b) => {
//       return b.quantity - a.quantity;
//     });
//     return sortedProducts;
//   }

// console.log(moment().format("hh:mm:ss"));
// console.log(
//     moment()
//         .minute(moment().minute() + 2)
//         .format("hh:mm:ss")
// );

// to get a current minutes +2
// console.log(moment().minute() + 2);
