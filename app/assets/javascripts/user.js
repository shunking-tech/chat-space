$(function(){
  function buildHTML(user){
    var html = `<div class="chat-group-user clearfix chat-group-form__field--right">
                  <p class="chat-group-user__name">${user.name}</p>
                  <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
                </div>`
    return html;
  }

  $('#user-search-field').on('keyup', function(e){
    var url = '/users'
    var keyword = $(this).val();

    $.ajax({
      url: url,
      type: "GET",
      data: {user: keyword},
      dataType: 'json',
    })
    .done(function(data){
      var users = data['users'];
      var html;
      $('#user-search-result').empty();
      if(keyword != 0){
        for ( var i = 0; i < users.length; i++ ) {
          html = buildHTML(users[i]);
          $('#user-search-result').append(html);
        }
      }
    })
    .fail(function(){
      alert('ユーザー検索に失敗しました');
    })
  })

  $('#user-search-result').on('click','.chat-group-user__btn--add' , function(e){
    console.log('add')
  })
})
