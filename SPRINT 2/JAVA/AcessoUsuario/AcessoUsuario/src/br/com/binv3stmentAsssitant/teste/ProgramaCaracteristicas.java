package br.com.binv3stmentAsssitant.teste;

import javax.swing.JOptionPane;

import br.com.binv3stmentassistant.beans.CaracteristicasUsuario;

public class ProgramaCaracteristicas {

	public static void main(String[] args) {
		CaracteristicasUsuario usuario = new CaracteristicasUsuario();
		
		usuario.setNome(JOptionPane.showInputDialog("Digite o nome do usuário"));
		usuario.setComportamentos(JOptionPane.showInputDialog("Digite o tipo de comportamento do usuário"));
		usuario.setIntencaoUsuario(JOptionPane.showInputDialog("Digite a intenção do usuário"));
		
		usuario.mostrarAtributos();
		
		CaracteristicasUsuario usuarioDois = new CaracteristicasUsuario("Leo", "Impulsivo", "Guardar dinheiro");
		
		usuarioDois.mostrarAtributos();
		
		
	}

}
