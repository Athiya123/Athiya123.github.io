function updateCounter() {
    const counter = document.getElementById('counter');
    let count = localStorage.getItem('visitorCount');
    if (count === null) {
        count = 1;
    } else {
        count = parseInt(count) + 1;
    }
    localStorage.setItem('visitorCount', count);
    counter.innerHTML = `Visitor Count: ${count}`;
}
updateCounter();