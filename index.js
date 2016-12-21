// Incorporate the FS Package
fs = require("fs");

// Read the File
fs.readFile("Animals.csv", "utf8", (err, data) => {

    // Test that our data came in
    // console.log(data);


    // Convert the data into an array separated by new lines
    textArray = data.split("\n");

    // Create an object for tracking each of the animals
    animalCounter = {};

    /*
     {
     "Hippo": 3,
     "Chimpanzee": 0,
     "Antelope": 0
     }
     */

    // Loop through every element in our array
    for (word in textArray){

        // Test the output of each word
        // console.log(textArray[word]);

        // If the animal has been found before
        if (textArray[word] in animalCounter){

            // Log that it's been found
            console.log("FOUND ONE")

            // Then add one to the count
            animalCounter[textArray[word]]++;
        }

        // If the animal hasn't been tracked yet...
        else {

            // Set the counter equal to 0 for that animal
            console.log("New Animal found!")
            animalCounter[textArray[word]] = 0;
        }

    }

    // Log the animal counts
    console.log(animalCounter);

    // Setup max counters
    maxAnimal = "";
    maxCount = 0;

    // Iterate through and identify which is max
    for (animal in animalCounter){

        // If an animal's max is greater than the current max
        if (animalCounter[animal] > maxCount){

            // Reassign the current one to the new one
            maxAnimal = animal
            maxCount = animalCounter[animal]
        }
    }

    // Log the max animal and max animal counts
    console.log("The most frequent animal is " + maxAnimal);
    console.log("There are " + maxCount + " instances of this animal.")
