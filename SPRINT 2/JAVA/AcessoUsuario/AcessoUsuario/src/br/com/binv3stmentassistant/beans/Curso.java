package br.com.binv3stmentassistant.beans;

import javax.swing.JOptionPane;

public class Curso extends Chatbot {
	private int nivelCurso;
	private String nomeCurso;
	
	public Curso(){
	}
	public Curso(String recebeIdUsuario, int recebeNivelCurso, String nomeCurso){
		super(recebeIdUsuario);
		setNivelCurso(recebeNivelCurso);
		setNomeCurso(nomeCurso);
	}

	public int getNivelCurso() {
		return nivelCurso;
	}

	public void setNivelCurso(int nivelCurso) {
		this.nivelCurso = nivelCurso;
	}

	public String getNomeCurso() {
		return nomeCurso;
	}

	public void setNomeCurso(String nomeCurso) {
		this.nomeCurso = nomeCurso;
	}
	public String mostrarAtributos() {
		return "ID do usuário: " + getIdUsuario() + "\nO nível do curso é: " + getNivelCurso() + "\nO nome deste curso é: " + getNomeCurso();
	}
	public void defNivelCurso() {
		int recebeNivel = Integer.parseInt(JOptionPane.showInputDialog("Você prefere um curso para ganhos rápidos(1) ou para compreensão e aplicação de mercado(2)?"));
		if (recebeNivel == 1) {
			setNivelCurso(1);
			setNomeCurso("Curso ganhos rápidos da B3");
			System.out.println("O nível para este usuário é o nível intermediário");
		}
		else if (recebeNivel == 2) {
			setNivelCurso(2);
			setNomeCurso("Curso Aprendendo a investir");
			System.out.println("O nível para este usuário é o nível básico");
		}
	}
	
	}
