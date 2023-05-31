package br.com.binv3stmentassistant.beans;

public class Conhecimento extends Usuario {
	private String nivelExperiencia;
	private String progressoCurso;
	
	public Conhecimento() {
		
	}
	public Conhecimento(String recebeNome, String recebeNivelExperiencia, String recebeProgressoCurso) {
		super (recebeNome);
		setNivelExperiencia(recebeNivelExperiencia);
		setProgressoCurso(recebeProgressoCurso);
	}
	
	public String getNivelExperiencia() {
		return nivelExperiencia;
	}

	public void setNivelExperiencia(String nivelExperiencia) {
		this.nivelExperiencia = nivelExperiencia;
	}

	public String getProgressoCurso() {
		return progressoCurso;
	}

	public void setProgressoCurso(String progressoCurso) {
		this.progressoCurso = progressoCurso;
	}
	public void mostrarAtributos() {
		System.out.println("O nome do usuário é: " + getNome() + 
				"\nO nível de experiência do usuário com investimentos é: " + getNivelExperiencia() +
				"\nQuantidade de meses de curso: " + getProgressoCurso());
	}
	public void retornarNivel(int calculoNivel) {
		if (calculoNivel == 1) {
			System.out.println("Este usuário está no módulo básico");
		}
		else if (calculoNivel == 2){
			System.out.println("Este usuário está no módulo intermediário");
		}	
		else if (calculoNivel ==3){
			System.out.println("Este usuário está no módulo avançado");
		}
	}
}
