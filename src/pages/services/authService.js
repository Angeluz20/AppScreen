export function Signin(){
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve({
                token:'abcd123',
                user:{
                    name:'Angeluz',
                    email:'teste@gmail.com'
                },
            });
        },2000)
    })
}