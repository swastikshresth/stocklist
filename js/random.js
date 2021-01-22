function random() {
    var country = document.getElementById("countryId").value;
    var state = document.getElementById("stateId").value;
    var city = document.getElementById("cityId").value;
    if (country.length <= 0) {
        alert("this field this required");
    }
    if (state.length <= 0) {
        alert("this field this required");
    }
    if (city.length <= 0) {
        alert("this field this required");
    } else {
        alert("you are successfully redirected");
    }
}

function grandtotal() {
    var quantity = document.getElementById("quantity").value;
    var price = document.getElementById("price").value;
    var total = quantity * price;
    alert(total);
}