/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package aula05;

/**
 *
 * @author victor
 */
public class Aula05 {

    
    public static void main(String[] args) {
        contaBanco p1 = new contaBanco();
        p1.setNumConta(1111);
        p1.setDono("Jaburu");
        p1.abrirConta("CC");
        
        
        
        contaBanco p2 = new contaBanco();
        p2.setNumConta(1112);
        p2.setDono("Creuza");
        p2.abrirConta("CP");
        
        
        p2.depositar(500);
        p2.sacar(100);
        p1.sacar(50);
        p1.fecharConta();
        
        p1.estadoAtual();
        p2.estadoAtual();
    }
    
}
