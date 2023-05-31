package br.com.binv3stmentAsssitant.teste;

import javax.swing.JOptionPane;

import br.com.binv3stmentassistant.beans.Curso;

public class ProgramaCurso {

	public static void main(String[] args) {
		Curso usuario = new Curso();
		
		usuario.setIdUsuario(JOptionPane.showInputDialog("Digite o ID do usuário"));
		usuario.defNivelCurso();
		System.out.println(usuario.mostrarAtributos());
	}
}
