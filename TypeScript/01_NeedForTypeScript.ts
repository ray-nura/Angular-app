let message = 'Welcome to TS';

message.toLowerCase();
// message();

const user = {
    name: 'Daniel',
    age: 27
}

// user.location;

const announce = 'Welcome world!';

//How quickly can you spot the typos?
// announce.toLocalLowerCase();
// announce.toLocalLowerCase();

// We probably meant to write this...
announce.toLocaleLowerCase(); 


function flipCoin(){
    // return Math.random < 0.5;
    return Math.random() < 0.5;
}