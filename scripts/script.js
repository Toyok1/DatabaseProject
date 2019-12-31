function pulisciJumbo(){
    $('#jumbo').html('');
}

function consultaStudio(){
    pulisciJumbo();

    $('#jumbo').append(`<table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>`);
  console.log("popolato con gli studi da consultare");
}

function ripristina(){
  pulisciJumbo();
  $('#jumbo').append(`<p class="my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet maximus orci, quis facilisis lorem accumsan sed. Curabitur id quam nec eros pellentesque sollicitudin vel nec sapien. Proin placerat erat nec condimentum malesuada. Pellentesque varius vitae velit eu imperdiet. Nam efficitur pretium rhoncus. Pellentesque turpis nisi, tincidunt sed nunc efficitur, volutpat cursus velit. Aenean est arcu, ullamcorper rutrum erat non, finibus finibus dolor. Praesent dolor erat, feugiat vel maximus ac, interdum eget sapien. Duis nec venenatis odio. Maecenas nec ante elit. Praesent egestas interdum velit in ultricies. Nulla nec euismod tellus. Nulla nec ipsum mi. Praesent interdum posuere mi, id congue sem placerat at. </p>`)
}
