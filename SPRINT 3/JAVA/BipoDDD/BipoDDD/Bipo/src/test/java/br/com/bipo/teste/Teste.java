package br.com.bipo.teste;

import java.security.NoSuchAlgorithmException;
import java.sql.Connection;
import java.util.Scanner;

import br.com.bipo.beans.Usuario;
import br.com.bipo.conexao.Conexao;
import br.com.bipo.dao.UsuarioDAO;

public class Teste {

	public static void main(String[] args) throws NoSuchAlgorithmException {
		Scanner input = new Scanner(System.in);
		Connection con = Conexao.abrirConexao();
		UsuarioDAO usuarioDAO = new UsuarioDAO(con);
		
		System.out.println("ID: ");
		String id = input.nextLine();
		System.out.println("Nome: ");
		String user = input.nextLine();
		System.out.println("Senha: ");
		String senha = input.nextLine();
		System.out.println("Data de nascimento: ");
		String datanasc = input.nextLine();
		System.out.println("Email: ");
		String email = input.nextLine();

		Usuario usuario = new Usuario(id, user, senha, datanasc, email);
		if (usuario.usuarioValidacao(usuario) == true) {
			usuario.infoUsuario();
			usuarioDAO.inserir(usuario);
		}
			
		input.close();
		
	}

}
