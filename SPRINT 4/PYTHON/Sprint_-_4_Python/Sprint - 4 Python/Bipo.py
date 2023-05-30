import oracledb
import pandas as pd

def main():
    conexao,inst_SQL,conn = conecta_BD()
    opc = 0
    while (opc!=5 and conexao==True):
        print("1-Cadastro de usuário")
        print("2-Cadastro de acessibilidade")
        print("3-Relatorio de todos os usuário")
        print("4-Relatorio de todos as acessibilidade")
        print("5-Sair")
        try:
            opc = int(input("Digite a opção (1-5): "))
            if (opc == 1):
                opc_usuario = 0
                while(opc_usuario!=4):
                    print("1-Inserir usuário")
                    print("2-Alterar dados do usuário")
                    print("3-Excluir dados do usuário")
                    print("4-Voltar")
                    opc_usuario = int(input("Digite a opção (1-4): "))

                    if (opc_usuario == 1):
                        try:
                            usuario_nome = input("Digite o nome do usuário: ")
                            usuario_email = input("Digite o email do usuário: ")
                            usuario_senha = input("Digite a senha do usuário: ")
                            usuario_nascimento = input("Digite a data de nascimento do usuário (DD-MON-YYYY): ") #Exemplo : 10-MAR-2000

                            str_consulta = 'SELECT * FROM acessibilidade'
                            str_colunas = f"""SELECT column_name FROM all_tab_cols WHERE table_name = 'ACESSIBILIDADE'"""

                            inst_SQL.execute(str_colunas)
                            dados = inst_SQL.fetchall()
                            colunas = []
                            for i in range(len(dados)):
                                colunas.append(dados[i][0].split("_")[1])

                            consulta_tabela(inst_SQL, str_consulta, colunas)

                            lista_dados = []

                            acessibilidade_id = int(input("Digite o ID da acessibilidade a ser vinculado ao usuário: "))

                            consulta = f"""SELECT * FROM acessibilidade WHERE acessibilidade_id = {acessibilidade_id}"""

                            inst_SQL.execute(consulta)
                            dados = inst_SQL.fetchall()


                            for dado in dados:
                                lista_dados.append(dado)

                            if (len(lista_dados) == 0):
                                print("ID não encontrado")

                        except ValueError:
                            print("Digite valores númericos")
                        else:
                            str_insert = f"""INSERT INTO usuario (usuario_nome,usuario_email,usuario_senha,data_nascimento,usuario_acessibilidadeID,usuario_acessibilidadeTipo) VALUES ('{usuario_nome}','{usuario_email}','{usuario_senha}','{usuario_nascimento}',{acessibilidade_id},'{acessibilidade_tipo}')"""
                            insert_tabela(inst_SQL, conn, str_insert)

                    elif (opc_usuario == 2):
                        try:
                            lista_dados = []

                            id = int(input("Digite o ID do usuário a ser alterado: "))

                            consulta = f"""SELECT * FROM usuario WHERE usuario_id = {id}"""

                            inst_SQL.execute(consulta)
                            dados = inst_SQL.fetchall()

                            for dado in dados:
                                lista_dados.append(dado)

                            if (len(lista_dados) == 0):
                                print("Id não encontrado")
                            else:
                                try:
                                    novo_nome =input("Digite o novo nome de usuário: ")
                                    novo_email = input("Digite o novo email do usuário: ")
                                    nova_senha = input("Digite a nova senha do usuário: ")

                                    str_consulta = 'SELECT * FROM acessibilidade'
                                    str_colunas = f"""SELECT column_name FROM all_tab_cols WHERE table_name = 'ACESSIBILIDADE'"""

                                    inst_SQL.execute(str_colunas)
                                    dados = inst_SQL.fetchall()
                                    colunas = []
                                    for i in range(len(dados)):
                                        colunas.append(dados[i][0].split("_")[1])

                                    consulta_tabela(inst_SQL, str_consulta, colunas)

                                    lista_dados = []

                                    acessibilidade_id = int(input("Digite o ID da acessibilidade_id a ser vinculado ao usuario: "))

                                    consulta = f"""SELECT * FROM acessibilidade WHERE acessibilidade_id = {acessibilidade_id}"""

                                    inst_SQL.execute(consulta)
                                    dados = inst_SQL.fetchall()

                                    for dado in dados:
                                        lista_dados.append(dado)

                                    if (len(lista_dados) == 0):
                                        print("Id não encontrado")
                                except ValueError:
                                    print("Digite valores númericos")
                                else:
                                    str_update = f"""UPDATE usuario SET usuario_nome='{novo_nome}',usuario_email='{novo_email}',usuario_senha={nova_senha},usuario_acessibilidadeID={acessibilidade_id} WHERE usuario_id={id}"""
                                    update_tabela(inst_SQL, conn, str_update)
                        except ValueError:
                            print("Digite valor númerico")

                    elif (opc_usuario == 3):
                        try:
                            lista_dados = []

                            id = int(input("Digite o ID do usuário a ser excluido: "))

                            consulta = f"""SELECT * FROM usuario WHERE usuario_id = {id}"""

                            inst_SQL.execute(consulta)
                            dados = inst_SQL.fetchall()

                            for dado in dados:
                                lista_dados.append(dado)

                            if (len(lista_dados) == 0):
                                print("O id digitado não existe na tabela")
                            else:
                                str_delete = f"""DELETE FROM usuario WHERE usuario_id={id}"""
                                delete_tabela(inst_SQL, conn, str_delete)
                        except ValueError:
                            print("Digite valor númerico")

            elif (opc == 2):
                opc_acessibilidade = 0
                while (opc_acessibilidade != 4):
                    print("1-Inserir acessibilidade")
                    print("2-Alterar acessibilidade")
                    print("3-Excluir acessibilidade")
                    print("4-Voltar")
                    opc_acessibilidade = int(input("Digite a opção (1-4): "))

                    if (opc_acessibilidade == 1):
                        try:

                            acessibilidade_tipo = input("Digite o tipo de acessibilidade: ")
                            acessibilidade_descricao = input("Digite a descrição da acessibilidade: ")

                        except ValueError:
                            print("Digite valores númericos")
                        else:
                            str_insert = f"""INSERT INTO acessibilidade (acessibilidade_tipo,acessibilidade_descricao) VALUES ('{acessibilidade_tipo}','{acessibilidade_descricao}')"""
                            insert_tabela(inst_SQL,conn,str_insert)

                    elif (opc_acessibilidade == 2): #Para fazer a alteração da acessibilidade e preciso excluir o usuário
                        try:
                            lista_dados = []

                            acessibilidade_id = int(input("Digite o ID da acessibilidade a ser alterado: "))

                            consulta = f"""SELECT * FROM acessibilidade WHERE acessibilidade_id = {acessibilidade_id}"""

                            inst_SQL.execute(consulta)
                            dados = inst_SQL.fetchall()

                            for dado in dados:
                                lista_dados.append(dado)

                            if (len(lista_dados) == 0):
                                print("Id não encontrado")
                            else:
                                try:
                                    novo_tipo_acessibilidade = input("Digite o novo tipo de acessibilidade: ")
                                    nova_descricao_acessibilidade = input("Digite a nova descrição da acessibilidade: ")

                                except ValueError:
                                    print("Digite valores númericos")
                                else:
                                    str_update = f"""UPDATE acessibilidade SET acessibilidade_tipo='{novo_tipo_acessibilidade}',acessibilidade_descricao='{nova_descricao_acessibilidade}' WHERE acessibilidade_id={acessibilidade_id}"""
                                    update_tabela(inst_SQL, conn, str_update)
                        except ValueError:
                            print("Digite valor númerico")

                    elif (opc_acessibilidade == 3): #Para fazer a alteração da acessibilidade e preciso excluir o usuário
                        try:
                            lista_dados = []

                            acessibilidade_id = int(input("Digite o ID da acessibilidade a ser excluido: "))

                            consulta = f"""SELECT * FROM acessibilidade WHERE acessibilidade_id = {acessibilidade_id}"""

                            inst_SQL.execute(consulta)
                            dados = inst_SQL.fetchall()

                            for dado in dados:
                                lista_dados.append(dado)

                            if (len(lista_dados) == 0):
                                print("O ID digitado não existe na tabela")
                            else:
                                str_delete = f"""DELETE FROM acessibilidade WHERE acessibilidade_id={acessibilidade_id}"""
                                delete_tabela(inst_SQL, conn, str_delete)
                        except ValueError:
                            print("Digite valor númerico")

            elif (opc == 3):
                str_consulta = 'SELECT * FROM usuario'
                str_colunas = f"""SELECT column_name FROM all_tab_cols WHERE table_name = 'USUARIO' order by column_id"""

                inst_SQL.execute(str_colunas)
                dados = inst_SQL.fetchall()

                colunas = []
                for i in range(len(dados)):
                    colunas.append(dados[i][0].split("_")[1])

                consulta_tabela(inst_SQL, str_consulta, colunas)

            elif (opc == 4):
                str_consulta = 'SELECT * FROM acessibilidade'
                str_colunas = f"""SELECT column_name FROM all_tab_cols WHERE table_name = 'ACESSIBILIDADE' order by column_id"""

                inst_SQL.execute(str_colunas)
                dados = inst_SQL.fetchall()
                colunas = []
                for i in range(len(dados)):
                    colunas.append(dados[i][0].split("_")[1])

                consulta_tabela(inst_SQL, str_consulta, colunas)

        except ValueError:
            print("Digite valor númerico")


