// //html tree
// let htmlDocument = {
//   tagName: "body",
//   paired: true,
//   subTags: [
//     {
//       tagName: "div",
//       paired: true,
//       subTags: [
//         {
//           tagName: "span",
//           paired: true,
//           text: "Enter a data please:",
//         },
//         {
//           tagName: "br",
//           paired: false,
//         },
//         [
//           {
//             tagName: "input",
//             paired: false,
//             attrs: [
//               {
//                 type: "text",
//               },
//               { id: "name" },
//             ],
//           },
//           {
//             tagName: "input",
//             paired: false,
//             attrs: [
//               {
//                 type: "text",
//               },
//               { id: "surname" },
//             ],
//           },
//         ],
//       ],
//     },

//     {
//       tagName: "div",
//       paired: true,
//       subTags: [
//         {
//           tagName: "button",
//           paired: true,
//           text: "OK",
//           attrs: {
//             id: "ok",
//           },
//         },
//         {
//           tagName: "button",
//           paired: true,
//           text: "cancel",
//           attrs: {
//             id: "cancel",
//           },
//         },
//       ],
//     },
//   ],
// };

// console.log(htmlDocument.subTags[1].subTags[1].attrs.id);
// console.log(htmlDocument.subTags[0].subTags[2][1].attrs[1].id);
// //declarative fields
// var notebook = {
//   brand: prompt("Enter brand notebook"),
//   type: prompt("Enter type"),
//   model: prompt("Enter model notebook"),
//   ram: Number(prompt("Enter ram")),
//   size: Number(prompt("Enter size")),
//   weight: Number(prompt("Enter weight")),
//   resolution: {
//     width: Number(prompt("Enter width screen")),
//     height: Number(prompt("Enter height screen")),
//   },
// };

// var phone = {
//   brand: prompt("Enter brand your mobile phone"),
//   model: prompt("Enter model your mobile phone"),
//   ram: Number(prompt("Enter ram")),
//   color: prompt("Enter color"),
// };

// var person = {
//   name: prompt("Enter name"),
//   surname: prompt("Enter surname"),
//   married: confirm("You married?"),
// };
// //object links
// person.smartphone = phone;
// person.laptop = notebook;
// phone.owner = person;
// notebook.owner = person;

// let arr = [person.name, person.surname, person.smartphone, person.laptop];
// console.log(arr);

////imperative array fill 3
// let arr = [+prompt(), +prompt(), +prompt(), +prompt()];
// console.log(arr);

////while confirm
// let clickCancel = true;
// while (clickCancel === true) {
//   let cancelClick = confirm("Cancel - more, OK - stop");
//   clickCancel = cancelClick ? false : true;
// }

let i = 1;
while (i < 8) {
  i++;
  document.write("привет ");
}
