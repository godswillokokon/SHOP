const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/ogcodes/upload";
const CLOUDINARY_UPLOAD_PRESET = "i4hpnx9j";
const CLOUD_NAME = "ogcodes";

let vendor = sessionStorage.getItem("username");

// let imgPreview = document.getElementById("img-preview").src;
let fileUpload = document.getElementById("thumbnail");


let date;

function savee() {

  let price = document.getElementById("rlicense").value;
  let title = document.getElementById("product_name").value;
  let tag = document.getElementById("tags").value;
  let description = document.getElementById("exlicense").value;
  // let price = contentOut.value;
  console.log("tag", tag);
  console.log("title", title);
  console.log("cont", price);
  console.log(description);
  // console.log(price.value);
  // console.log(price.innerText);
}

// console.log(vendor);

fileUpload.addEventListener("change", event => {

  // let courseDescription = document.getElementById("courseDescription").value;
  // let imgPreview = document.getElementById("img-preview");

  let price = document.getElementById("rlicense").value;
  let title = document.getElementById("product_name").value;
  let tagRaw = document.getElementById("tags").value;
  let tag = tagRaw.toLowerCase();
  let description = document.getElementById("exlicense").value;
  // let price = contentOut.value;
  console.log("tag", tag);
  console.log("title", title);
  console.log("cont", price);
  // console.log(price.innerHTML);
  // console.log(price.value);
  // console.log(price.innerText);



  console.log(event.target.files[0]);
  let file = event.target.files[0];

  let formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
  console.log(file);
  axios({
    url: CLOUDINARY_URL,
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    data: formData
  })
    .then(res => {
      console.log(res.data.secure_url);
      let preview = res.data.secure_url;

      // let video = res.data.secure_url;
      date = res.data.created_at;
      duration = res.data.duration;
      // console.log(title);
      // console.log(courseDescription);
      console.log("cloudinary works")
      console.log("preview", preview)
      console.log("title", title)
      console.log("date", date)
      console.log("price", price)
      console.log("tag", tag)
      console.log("vendor", vendor)
      return db
        .collection("products")
        .doc()
        .set({
          preview,
          title,
          date,
          tag,
          price,
          vendor,
          description
        })
        .catch(err => {
          console.error(err);
        });
    })
    .catch(err => {
      console.log(err);
    });
  alert("product added")
});

