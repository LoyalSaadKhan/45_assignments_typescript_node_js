// Magicians: Make a array of magician's names. Pass the array to a function called show magicians(), which prints the name of each magician in the array.

let magician : string[] = ['Amit Baba','Akhter Bangli','David Copperfield','Liza'];

function show_magicians(magicians: string[]){

    magicians.forEach(element => {
    console.log(element);
    });

}
    show_magicians(magician);

