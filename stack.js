/*
        Stack (in js is just an array)
         -  is like a pile of books on top of each other/ or
        a browser with a back button
        It's a LIFO (Last In First Out)

        Functions:: push, pop, peek, length/size
        push - adds an item on top of the stack
        pop - removes top item from the stack
        peek - displays the top element of a stack
        length/size - checks the no of items/elements in the stack

 */

let letters = []; // a stack

let word = 'racecar';

let rword = "";

// put letters of word into stack
for (let i = 0; i < word.length; i++){
    rword += letters.push(word[i])
}


// pop off the stack in reverse order
for (let i = 0; i < word.length; i++){
    rword += letters.pop();
}
