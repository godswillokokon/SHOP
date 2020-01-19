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
                                        <td>${date}</td>
                                        <td class="author">${buyer}</td>
                                        <td >
                                            <span class="sale">${title}</span>
                                        </td>
                                       
                                         <td class="earning"> ${dateSold}</td>
                                        <td class="price"> $ ${price}</td>
                                       
                                         <td class="detail">
                                            <a href="single-product.html">${description}</a>
                                        </td>
                                    </tr>
    `;
    html += div;
  });
  content.innerHTML = html;





};

let first = db
  .collection('sold')
  .where("vendor", "==", nameID)
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
