// let book=Array(6);
// book[0]="War and Peace";
// book[1]="Combodian History";
// book[2]="Angor Wat";
// book[3]="The Art of War";
// book[4]="The Art of Computer Programming";
// book[5]="Combodian amazing history";
// document.write("<h3>Book List</h3>");
// for(let i in book){
//    document.write("book[" + i + "] = " + book[i] + "<br>");
// }
    // var day = new Array ("Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday");
    // var month = new Array ("January", "February", "March", "April", "May","June", "July", "August", "September", "October","November", "December");
    // var now = new Date();
    // var year= now.getFullYear();
    //  document.write("<H3>Today is " + day[now.getDay()] + ", " + month[now.getMonth()] + " " + now.getDate() + " , " + now.getFullYear()+".</H3>")
      let a = [];
    
    function nameprodu() {
      let name = document.getElementById("name").value;
      let qty = parseInt(document.getElementById("qty").value);
      let price = parseFloat(document.getElementById("price").value);

      if (!name || isNaN(qty) || isNaN(price)) {
        alert("Please enter in Box!");
        return;
      }
      document.getElementById("name").value = "";
      document.getElementById("qty").value = "";    
      document.getElementById("price").value = "";

      a.push({ name, qty, price });
      showprodu();
    }
  function showprodu() {
  let show = document.getElementById("showTable");
  show.innerHTML = "";
  let subtotal = 0;
  let chai=0;

  a.forEach((p, chai) => {
    let total = p.qty * p.price;
    subtotal += total;
    show.innerHTML += `<tr>
      <td>${chai + 1}</td>   
      <td>${p.name}</td>
      <td>${p.qty}</td>
      <td>$${p.price}</td>
      <td>$${total}</td>
    </tr>`;
  });

  let sum = 0;
  if (subtotal >= 100 && subtotal <200) sum = 0.10;
  else if (subtotal >= 200 && subtotal <300) sum = 0.15;
  else if (subtotal >= 300 && subtotal <400) sum = 0.20;
  else if (subtotal >=400) sum = 0.25;

  let discount = subtotal * sum;
  let finalTotal = subtotal - discount;

  document.getElementById("subtotal").innerHTML = "Subtotal = $" + subtotal;
  document.getElementById("discount").innerHTML = "Discount = $" + discount.toFixed(2);
  document.getElementById("finalTotal").innerHTML = "Total = $" + finalTotal.toFixed(2);
}
