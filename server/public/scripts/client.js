$(document).ready(init);

function init() {
  console.log('DOM is READY!!!');

  getInventory();
}

function getInventory() {
  // AJAX request to server for inventory
  $.ajax({
    method: 'GET',
    url: '/inventory',
  })
  .then((response) => {
    render(response);
  })
  .catch((err) => {
    console.log('err');
    alert('There was an error finding inventory.');
  });
}


// render inventory to the DOM
function render(inventoryList) {
  console.log('RENDER INVENTORY');
  $('.js-inventory-list').empty();

  for (let i = 0; i < inventoryList.length; i++) {
    const inventoryItem = inventoryList[i];

    $('.js-inventory-list').append(`
      <p><strong>${inventoryItem.name}:</strong> ${inventoryItem.description}</p>
    `);
  }
}
