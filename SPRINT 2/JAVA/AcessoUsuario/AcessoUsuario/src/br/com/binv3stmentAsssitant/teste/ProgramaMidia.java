package br.com.binv3stmentAsssitant.teste;

import javax.swing.JOptionPane;

import br.com.binv3stmentassistant.beans.ConversaoMidia;

public class ProgramaMidia {

	public static void main(String[] args) {
		ConversaoMidia usuario = new ConversaoMidia();
		
		usuario.setIdUsuario(JOptionPane.showInputDialog("Digite o ID do usuário"));
		System.out.println(usuario.mostrarAtributos());
		usuario.converterTexto();
		usuario.converterAudio();
		
	}

}
