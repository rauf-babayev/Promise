// 1
let promise1 = new Promise(function(resolve) {
    setTimeout(() => resolve('success'), 4000);
});
// 2
let promise2 = new Promise(function(resolve) {
    setTimeout(() => resolve('success'), 4000);
});

promise2.then(value => console.log(value));
// 3
Promise.resolve(resolve => setTimeout(() => resolve('success'), 4000).then(value => console.log(value)));
// 4
Promise.reject(new Error('failed')).then(function(value) {
    console.log(value)  
}, function (error) {
    console.log('Oooops something went wrong');
});
// 5,6
const urls = [
    'https://swapi.co/api/people/1',
    'https://swapi.co/api/people/2',
    'https://swapi.co/api/people/3',
    'https://swapi.co/api/people/4'
];
Promise.all(urls.map(url =>
    fetch(url)
    .then(console.log)                 
    .catch(Error)
))
.then(data => {
// do something with the data
});
// 7
async function getAsync() {
    let response = await fetch('https://swapi.co/api/starships/9/')
}
getAsync().then(() => console.log)