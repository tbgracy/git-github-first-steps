async function getData(filename) {
    const response = await fetch(filename);
    const jsonData = await response.json();
    return jsonData;
}

const data = getData('data.json');
const messageList = document.getElementById('message-list');

data.then((value) => {
    for (const item of value) {
        let messageItem = document.createElement('article')
        messageItem.classList.add('message-item')
        messageItem.innerHTML = `
            <p>" ${item.message} "</p>
            <br>
            <h3> - ${item.username}</h3>
        `
        messageList.appendChild(messageItem);
    }
});