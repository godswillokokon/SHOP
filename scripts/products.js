const content = document.querySelector('#products');
let nameID = sessionStorage.getItem("username");
let myUsername = sessionStorage.getItem("username");
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


    const div = `
      <div class="col-lg-4 col-md-6">

                        <div class="product-single latest-single items--edit">
                            <div class="product-thumb">
                                <figure>
                                    <img src="${preview}" alt="" class="img-fluid" width="32" height="32">
                                    <div class="prod_option show">
                                        <a href="#" id="drop_1" class="dropdown-toggle" data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="true">
                                            <span class="icon-settings setting-icon"></span>
                                        </a>

                                        <div class="options dropdown-menu" aria-labelledby="drop_1">
                                            <ul>
                                                <li class="dropdown-item">
                                                    <a href="edit-item.html?${id}">
                                                        <span class="icon-pencil"></span>Edit</a>
                                                </li>
                                                
                                                <li class="dropdown-item">
                                                    <a href="#" class="delete"  onclick="del()" value="${id}"  id="bttn">
                                                        <span class="icon-trash"></span>Delete</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </figure>
                            </div><!-- Ends: .product-thumb -->
                            <div class="product-excerpt">
                                <h5>
                                    <a href="#">E-commerce Shopping Cart</a>
                                </h5>
                                <ul class="titlebtm">
                                    <li>
                                        <img class="auth-img" src="img/auth-img2.png" alt="author image">
                                        <p>
                                            <a href="#">Theme-Valley</a>
                                        </p>
                                    </li>
                                    <li class="product_cat">
                                        in
                                        <a href="#">WordPress</a>
                                    </li>
                                </ul>
                                <ul class="product-facts clearfix">
                                    <li class="price">$ ${price}</li>
                                    <li class="sells">
                                        <span class="icon-basket"></span>81
                                    </li>
                                    <li class="product-fav">
                                        <span class="icon-heart" title="Add to collection" data-toggle="tooltip"></span>
                                    </li>
                                    <li class="product-rating">
                                        <ul class="list-unstyled">
                                            <li><span class="rate_active"></span></li>
                                            <li><span class="rate_active"></span></li>
                                            <li><span class="rate_active"></span></li>
                                            <li><span class="rate_active"></span></li>
                                            <li><span class="rate_disabled"></span></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div><!-- Ends: .product-excerpt -->
                        </div><!-- Ends: .product-single -->

                    </div><!-- Ends: .col-md-4 -->

    `;
    html += div;
  });
  content.innerHTML = html;

};
// let level = sessionStorage.getItem("userLevel");
let first = db
  .collection('products')
  .where("vendor", "==", nameID)
  .orderBy('date', 'desc')
  .onSnapshot(
    doc => {
      let data = doc.docs;
      setupContent(data);
    },
    err => {
      console.log(err);
    }
  );
// setInterval(setupContent, 2000)
// setupContent();

// var first = db.collection("posts")
//   .orderBy('date', 'desc')
//   .limit(8);

// return first.get().then(function (documentSnapshots) {
//   // Get the last visible document
//   var lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];
//   console.log("last", lastVisible);
//   // });

//   // Construct a new query starting at this document,
//   // get the next 8 posts.
//   var next = db.collection("posts")
//     .orderBy('date', 'desc')
//     .startAfter(lastVisible)
//     .limit(8);
// });
