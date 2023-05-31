package br.com.binv3stmentAsssitant.teste;

import javax.swing.JOptionPane;

import br.com.binv3stmentassistant.beans.Investimento;

public class ProgramaInvestimento {

	public static void main(String[] args) {
		Investimento usuario = new Investimento();
		
		usuario.setIdUsuario(JOptionPane.showInputDialog("Digite o ID do usuário"));
		System.out.println(usuario.mostrarAtributos());
		usuario.melhorInvestimento();

	}

}
