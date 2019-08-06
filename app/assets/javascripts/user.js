$(function(){
  $('#user-search-field').on('keyup', function(e){
    var url = '/users'
    var keyword = $(this).val();

    $.ajax({
      url: url,
      type: "GET",
      data: {user: keyword},
      dataType: 'json',
    })
  })
})
