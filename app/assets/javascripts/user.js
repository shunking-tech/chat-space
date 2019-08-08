$(function(){
  function buildAddHTML(user){
    var html = `<div class="chat-group-user clearfix chat-group-form__field--right">
                  <p class="chat-group-user__name">${user.name}</p>
                  <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
                </div>`
    return html;
  }

  function buildMemberHTML(user){
    var html = `<div class='chat-group-user chat-group-form__field--right'>
                  <input name='group[user_ids][]' type='hidden' value='${user['id']}'>
                  <p class='chat-group-user__name'>${user['name']}</p>
                  <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
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
          html = buildAddHTML(users[i]);
          $('#user-search-result').append(html);
        }
      }
    })
    .fail(function(){
      alert('ユーザー検索に失敗しました');
    })
  })

  $('#user-search-result').on('click','.chat-group-user__btn--add' , function(e){
    var clickedBotton = this
    var selectedUserElement = $(this).parent()
    var userId = clickedBotton.getAttribute('data-user-id')
    var userName = selectedUserElement.find('.chat-group-user__name').text()
    var user = {id: userId, name: userName}
    selectedUserElement.remove()
    html = buildMemberHTML(user)
    $('#user-chat-member').append(html);
  })
})
