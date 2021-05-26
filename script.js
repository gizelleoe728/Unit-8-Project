let numClicks= 0;
$(".answer").hide();

$("button").click(function() {
    numClicks = numClicks + 1;
    console.log(numClicks);
    $(".number").text("You have taken the test: " +numClicks);
    let input1 = $(".input1").val();
    let input2 = $(".input2").val();
    $(".answer").text("Do I work well with people? " + input1 + ". On a scale of how lazy I am, I’ll say " + input2 + ".");
    $(".answer").show();
});
