/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package aula07;

import java.util.Random;

/**
 *
 * @author victor
 */
public class Luta {
    // Atributos
    private Lutador desafiado;
    private Lutador desafiante;
    private int rounds;
    private Boolean aprovada;
    
    // Métodos
    public void marcarLuta(Lutador l1, Lutador l2){
        if (l1.getCategoria().equals(l2.getCategoria()) && l1 != l2){
            this.aprovada = true;
            this.desafiante = l1;
            this.desafiado = l2;
        } else {
            this.aprovada = false;
            this.desafiante = null;
            this.desafiado = null;
        }
    }
        
    public void lutar(){
        if (this.getAprovada()){
            System.out.println("####### DESAFIADO ######");
            this.desafiado.apresentar();
            System.out.println("------------------------------");
            System.out.println("####### DESAFIANTE ######");
            this.desafiante.apresentar();
            System.out.println("------------------------------");

            Random aleatorio = new Random();
            int vencedor = aleatorio.nextInt(3);
            switch (vencedor){
                case 0: 
                    System.out.println("Foi um empate");
                    this.desafiado.empatarLuta();
                    this.desafiante.empatarLuta();
                    break;
                case 1: 
                    System.out.println(this.desafiado.getNome() + " venceu");
                    this.desafiado.ganharLuta();
                    this.desafiante.perderLuta();
                    break;
                case 2: 
                    System.out.println(this.desafiante.getNome() + " venceu");
                    this.desafiado.ganharLuta();
                    this.desafiante.perderLuta();
            }
            
            
        } else {
            System.out.println("Essa luta nao pode acontecer");
        }
    }

    
    //Getters e Setters
    public Lutador getDesafiado() {
        return desafiado;
    }

    public void setDesafiado(Lutador desafiado) {
        this.desafiado = desafiado;
    }

    public Lutador getDesafiante() {
        return desafiante;
    }

    public void setDesafiante(Lutador desafiante) {
        this.desafiante = desafiante;
    }

    public int getRounds() {
        return rounds;
    }

    public void setRounds(int rounds) {
        this.rounds = rounds;
    }

    public Boolean getAprovada() {
        return aprovada;
    }

    public void setAprovada(Boolean aprovada) {
        this.aprovada = aprovada;
    }
        
        
        
    
}
