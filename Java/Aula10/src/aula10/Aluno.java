/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package aula10;

/**
 *
 * @author victor
 */
public class Aluno extends Pessoa{
    private int matricula;
    private String Curso;

    
        
    public void cancelarMatr(){
        //this.setMatricula(getMatricula());
        //this.setCurso("Não está inscrito em nenhum");
        System.out.println("Matricula sera cancelada");
    }

    public int getMatricula() {
        return matricula;
    }

    public void setMatricula(int matricula) {
        this.matricula = matricula;
    }

    public String getCurso() {
        return Curso;
    }

    public void setCurso(String Curso) {
        this.Curso = Curso;
    }
    
    
    
}
