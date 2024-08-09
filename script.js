// Criando uma classe
class Book {
    // Método contructor será p móddo onde iremos guardar a propiedades da clae.
    constructor(title) {
        this.title = title 
        this.published = false
    }
    
    //outros método
    publish() {
        this.published = true
        console.log('o livro agora esta pulicado: ${this.publish')
    }
}

//Criando uma instância 
const eragon = new Book('Eragon')


//chamadas
eragon.publish()

