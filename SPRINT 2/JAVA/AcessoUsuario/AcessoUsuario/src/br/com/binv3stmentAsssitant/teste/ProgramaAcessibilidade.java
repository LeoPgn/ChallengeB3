package br.com.binv3stmentAsssitant.teste;

import javax.swing.JOptionPane;

import br.com.binv3stmentassistant.beans.Acessibilidade;

public class ProgramaAcessibilidade {

	public static void main(String[] args) {
		Acessibilidade usuario = new Acessibilidade();
		
		usuario.setTextToSpeech(JOptionPane.showInputDialog("Precisa de TTS?"));
		usuario.setNome(JOptionPane.showInputDialog("Qual o nome do usuário?"));
		usuario.setAltoContraste(JOptionPane.showInputDialog("Precisa de alto contraste?"));
		usuario.setFonteAcessivel(JOptionPane.showInputDialog("Precisa de fonte acessível?"));
		
		usuario.mostrarAtributos();
		
	}

}