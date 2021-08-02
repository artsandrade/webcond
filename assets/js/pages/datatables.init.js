$(document).ready(function () {
  var local_traducao = window.location.origin + '/assets/js/pages/dataTables.pt_br.json'
  $(".tabela").DataTable({
    language: {
      url: local_traducao
    }
  })
});