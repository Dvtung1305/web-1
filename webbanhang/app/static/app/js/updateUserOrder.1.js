function updateUserOrder(productId, action) {
  console.log("User logged in, success add ");
  var url = "/update_item";
  fetch(url, {
    method: "POST",
    headers: {
      Content_Type: "application/json",
      "X-CSRFToKen": csrftoken,
    },
    body: JSON.stringify({ productId: productId, action: action }),
  })
    .then((response) => {
      response.json();
    })
    .then((data) => {
      console.log("data", data);
    });
}
