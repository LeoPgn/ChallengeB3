package br.com.binv3stmentAsssitant.teste;

import javax.swing.JOptionPane;

import br.com.binv3stmentassistant.beans.Conhecimento;

public class ProgramaConhecimento {

	public static void main(String[] args) {
		Conhecimento usuario = new Conhecimento();
		usuario.setNome(JOptionPane.showInputDialog("Digite o nome do usuário"));
		usuario.setNivelExperiencia(JOptionPane.showInputDialog("Qual o nível de experiência com investimentos?"));
		usuario.setProgressoCurso(JOptionPane.showInputDialog("Quantos meses o usuário tem de curso?"));
		usuario.mostrarAtributos();
		usuario.retornarNivel(Integer.parseInt(JOptionPane.showInputDialog("Qual o módulo de curso do usuário? (1-BAS/2-INT/3-AVANÇ)")));
	}
}