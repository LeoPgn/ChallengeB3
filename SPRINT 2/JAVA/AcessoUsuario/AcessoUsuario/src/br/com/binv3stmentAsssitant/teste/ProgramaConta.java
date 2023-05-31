package br.com.binv3stmentAsssitant.teste;

import br.com.binv3stmentassistant.beans.Conta;

public class ProgramaConta {

	public static void main(String[] args) {
		Conta usuario = new Conta("Leo", "RM96562", "***78", "leosonfire01@outlook.com", "(11)95368-9084" );
		
		usuario.mostrarAtributos();

	}

}
