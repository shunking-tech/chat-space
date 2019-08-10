$(function(){
  function buildHTML(message){
    var content = (message.content != null) ? `<p>${message.content}</p>` : ``;
    var image = (message.image.url != null) ? `<img src="${message.image.url}">` : ``;
    var html = `<section id="message" data-message-id="${message.id}">
                  <div class="upper-info">
                    <div class="upper-info__user">
                      ${message.name}
                    </div>
                    <div class="upper-info__date">
                      ${message.created_at}
                    </div>
                  </div>
                  <div class="message">
                    ${content}
                    ${image}
                  </div>
                </div>`
                return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      var formElement = document.getElementById('new_message')
      $('.contents-right__messages').append(html)
      formElement.reset();
      $('html, body').animate({ scrollTop: $('html, body')[0].scrollHeight});
      $('.contents-right__bottom__form__submit').attr('disabled', false);
    })
    .fail(function(){
      alert('error');
      $('.contents-right__bottom__form__submit').attr('disabled', false);
    })
  });

  var reloadMessages = function() {
    //カスタムデータ属性を利用し、ブラウザに表示されている最新メッセージのidを取得
    var m = document.getElementsByTagName('section');
    console.log(m)
    last_message_id = m[m.length -1].getAttribute('data-message-id');
    console.log(last_message_id)
    $.ajax({
      //ルーティングで設定した通り/groups/id番号/api/messagesとなるよう文字列を書く
      url: 'api/messages',
      //ルーティングで設定した通りhttpメソッドをgetに指定
      type: 'get',
      dataType: 'json',
      //dataオプションでリクエストに値を含める
      data: {id: last_message_id}
    })
    .done(function(messages) {
      console.log('sucsess');
    })
    .fail(function() {
      console.log('error');
    });
  };
  setInterval(reloadMessages, 5000);
});
