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
                                    <img src="${preview}" alt="" class="img-fluid" width="30" height="2">
                                    <div class="prod_option show">
                                        <a href="#" id="drop_1" class="dropdown-toggle" data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="true">
                                            <span class="icon-settings setting-icon"></span>
                                        </a>

                                        <div class="options dropdown-menu" aria-labelledby="drop_1">
                                            <ul>
                                                
                                                
                                                <li class="dropdown-item">
                                                    <button  class="btn btn-danger" onclick="del()" value="${id}"  id="bttn">Delete</button>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </figure>
                            </div><!-- Ends: .product-thumb -->
                            <div class="product-excerpt">
                                <h5>
                                    <a href="#"> ${title}</a>
                                </h5>
                                <ul class="titlebtm">
                                    <li>
                                        <img class="auth-img" src="${preview}" alt="author image">
                                        <p>
                                            <a href="#">${description}</a>
                                        </p>
                                    </li>
                                    <li class="product_cat">
                                        
                                        <a href="#">Tag: ${ tag}</a>
                                    </li>
                                </ul>
                                <ul class="product-facts clearfix">
                                    <li class="price">Price : $ ${price}</li>
                                  
                                    
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
