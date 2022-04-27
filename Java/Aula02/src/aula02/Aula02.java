/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package aula02;

/**
 *
 * @author victor
 */
public class Aula02 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Caneta c1 = new Caneta();
        c1.carga = 92;
        c1.cor = "Azul";
        c1.modelo = "Bic";
        c1.ponta = 0.7f;
        c1.tampada = false;
        c1.destampar();
        c1.rabiscar();
    }
    
}
