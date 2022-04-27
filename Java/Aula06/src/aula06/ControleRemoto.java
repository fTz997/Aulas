/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package aula06;

/**
 *
 * @author victor
 */
public class ControleRemoto implements Controlador{
    //Atributos 
    private int volume;
    private boolean ligado;
    private boolean tocando;
    
    //Métodos especiais
    public ControleRemoto(){ //Método construtor
        this.volume = 30;
        this.ligado = true;
        this.tocando = false;        
    }

    private int getVolume() {
        return volume;
    }

    private void setVolume(int volume) {
        this.volume = volume;
    }

    private boolean getLigado() {
        return ligado;
    }

    private void setLigado(boolean ligado) {
        this.ligado = ligado;
    }

    private boolean getTocando() {
        return tocando;
    }

    private void setTocando(boolean tocando) {
        this.tocando = tocando;
    }
    
    //Métodos abstratos, implementados da interface Controlador
    

    @Override
    public void ligar() {
        this.setLigado(true);
    }

    @Override
    public void desligar() {
        this.setLigado(false);
    }

    
    
    @Override
    public void abrirMenu() {
        if (this.getLigado()){
            System.out.println("----- MENU -----");
            System.out.println("Esta ligado? " + this.getLigado());
            System.out.println("Esta tocando? " + this.getTocando());
            System.out.print("Volume: " + this.getVolume() + " ");
            for(int i = 0; i <= this.getVolume(); i += 10){
                System.out.print("|");

            }
            System.out.println(" ");
        } else {
            System.out.println("Nao foi possivel abrir o menu");
        }
    }

    @Override
    public void fecharMenu() {
        System.out.println("Fechando menu");
    }
    

    
    @Override
    public void maisVolume() {
        if (this.getLigado()){
            this.setVolume(this.getVolume() + 5);
        } else {
            System.out.println("Impossivel aumentar o volume");
        }
    }
    
    @Override
    public void menosVolume() {
        if (this.getLigado()){
           this.setVolume(this.getVolume() - 5);
        } else {
            System.out.println("Impossivel diminuir o volume");
        }
    }
    
    

    @Override
    public void ligarMudo() {
        if (this.getLigado() && this.getVolume() > 0){
            this.setVolume(0);
        }
    }

    @Override
    public void desligarMudo() {
        if (this.getLigado() && this.getVolume() == 0){
            this.setVolume(30);
        }
    }

    @Override
    public void play() {
        if (this.getLigado() && !(this.getTocando())){
            this.setTocando(true);
        } else {
            System.out.println("Impossivel reproduzir");
        }
    }

    @Override
    public void pause() {
        if (this.getLigado() && this.getTocando()){
            this.setTocando(false);
        }
        else {
            System.out.println("Impossivel pausar");
        }
    }
    
    
    
    
}
