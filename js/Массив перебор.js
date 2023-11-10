const number = [1, 8, 3, 4, 9, 15, 44, 18];
const langs = ['HTML', 'CSS', 'JS', 'Py', 'PHP'];

const basket = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        "price": 900,
        "quantity": 1,
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
        "price": 300,
        "quantity": 2,
    },
    {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
        "price": 1100,
        "quantity": 3,
    },
    {
        "userId": 1,
        "id": 4,
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
        "price": 770,
        "quantity": 5,
    },
    {
        "userId": 1,
        "id": 5,
        "title": "nesciunt quas odio",
        "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
        "price": 900,
        "quantity": 1,
    },
    {
        "userId": 1,
        "id": 6,
        "title": "dolorem eum magni eos aperiam quia",
        "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
        "price": 900,
        "quantity": 0,
    },
];

//const result = number.forEach(element => element*2);
//const result = number.forEach((www, qqq, rrr) => rrr[qqq] = www*2);
//const result = number.map((www,qqq) => www**2);
//const result = basket.map((el) => ({id: el.id, userId: el.userId}));
//const result = number.filter((el) => el > 4);
//const result = basket.filter((el) => el.id > 1);
const result = basket.reduce((acc, item) => {
    if (item.quantity <= 0) return acc;
    return acc + item.quantity * item.price;
}, 0);

console.log('result', result);
console.log(basket);
