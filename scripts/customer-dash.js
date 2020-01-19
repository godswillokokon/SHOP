const content = document.querySelector('#content');
let nameID = sessionStorage.getItem("username");

const setupContent = data => {
  let html = '';
  data.forEach(data => {
    let id = data.id;
    let preview = data.data().preview;
    let title = data.data().title;
    let date = new Date(data.data().date).toDateString();
    let price = data.data().price;
    let productID = data.data().productID;
    let description = data.data().description;
    let vendor = data.data().vendor;
    let buyer = data.data().buyer;
    let dateSold = data.data().dateSold;


    const div = `
     <tr>
                        <td>${id}</td>
                        <td>${dateSold}</td>
                        <td class="bold">${price}</td>
                        <td class="bold">
                            ${title}
                        </td>
                    </tr>
    `;
    html += div;
  });
  content.innerHTML = html;





};

let first = db
  .collection('sold')
  .where("buyer", "==", nameID)
  .orderBy('dateSold', 'asc')
  .onSnapshot(
    doc => {
      let data = doc.docs;
      setupContent(data);
    },
    err => {
      console.log(err);
    }
  );
