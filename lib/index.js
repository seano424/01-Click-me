const displayAlertOnButtonClick = () => {
  // TODO: Select the big green button
  const btn = document.querySelector('.btn');
  // TODO: Bind the `click` event to the button
  btn.addEventListener('click', (event) => {
    alert("Thank you!");
  });
  // TODO: On click, display `Thank you!` in a JavaScript alert!
};

displayAlertOnButtonClick(); // Do not remove!
