addEventListener('load', function() {

  console.log('Vanilla JS is ready');

  // utils 
  const buttonKeySpace = 32;
  const buttonKeyEnter = 13;

  function showAlert(title) {
    alert(title);
  }

  function handleButtonKeyDown(alertMessage) {
    return function(event) {
      const isPressEnterOrSpace = event.keyCode === buttonKeySpace || event.keyCode === buttonKeyEnter;
      if (isPressEnterOrSpace) {
        showAlert(alertMessage);
      }
    };
  }

  // selectors
  const button = document.querySelector('.button');

  // listeners
  button?.addEventListener('click', showAlert('button clicked'));
  button?.addEventListener('keydown', handleButtonKeyDown('button keydown'));
});