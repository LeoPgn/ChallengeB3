package br.com.bipo.beans;

public class Acessibilidade extends Usuario{
	
	private String idAcessibilidade;
	private String cores;
	
	public Acessibilidade() {
		
	}
	public Acessibilidade(String recebeIdAcessibilidade, String recebeCores, String recebeTextToSpeech) {
		setIdAcessibilidade(recebeIdAcessibilidade);
		setCores(recebeCores);
	}
	public String getIdAcessibilidade() {
		return idAcessibilidade;
	}
	public void setIdAcessibilidade(String idAcessibilidade) {
		this.idAcessibilidade = idAcessibilidade;
	}
	public String getCores() {
		return cores;
	}
	private void setCores(String cores) {
		this.cores = cores;
	}

}
