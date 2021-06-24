var div = document.getElementById('cardImg');
var con = 0;

function getData() {
    fetch('http://localhost:3000/posts')
        .then(function(res) {
            return res.json()
        })
        .then(function(data) {
            for (var index = 0; index < 4; index++) {
                div.innerHTML += `
               <div class="card col-3 m-1 mx-auto">
                    <img src="${data[con].thumbnailUrl}" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">Tên: ${data[con].title}</h5>
                        <p class="card-text"> Tuổi: ${data[con].age}</p>
                    </div>
                </div>
               `
                con += 1;
            }
        })
        .catch((error) => {
            console.log(error)
        })
}
getData()

function createData() {
    document.getElementById("create-new").addEventListener('click', function() {
        var name = document.getElementById('name').value;
        var age = document.getElementById('age').value;
        var thumbnailUrl = document.getElementById('image').value;
        console.log(image)
        var dataa = { name, age }
        fetch('http://localhost:3000/posts', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataa),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    })
}
createData(function() {
    getData()
})