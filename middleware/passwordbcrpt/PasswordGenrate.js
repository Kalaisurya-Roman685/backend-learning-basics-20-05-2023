


import bcrypt from 'bcrypt';


export const PasswordCreate = async (password) => {
    try{
        const gensalt = 10;
        const hanshedpassword=await bcrypt.hashSync(password, gensalt)
        return hanshedpassword;
    }
  
    catch(err)
    {
        console.log(err);
    }
}


export const PasswordCheck= async (password,comparepassowrd) => {
    try{
      
        const hanshedpassword=await bcrypt.compare(password,comparepassowrd)
        return hanshedpassword;
    }
  
    catch(err)
    {
        console.log(err);
    }
}