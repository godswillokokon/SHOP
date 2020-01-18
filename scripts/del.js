
function del() {

  let hold = document.getElementById("bttn").value;
  console.log(hold, "hold");

  db.collection("products").doc(hold).delete().then(function () {
    alert("Document successfully deleted!");
  }).catch(function (error) {
    alert("Error removing document: ", error);
  });


  db
    .collection('products')
    .onSnapshot(
      doc => {
        let data = doc.docs;
        delete (data);
      },
      err => {
        console.log(err);
      }
    );
}

