package br.com.binv3stmentassistant.beans;

public class Conta extends Usuario {
	private String senha;
	private String login;
	private String email;
	private String celular;
	
	public Conta() {
		
	}
	public Conta(String recebeNome, String recebeSenha, String recebeLogin, String recebeEmail, String recebeCelular) {
		super (recebeNome);
		setSenha(recebeSenha);
		setLogin(recebeLogin);
		setEmail(recebeEmail);
		setCelular(recebeCelular);
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCelular() {
		return celular;
	}

	public void setCelular(String celular) {
		this.celular = celular;
	}
	public void mostrarAtributos() {
		System.out.println("O nome do usuário: " + getNome() + "\nO login do usuário é: " + getLogin() + 
				"\nA senha do usuário é: " + getSenha() + 
				"\nO e-mail do usuário: " + getEmail() + "\nO número de celular do usuário: " + getCelular());
	}
}
