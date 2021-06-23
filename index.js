var dataLink = 'http://localhost:3000/info';
var listInfo = document.getElementById('list-info');
console.log(listInfo);
function start() {
    getData()
};
start();
function getData() {
    fetch(dataLink)
        .then((response) => response.json())
        .then(function(infomation) {
            var html = infomation.forEach(function(data) {
              console.log(data.name);
              return 
              ` <li> ${data.name} </li> `
            });
            console.log(html);
            listInfo.innerHTML = html.join('')

        });


}
