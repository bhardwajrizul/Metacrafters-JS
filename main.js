/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let NFT_Holder = [];
let id = 0;

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, age, gender, isIndian) {
    NFT = {
        id: id + 1,
        name: name,
        age: age,
        gender: gender,
        isIndian: isIndian
    }
    id += 1;
    NFT_Holder.push(NFT);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for (let i = 0; i < NFT_Holder.length; i++) {
        console.log("Name : ", NFT_Holder[i].name);
        console.log("Age : ", NFT_Holder[i].age);
        console.log("Gender : ", NFT_Holder[i].gender);
        console.log("Is Indian : ", NFT_Holder[i].isIndian);
        console.log('--------------------------\n');
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total Supply of NFTs : ", NFT_Holder.length);
}

// call your functions below this line
mintNFT("Rizul", 21, "male", true)
mintNFT("Sneha", 20, "female", true)
mintNFT("Chris", 40, "male", false)


listNFTs();

getTotalSupply();