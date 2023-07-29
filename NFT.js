// Create a variable to hold your NFT's
const nfts = [];
// transaction id = T1506
// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata,
// and store it in the variable above.
function mintNFT(name, eyeColor, shirtType, bling) {
  const nft = {
    name: name,
    eyeColor: eyeColor,
    shirtType: shirtType,
    bling: bling,
  };

  // Store the NFT in the array
  nfts.push(nft);
}

// Create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
  for (const nft of nfts) {
    console.log("Name:", nft.name);
    console.log("Eye Color:", nft.eyeColor);
    console.log("Shirt Type:", nft.shirtType);
    console.log("Bling:", nft.bling);
    console.log("-------------");
    console.log("transaction id : T1506")
  }
}

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
  return nfts.length;
}

// Call your functions below this line

// Mint some NFTs
mintNFT("NFT-001", "Blue", "T-Shirt", "Diamond Necklace");
mintNFT("NFT-002", "Green", "Hoodie", "Gold Bracelet");
mintNFT("NFT-003", "Brown","formal shirt","silver bracelet");

// Print the list of NFTs
listNFTs();

// Print the total number of NFTs
console.log("Total NFTs minted:", getTotalSupply());
