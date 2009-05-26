$(function () {
  $("*[title]").each(function () {
    $(this).append($("<span>" + $(this).attr("title") + "</span>").
                   addClass('sidenote'));
  });
});
