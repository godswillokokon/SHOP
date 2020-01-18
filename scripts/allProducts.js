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


    const div = `
      <div class="col-lg-4 col-md-6">

                                        <div class="product-single latest-single">

                                            <div class="product-thumb">

                                                <figure>
                                                    <img src="${preview}" alt="" class="img-fluid">
                                                    <figcaption>
                                                        <ul class="list-unstyled">
                                                            <li>
                                                             <button  class="btn btn-danger" onclick="del()" value="${id}"  id="bttn"><span class="icon-basket"> Buy </span></button>
                                                             </li>
                                                            
                                                        </ul>
                                                    </figcaption>
                                                </figure>
                                            </div>
                                            <!-- Ends: .product-thumb -->
                                            <div class="product-excerpt">
                                                <h5>
                                                    <a href="#"> ${title}</a>
                                                </h5>
                                                <ul class="titlebtm">
                                                    <li>
                                                        <img class="auth-img" src="${preview}" alt="author image">
                                                        <p><a href="#"> ${description}</a></p>
                                                       
                                                        
                                                    </li>
                                                     <li>
     <p><a href="#"><strong>Posted:</strong>  ${date}</a></p>
                                                     </li>
                                                    
                                                </ul>
                                                <ul class="product-facts clearfix">
                                                    <li class="price">$ ${price}</li>
                                                    <li class="sells">
                                                       
                                                        Tag :  ${tag}
                                                    </li>
                                                   
                                                    
                                                   
                                                </ul>
                                            </div>
                                            <!-- Ends: .product-excerpt -->
                                        </div><!-- Ends: .product-single -->

                                    </div>

    `;
    html += div;
  });
  content.innerHTML = html;





};
// let level = sessionStorage.getItem("userLevel");
let first = db
  .collection('products')
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
