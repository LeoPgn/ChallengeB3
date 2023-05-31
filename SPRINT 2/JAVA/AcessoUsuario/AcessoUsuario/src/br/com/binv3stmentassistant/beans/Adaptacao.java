package br.com.binv3stmentassistant.beans;

public class Adaptacao extends Chatbot{
	
	private String linguagem;
	private String idioma;
	
	public Adaptacao() {
		
	}
	public Adaptacao(String recebeLinguagem, String recebeIdioma) {
		setLinguagem(recebeLinguagem);
		setIdioma(recebeIdioma);
	}
	
	public String getLinguagem() {
		return linguagem;
	}
	public void setLinguagem(String linguagem) {
		this.linguagem = linguagem;
	}
	public String getIdioma() {
		return idioma;
	}
	public void setIdioma(String idioma) {
		this.idioma = idioma;
	}
	public void adaptarLinguagem() {
		System.out.println("Linguagem: " + getLinguagem() + "\nIdioma: " + getIdioma());
	}
	

}
