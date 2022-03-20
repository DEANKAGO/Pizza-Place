$(document).ready(function() {

  $(".first").click(function() {
    $("#img1").toggle();
    $("#p1").toggle();
  })

  $(".second").click(function() {
    $("#img2").toggle();
    $("#p2").toggle();
  })

  $(".third").click(function() {
    $("#img3").toggle();
    $("#p3").toggle();
  })


  $(".btn1").click(function(){
    var pizzaSize = $("#size option:selected").val();
    var pizzaToppings = $("#toppings option:selected").val();
    var pizzaCrust = $("#crust option:selected").val();
    var total = parseInt(pizzaSize) + parseInt(pizzaToppings) + parseInt(pizzaCrust);

    var grandTotal =0;
    var order = 1;


    function pizzaOrder(size, toppings, crust, total, orderNo) {
      this.size = size;
      this.toppings = toppings;
      this.crust = crust;
      this.total = total;
      this.orderNo = orderNo;
    }



    $("#size1").html($("#size option:selected").text() + "-" +pizzaSize);
    $("#toppings1").html($("#toppings option:selected").text() + "-" +pizzaToppings);
    $("#crust1").html($("#crust option:selected").text() + "-" +pizzaCrust);
    $("#total").html(total);


    $(".btn2").click(function(){
      var pizzaSize = $("#size option:selected").val();
      var pizzaToppings = $("#toppings option:selected").val();
      var pizzaCrust = $("#crust option:selected").val();
      var total = parseInt(pizzaSize) + parseInt(pizzaTopping) + parseInt(pizzaCrust);
      order = order + 1;
      grandTotal = grandTotal + total;

      var newPizza = new pizzaOrder(pizzaSize, pizzaTopping, pizzaCrust, order, total);

      var newRow = '<tr><th scope="row">' + newPizza.orderNo + '</th><td id="size1">' + $("#size option:selected").text() + " - " + newPizza.size + '</td><td id="toppings1">' + $("#toppings option:selected").text() + " - " + newPizza.toppings + '</td><td id="crust1">' + $("#crust option:selected").text() + " - " + newPizza.crust + '</td><td id="total">' + newPizza.total + '</td></tr>'

      $("#table1").append(newRow);

    })

  })
 


})