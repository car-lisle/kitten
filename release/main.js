var kbValues = {
    projectName: "kittenbook",
    versionNumber: '0.0.1',
    currentTime: new Date()
};
var userName = prompt('Hello, what\'s your name?');
document.body.innerHTML = '<h1>Hello, ' + userName + '!</h1>' +
    '<p>' + kbValues.projectName + ' ' + kbValues.versionNumber +
    ' viewed on: ' + kbValues.currentTime + '</p>';
var images = document.querySelectorAll('div.userContentWrapper img');