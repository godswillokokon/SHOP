const rrr = document.querySelector("#sale");




let Qid = window.location.search.split("?")[1];
db.collection("products")
  .doc(Qid)
  .get()
  .then(data => {

    let id = data.id;
    let preview = data.data().preview;
    let title = data.data().title;
    let date = new Date(data.data().date).toDateString();
    let price = data.data().price;
    let tag = data.data().tag;
    let description = data.data().description;
    let vendor = data.data().vendor;
    let tax = price * 5 / 100
    let total = price + tax


    const htmlQues = `
 <li class="item">
                                        <a href="" target="_blank">${title}</a>
                                        <span>$ ${price}</span>
                                    </li>
                                    <li>
                                        <p> 5% Estimated Taxes & Fees:</p>
                                        <span>$ ${tax}</span>
                                    </li>
                                    <li class="total_ammount">
                                        <p>Total</p>
                                        <span>$ ${total}</span>
                                    </li>
      `;
    rrr.innerHTML = htmlQues;






  })
  .catch(err => {
    console.error(err);
  });
