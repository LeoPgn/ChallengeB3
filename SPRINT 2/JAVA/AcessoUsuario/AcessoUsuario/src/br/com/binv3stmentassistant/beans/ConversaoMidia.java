package br.com.binv3stmentassistant.beans;

import javax.swing.JOptionPane;

public class ConversaoMidia extends Chatbot {
	private int converterTexto;
	private int converterAudio;

	public ConversaoMidia() {

	}

	public ConversaoMidia(String recebeIdUsuario, int alteraTexto, int alteraAudio) {
		super(recebeIdUsuario);
		setConverterTexto(alteraAudio);
		setConverterAudio(alteraAudio);
	}


	public int getConverterTexto() {
		return converterTexto;
	}

	public void setConverterTexto(int converterTexto) {
		this.converterTexto = converterTexto;
	}

	public int getConverterAudio() {
		return converterAudio;
	}

	public void setConverterAudio(int converterAudio) {
		this.converterAudio = converterAudio;
	}
	public String mostrarAtributos() {
		return "ID do usuário: " + getIdUsuario();
	}

	public void converterTexto() {
		int convertTxt = Integer.parseInt(JOptionPane.showInputDialog("Você precisa de conversão de texto? (1-SIM/2-NÃO)"));
		if (convertTxt == 1) {
			setConverterTexto(1);
			System.out.println("O usuário precisa de conversão de texto?: Sim");
		}
		else if (convertTxt == 2) {
			setConverterTexto(2);
			System.out.println("O usuário precisa de conversão de texto?: Não");
		}
	}
	public void converterAudio() {
		int converterAudio = Integer.parseInt(JOptionPane.showInputDialog("Você precisa de conversão de áudio? (1-SIM/2-NÃO)"));
		if (converterAudio == 1) {
			setConverterAudio(1);
			System.out.println("O usuário precisa de conversão de áudio?: Sim");
		} else if (converterAudio == 2) {
			setConverterAudio(2);
			System.out.println("O usuário precisa de conversão de áudio?: Não");
		}
	}
}

