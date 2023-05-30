package br.com.bipo.beans;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Set;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

import org.apache.commons.validator.GenericValidator;

public class Usuario 
{	
	@NotNull(message = "O ID não pode ser nulo.")
    private String idUsuario;
	@NotNull(message = "O nome não pode ser nulo.")
    private String username;
	@NotNull(message = "A senha não pode ser nula.")
    private String senha;
	@NotNull
    private String datanasc;
    @Email(message = "O e-mail deve ser válido.")
    private String email;
    
	public Usuario() {
    	
    }
    public Usuario(String recebeIdUsuario, String recebeUsername, String recebeSenha, String recebeDatanasc, String recebeEmail) throws NoSuchAlgorithmException {
    	setIdUsuario(recebeIdUsuario);
    	setUsername(recebeUsername);
    	setSenha(recebeSenha);
    	setDatanasc(recebeDatanasc);
    	setEmail(recebeEmail);
    }
    public String getIdUsuario() {
		return idUsuario;
	}
	private void setIdUsuario(String idUsuario) {
		this.idUsuario = idUsuario;
	}
	public String getUsername() {
		return username;
	}
	private void setUsername(String username) {
		this.username = username;
	}
	public String getSenha() {
		return senha;
	}
	private void setSenha(String senha) throws NoSuchAlgorithmException {
		MessageDigest md;
		
		md = MessageDigest.getInstance("MD5");
	    byte[] passBytes = senha.getBytes();
	    md.reset();
	    byte[] digested = md.digest(passBytes);
	    StringBuffer sb = new StringBuffer();
	    for(int i=0;i<digested.length;i++){
	        sb.append(Integer.toHexString(0xff & digested[i]));
	    }
	    senha = sb.toString();
	    this.senha = senha;
	}
	public String getDatanasc() {
		return datanasc;
	}
	public void setDatanasc(String datanasc) {
		if ((GenericValidator.isDate(datanasc, "dd/MM/yyyy", true) == true)) {
			this.datanasc = datanasc;
		} else {
			System.out.println("A data inserida não é válida.");
		}
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public void infoUsuario() {
		System.out.println("\nUsuário: " + getUsername() + "\nSenha hashada: " + getSenha() + "\nData de Nascimento: " + getDatanasc() + "\nEmail: " + getEmail());
	}
	public boolean usuarioValidacao(Usuario usuario) {
		ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
		Validator validator = factory.getValidator();
		Set<ConstraintViolation<Usuario>> violations = validator.validate(usuario);
		int violantionCount = 0;
		for (ConstraintViolation<Usuario> violation : violations) {
			violantionCount++;
		    System.out.println(violation.getMessage());
		}
		if (violantionCount == 0) {
			return true;
		} else {
			return false;
		}
		
	}
    
}
