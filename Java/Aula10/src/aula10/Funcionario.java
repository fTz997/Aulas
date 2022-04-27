/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package aula10;

/**
 *
 * @author victor
 */
public class Funcionario extends Pessoa{
    public String setor;
    public Boolean trabalhando = true;
    
    public void mudarTrabalho(){
        this.trabalhando = !this.trabalhando;
        System.out.println("Nao esta mais trabalhando");
    }

    public String getSetor() {
        return setor;
    }

    public void setSetor(String setor) {
        this.setor = setor;
    }

    public Boolean getTrabalhando() {
        return trabalhando;
    }

    public void setTrabalhando(Boolean trabalhando) {
        this.trabalhando = trabalhando;
    }
    
    
}
