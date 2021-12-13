const user = {
    "name": "Aryclenio Barros",
    "age": 22,
    "alive": true,
    "address": {
      "street": "Hyrule street",
      "number": 24,
    }
  }
  
  // Without optional chaining
  const number = user.address && user.address.number;
  console.log("Number without optional chaining : ", number);
  
  // With optional chaining
  const optionalChainingNumber = user.address?.number;
  console.log("Number with optional chaining : ", optionalChainingNumber);