$(document).ready(function() {
  $("#transportationSurvey").submit(function(event) {
    event.preventDefault();
    $("#workResponses").show();
    $("input:checkbox[name=workTransportation]:checked").each(function() {
      var workTransportationMode= $(this).val();
      $("#workResponses").append(workTransportationMode + "<br>");
    });
    $("#clubResponses").show();
    $("input:checkbox[name=clubTransportation]:checked").each(function() {
      var clubTransportationMode=$(this).val();
      $("#clubResponses").append(clubTransportationMode + "<br>");
    });
  });
});
