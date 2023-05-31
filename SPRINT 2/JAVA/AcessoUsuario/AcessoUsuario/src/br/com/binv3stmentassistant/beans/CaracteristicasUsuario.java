package br.com.binv3stmentassistant.beans;

public class CaracteristicasUsuario extends Usuario {
	private String comportamentos;
	private String intencaoUsuario;
	
	public CaracteristicasUsuario() {
		
	}
	public CaracteristicasUsuario(String recebeNome, String recebeComportamentos, String recebeIntencaoUsuario) {
		super(recebeNome);
		setComportamentos(recebeComportamentos);
		setIntencaoUsuario(recebeIntencaoUsuario);
	}
	

	public String getComportamentos() {
		return comportamentos;
	}

	public void setComportamentos(String comportamentos) {
		this.comportamentos = comportamentos;
	}

	public String getIntencaoUsuario() {
		return intencaoUsuario;
	}

	public void setIntencaoUsuario(String intencaoUsuario) {
		this.intencaoUsuario = intencaoUsuario;
	}
	public void mostrarAtributos() {
		System.out.println("O nome do usuário é: " + getNome() + "\nO tipo de comportamento do usuário é: " + getComportamentos() + 
				"\nA intenção do usuário é de: " + getIntencaoUsuario());
	}
}
