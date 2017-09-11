const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    },
];
function threeOrMoreLanguages(user){
    return user.languages.length >= 3;
}
let languageNumber = users.filter(threeOrMoreLanguages);
        console.log(languageNumber);

function userEmail(user) {
    return user.email;
}

let emails = users.map(userEmail);
    console.log(emails);
let newObject = users.reduce((tempObject, user) => {
    tempObject[user.id] = user;
    return tempObject;
}, {});
console.log(newObject);


