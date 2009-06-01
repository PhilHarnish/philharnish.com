$(function () {
  // Creates sidenotes for each element with a tittle attribute.
  $("*[title]").each(function () {
    $(this).append($("<span>" + $(this).attr("title") + "</span>").
                   addClass('sidenote'));
  });
  // Special FX for links in the footer.
  $("#more").hide();
  $("#less").append(
    $("<a href='#more' id='expander'>more</a>").click(function() {
      $("#expander").text("more").attr("href", "#more");
      $("#more").show();
    })
  );
});
