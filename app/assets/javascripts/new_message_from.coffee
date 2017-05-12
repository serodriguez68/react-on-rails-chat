$(document).on 'turbolinks:load', ->

  # Bind keydown event to message content textarea
  $('#message_content').on 'keydown', (event) ->
    if event.keyCode is 13 && !event.shiftKey
      $('input').click()
      event.target.value = ""
      event.preventDefault()
