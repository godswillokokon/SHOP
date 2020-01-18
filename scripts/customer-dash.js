const content = document.querySelector('#products');


const setupContent = data => {
  let html = '';
  data.forEach(data => {
    let id = data.id;
    let preview = data.data().preview;
    let title = data.data().title;
    let date = new Date(data.data().date).toDateString();
    let price = data.data().price;
    let tag = data.data().tag;
    let description = data.data().description;
    let vendor = data.data().vendor;
    let buyer = data.data().buyer;
    let dateSold = data.data().dateSold;


    const div = `
     
    `;
    html += div;
  });
  content.innerHTML = html;





};
// let level = sessionStorage.getItem("userLevel");
let first = db
  .collection('sold')
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
