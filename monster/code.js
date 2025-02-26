//JSON  
function banco(){
    const bd = [
        {id:1, login:"john", senha:123, nome:"john", email:"john@gmail.com.br"},//0
        {id:2, login:"ringo", senha:123, nome:"ringo", email:"ringo@gmail.com.br"},//1
        {id:3, login:"paul", senha:123, nome:"paul", email:"paul@gmail.com.br"}//3
    ]
    let dados = JSON.stringify(bd)

    localstorage.setitem("banco", dados)
    
    console.log(dados)
}