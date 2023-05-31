package br.com.binv3stmentassistant.beans;

public class Usuario {
	private String nome;

	public Usuario() {
		
	}
	public Usuario(String recebeNome) {
		setNome(recebeNome);
	}
	
	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

}
