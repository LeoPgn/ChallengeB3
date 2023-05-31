package br.com.binv3stmentassistant.beans;

public class Acessibilidade extends Usuario {
	private String textToSpeech;
	private String altoContraste;
	private String fonteAcessivel;

	public Acessibilidade() {

	}

	public Acessibilidade(String recebeNome, String recebeTextToSpeech, String recebeAltoContraste,
			String recebeFonteAcessivel) {
		super(recebeNome);
		setTextToSpeech(recebeTextToSpeech);
		setAltoContraste(recebeAltoContraste);
		setFonteAcessivel(recebeFonteAcessivel);
	}

	public String getTextToSpeech() {
		return textToSpeech;
	}

	public void setTextToSpeech(String textToSpeech) {
		this.textToSpeech = textToSpeech;
	}

	public String getAltoContraste() {
		return altoContraste;
	}

	public void setAltoContraste(String altoContraste) {
		this.altoContraste = altoContraste;
	}

	public String getFonteAcessivel() {
		return fonteAcessivel;
	}

	public void setFonteAcessivel(String fonteAcessivel) {
		this.fonteAcessivel = fonteAcessivel;
	}
	
	public void mostrarAtributos() {
		System.out.println("O nome do usuário é: " + getNome() + "\nPrecisa de Text to Speech?: " + getTextToSpeech() + "\nPrecisa de alto contraste?: "
				+ getAltoContraste() + "\nPrecisa de fonte acessível?: " + getFonteAcessivel());
		
		
		
	}
}
