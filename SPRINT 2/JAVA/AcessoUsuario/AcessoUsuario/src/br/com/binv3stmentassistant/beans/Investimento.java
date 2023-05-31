package br.com.binv3stmentassistant.beans;

import javax.swing.JOptionPane;

public class Investimento extends Chatbot {
	private int melhorInvestimento;

	public Investimento() {

	}

	public Investimento(String recebeIdUsuario, int recebeMelhorInvestimento) {

	}

	public int getMelhorInvestimento() {
		return melhorInvestimento;
	}

	public String mostrarAtributos() {
		return "ID do usuário: " + getIdUsuario();
	}

	public void setMelhorInvestimento(int melhorInvestimento) {
		this.melhorInvestimento = melhorInvestimento;
	}

	public void melhorInvestimento() {
		int melhorInvestimento = Integer.parseInt(JOptionPane.showInputDialog("Qual nível de curso você foi indicado? (1-BAS/2-INTERM)"));
		
		if (melhorInvestimento == 1) {
			setMelhorInvestimento(1);
			System.out.println("Indicamos finalizar o curso básico antes de investir!");
		} else if (melhorInvestimento == 2) {
			setMelhorInvestimento(2);
			System.out.println("Indicamos buscar os investimentos do curso Investindo em ações no exterior no site Invista Melhor!" + 
			"\nLink do site: " + "\n\nhttps://edu.b3.com.br/play/55092791/progresso?institution=edub3/?utm_source=investir_melhor&utm_medium=banner&utm_campaign=bora_investir");
		}
	}
}