
package aula02;

public class Caneta {
    String modelo;
    String cor;
    float ponta;
    int carga;
    Boolean tampada;
    void status(){
        System.out.println("O modelo dessa caneta é: " + this.modelo);
        System.out.println("É " + this.cor);
        System.out.println("Ponta: " + this.ponta);
        System.out.println("Carga: " + this.carga + "%");
        System.out.println("Está tampada? " + this.tampada);
    }
    void rabiscar(){
        if(this.tampada == true){
            System.out.println("Não consigo rabiscar com a tampa");
        } else{
            System.out.println("Rabiscandoooo");
        }
    }
    void tampar(){
        this.tampada = true;
    }
    void destampar(){
        this.tampada = false;
    }
}
