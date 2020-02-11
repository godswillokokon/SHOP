const rrr = document.querySelector("#sale");
const subb = document.querySelector("#sub");




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
    let tax = price * 5 / 100;
    let integer = parseInt(price, 10);
    let total = integer + tax;


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

    const subm = `
    <div class="form-group">
                                                <label for="cv_code">CVV Code</label>
                                                <input id="cv_code" type="text" class="text_field"
                                                    placeholder="Enter code here...">
                                            </div>
 <button  class="btn btn-danger" type="submit" value="${id}"  id="bttn">Confirm Order</button>
      `;
    sub.innerHTML = subm;






  })
  .catch(err => {
    console.error(err);
  });
