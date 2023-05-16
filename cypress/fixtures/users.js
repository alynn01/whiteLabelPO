export const role = {
    programOwner: "programOwner",
    cardHolder: "cardHolder",
    admin: "admin",
    unknown: "unknown"
  };
  
  export const registrationStatus = {
    finished: "unverified",
    ongoing: "pending",
    future: "verified",
  };
  
  export const stagingUsers = [
    {
      role: role.programOwner,
      email: "amatest@yopmail.com",
      password: "P@$sw0rd",
      
    },
    {
      role: role.cardHolder,
      email: "autouser@qa.team",
      password: "P@$sw0rd",
    },
    
    {
      role: role.supportAdmin,
      email: "harrysup@qa.team",
      password: "Test@123"
    },
    
  
  ];
  
  export const productionUsers = [
    
    {
        role: role.programOwner,
        email: "damiuser001@yopmail.com",
        password: "Password@1",
        name: "",
      },
      {
        role: role.cardHolder,
        email: "",
        password: "",
      },
      
      {
        role: role.supportAdmin,
        email: "harrysup@qa.team",
        password: "Test@123"
      },
        
    
          
  ];
  