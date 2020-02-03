const buy = document.querySelector(".setting_form");
buy.addEventListener("submit", e => {
  e.preventDefault();

  let hold = document.getElementById("bttn").value;
  let first = document.getElementById("first_name").value;
  let last = document.getElementById("last_name").value;
  let email = document.getElementById("email1").value;

  let buyer = sessionStorage.getItem("username");

  db.collection("products")
    .doc(hold)
    .get()
    .then(data => {

      let productID = data.id;
      let preview = data.data().preview;
      let title = data.data().title;
      let dateSold = new Date().toDateString();
      let date = new Date(data.data().date).toDateString();
      let price = data.data().price;
      let tag = data.data().tag;
      let description = data.data().description;
      let vendor = data.data().vendor;

      db
        .collection("sold")
        .doc()
        .set({
          first,
          last,
          email,
          productID,
          preview,
          title,
          date,
          dateSold,
          tag,
          price,
          vendor,
          description,
          buyer
        })
        .catch(err => {
          console.error(err);
        });





      alert("success")

    })
    .catch(err => {
      console.error(err);
    });


  location.href = "index.html";


});

