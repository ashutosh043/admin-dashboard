const mongoose = require('mongoose');


 async function databaseConnec(){
      try{
       
    const dataConn =  await mongoose.connect("mongodb+srv://ashusah95:kkoet6PD67Lf5MYy@cluster0.f9r5f.mongodb.net/userregistration?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Database Connected Sucessfully")

      }
      catch(error){
        throw new Error(error);
      }
    
}

databaseConnec();
