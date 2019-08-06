$(function(){
  function buildHTML(message){
    var html = `<div class="upper-info">
                  <div class="upper-info__user">
                    ${message.name}
                  </div>
                  <div class="upper-info__date">
                    ${message.created_at}
                  </div>
                </div>
                <div class="message">`
                  if (message.content != null) {
                    html += `<p>
                              ${message.content}
                            </p>`
                  }
                  if (message.image != null) {
                    html += `<img src="${message.image}">`
                  }
                + `</div>`
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
      $('.contents-right__messages').append(html)
      $('.contents-right__bottom__form__input-box__text').val('')
      $('#message-image').val('')
      $('html, body').animate({ scrollTop: $('html, body')[0].scrollHeight});
      $('.contents-right__bottom__form__submit').attr('disabled', false);
    })
    .fail(function(){
      alert('error');
      $('.contents-right__bottom__form__submit').attr('disabled', false);
    })
  });
});