def conecta_BD():

    try:
        dnStr = oracledb.makedsn("oracle.fiap.com.br","1521","ORCL")
        conn = oracledb.connect(user='rm97305',password='123321',dsn=dnStr)
        inst_SQL = conn.cursor()

    except Exception as e:
        print("Erro: ", e)
        conexao = False
        inst_SQL = ""
        conn = ""
    else:
        conexao = True

    return(conexao,inst_SQL,conn)


def insert_tabela(inst_SQL,conn,str_insert):
    try:
        inst_SQL.execute(str_insert)
        conn.commit()

    except:
        print("Erro de transacao com o BD")
    else:
        print("Dados gravados com sucesso")

def consulta_tabela(inst_SQL,str_consulta,colunas):
    lista = []

    inst_SQL.execute(str_consulta)
    dados = inst_SQL.fetchall()

    for registro in dados:
        lista.append(registro)

    lista = sorted(lista)

    base_df = pd.DataFrame.from_records(lista, columns=colunas, index=colunas[0])

    if (base_df.empty):
        print("Não ha registros cadastrados")
    else:
        print(base_df)
        print("\n")


def update_tabela(inst_SQL,conn,str_update):
        try:
            inst_SQL.execute(str_update)
            conn.commit()
        except:
            print("Erro de transacao com o BD")
        else:
            print("Dados alterados com sucesso")


def delete_tabela(inst_SQL, conn, str_delete):
    try:
        inst_SQL.execute(str_delete)
        conn.commit()
    except:
        print("Erro de transacao com o BD")
    else:
        print("Dados excluidos com sucesso")


if (__name__ == "__main__"):
    main()