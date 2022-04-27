package aula03;

public class Caneta {
    public String modelo;
    public String cor;
    private float ponta;
    protected int carga;
    private Boolean tampada = true;
    public void status(){
        System.out.println("O modelo dessa caneta é: " + this.modelo);
        System.out.println("É " + this.cor);
        System.out.println("Ponta: " + this.ponta);
        System.out.println("Carga: " + this.carga + "%");
        System.out.println("Está tampada? " + this.tampada);
    }
    public void rabiscar(){
        if(this.tampada == true){
            System.out.println("Não consigo rabiscar com a tampa");
        } else{
            System.out.println("Rabiscandoooo");
        }
    }
    protected void tampar(){
        this.tampada = true;
    }
    protected void destampar(){
        this.tampada = false;
    }
}
