/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package aula05;

/**
 *
 * @author victor
 */
public class contaBanco {
    public int numConta;
    protected String tipo;
    private String dono;
    private float saldo;
    private boolean status;
        
    
    public void estadoAtual(){
        System.out.println("-------------------------");
        System.out.println("Conta: " + this.getNumConta());
        System.out.println("Tipo da conta: "+ this.getTipo());
        System.out.println("Titular da conta: "+ this.getDono());
        System.out.println("Saldo atual: " + this.saldo);
        if (this.getStatus()){
            System.out.println("Status da conta: ativa");
        } else {
            System.out.println("Status da conta: inativa");
        }
    }
    //Métodos personalizados
    public void abrirConta(String t){
        this.setTipo(t);
        this.setStatus(true);
        if (t == "CC") {
            this.setSaldo(50);            
        } else if (t == "CP"){
            this.setSaldo(150);
        }
        System.out.println("Conta aberta com sucesso");
        
    }
    
    public void fecharConta(){
        if (this.getSaldo() > 0 ){
            System.out.println("Conta com dinheiro");
        } else if ( this.getSaldo()<0){
            System.out.println("Conta em debito");
        } else{
            this.setStatus(false);
            System.out.println("Conta finalizada");
        }
    }
    
    public void depositar(float v){
        if (this.getStatus()){
            this.setSaldo(this.getSaldo() + v);
            System.out.println("O valor foi depositado com sucesso na conta de " + this.getDono());
        } else {
            System.out.println("Nao foi possivel depositar nesta conta, pois se encontra desativada");
        }
    }
    
    public void sacar(float v){
        if (this.getStatus()){
            if(this.getSaldo() >= v){
                this.setSaldo(this.getSaldo() - v);
                System.out.println("Saque completo");
            } else {
                System.out.println("Saldo insuficiente para efetuar o saque");
            }
        } else{
            System.out.println("Conta inativa");
        }
    }
        
    public void pagarMensal(){
        int v = 0;
        if (this.getTipo() == "CC"){
            v = 12;
        } else if (this.getTipo() == "CP"){
            v = 20;
        }
        if (this.getStatus()){
            if (this.getSaldo() > 0){
                this.setSaldo(this.getSaldo() - v);
                System.out.println("Mensalidade de " + this.getDono() + "Paga");
            } else if(this.getSaldo()<0){
                System.out.println("Saldo insuficiente");
            } 
        }else{
            System.out.println("Não foi possivel efetuar o pagamento");
        }
    }
    
    
    //Métodos especiais
    public contaBanco(){
        this.saldo = 0;
        this.status = false;
    }

    public int getNumConta() {
        return numConta;
    }

    public void setNumConta(int numConta) {
        this.numConta = numConta;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getDono() {
        return dono;
    }

    public void setDono(String dono) {
        this.dono = dono;
    }

    public float getSaldo() {
        return saldo;
    }

    public void setSaldo(float saldo) {
        this.saldo = saldo;
    }

    public boolean getStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    
    
}
