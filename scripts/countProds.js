
const itemsCount = document.querySelector('.filter__itemss');
let nameIDC = sessionStorage.getItem("username");

const setupContentC = data => {
  let htmlC = '';
  data.forEach(data => {
    let id = data.id;
    let preview = data.data().preview;
    let title = data.data().title;
    let date = new Date(data.data().date).toDateString();
    let price = data.data().price;
    let tag = data.data().tag;
    let description = data.data().description;
    let vendor = data.data().vendor;

    const div = `
        <div class="filter__option filter--text py-0">
        <p><span> ${data.data().id}</span> Products</p>
    </div>

    `;
    htmlC += div;

  });

  itemsCount.innerHTML = htmlC;

};
// let level = sessionStorage.getItem("userLevel");
let sec = db
  .collection('products')
  .where("vendor", "==", nameIDC)
  .orderBy('date', 'desc')
  .onSnapshot(
    doc => {
      let data = doc.docs;
      setupContentC(data);
    },
    err => {
      console.log(err);
    }
  );
