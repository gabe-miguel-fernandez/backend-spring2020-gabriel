const myString = {
    string: "Programming with Treehouse is fun!",
    countWords() {
        let count = this.string.split(" ");
        console.log(typeof count);
        console.log(count);
        return count.length;
    }

}

console.log(myString);
console.log(myString.countWords());