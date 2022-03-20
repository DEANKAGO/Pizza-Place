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


  $("table").hide();
  $(".buttons").hide();
  $(".feedback").hide();
  $(".btn-yes").hide();
  $(".btn-no").hide();
  $(".feedback h5 ").hide();


  $(".btn1").click(function(){
    var pizzaSize = $("#size option:selected").val();
    var pizzaToppings = $("#toppings option:selected").val();
    var pizzaCrust = $("#crust option:selected").val();
    var total = parseInt(pizzaSize) + parseInt(pizzaToppings) + parseInt(pizzaCrust);

    var order = 1;
    var grandTotal =0;
    
    $("#size1").html($("#size option:selected").text() + "-" +pizzaSize);
    $("#toppings1").html($("#toppings option:selected").text() + "-" +pizzaToppings);
    $("#crust1").html($("#crust option:selected").text() + "-" +pizzaCrust);
    $("#total").html(total);

    function Pizza(size, toppings, crust, total, orderNo) {
      this.size = size;
      this.toppings = toppings;
      this.crust = crust;
      this.total = total;
      this.orderNo = orderNo;
    }

    $("table").show()
    $(".buttons").show()
    $(".btn1").hide()
    $(".btn5").show()


    $(".btn2").click(function(){
      var pizzaSize = $("#size option:selected").val();
      var pizzaToppings = $("#toppings option:selected").val();
      var pizzaCrust = $("#crust option:selected").val();
      var total = parseInt(pizzaSize) + parseInt(pizzaToppings) + parseInt(pizzaCrust);
      order = order + 1;
      grandTotal = grandTotal + total;

      var newPizza = new Pizza(pizzaSize, pizzaToppings, pizzaCrust, total, order);

      var newRow = '<tr><th scope="row">' + newPizza.orderNo + '</th><td id="size1">' + $("#size option:selected").text() + " - " + newPizza.size + '</td><td id="toppings1">' + $("#toppings option:selected").text() + " - " + newPizza.toppings + '</td><td id="crust1">' + $("#crust option:selected").text() + " - " + newPizza.crust + '</td><td id="total">' + newPizza.total + '</td></tr>'

      $("#table1").append(newRow);

    })


    $(".btn5").click(function() {
      $(".btn2").hide();
      $(".btn5").hide();
      $(".feedback").show();
      $(".btn-yes").show();
      $(".btn-no").show();
      $(".feedback .pick-up").hide();
      grandTotal = grandTotal + total;

      $(".feedback h3 span").html(grandTotal);
    })


    $(".btn-yes").click(function() {
      $(".feedback h4").hide();
      $(".btn-yes").hide();
      $(".btn-no").hide();
      $(".feedback .pick-up").show();
      $(".feedback h3 span").html(grandTotal + 200);
    })


     $(".btn-no").click(function() {
      $(".feedback h4").hide();
      $(".btn-yes").hide();
      $(".btn-no").hide();
      $(".feedback .pick-up").show();
    })

    $(".btn3").click(function() {
      var location = $(".feedback .pick-up input").val();
      $(".feedback h5").show();
      $(".feedback .pick-up").hide();
      $(".feedback h5 span").html(pick-up);
    });


  

  })
 


})