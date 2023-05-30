package br.com.bipo.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import br.com.bipo.beans.Usuario;

public class UsuarioDAO {

	private Connection con;

	public final Connection getCon() {
		return con;
	}

	public final void setCon(Connection con) {
		this.con = con;
	}

	public UsuarioDAO(Connection con) {
		setCon(con);
	}

	public String inserir(Usuario usuario) {
		String sql = "insert into usuarios(nome, senha, data_nascimento, email) values (?,?,?,?)";
		try {
			PreparedStatement ps = getCon().prepareStatement(sql);
			ps.setString(1, usuario.getUsername());
			ps.setString(2, usuario.getSenha());
			ps.setString(3, usuario.getDatanasc());
			ps.setString(4, usuario.getEmail());
			
			if (ps.executeUpdate() > 0) {
				return "Inserido com sucesso.";
			} else {
				return "Erro ao inserir.";
			}
		} catch (SQLException e) {
			return e.getMessage();
		}
	}
}