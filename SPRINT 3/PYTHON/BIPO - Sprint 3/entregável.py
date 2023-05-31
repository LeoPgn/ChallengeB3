
def main():
    usuarios = {}
    opcao = 1
    while (opcao != 0):
        print("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")
        print("Digite a opção desejada:")
        print("1 - Cadastrar usuário")
        print("2 - Fazer login")
        print("3 - Gerenciar conta")
        print("4 - Deletar usuário")
        print("5 - Exibição")
        opcao = input("Digite a opção: ")
        if (opcao == "1"):
            cadastrar_usuario(usuarios)
        elif (opcao == "2"):
            login_usuario(usuarios)
        elif (opcao == "3"):
            gerenciar_conta(usuarios)
        elif (opcao == "4"):
            deletar_usuario(usuarios)
        elif (opcao == "5"):
            exibicao_usuario(usuarios)
        else:
            print("Opção inválida.")
        continuar = input("Deseja continuar (1-SIM / 0-NÃO)? ")
        if (continuar != "1"):
            opcao = 0
            print("Operação finalizada")

def cadastrar_usuario(cadastro):
    try:    # tente alguma coisa
            # Opereção
        codigo = int(input("Digite o código do usuário: "))
        if (codigo in cadastro):
            print("Usuário já cadastrado!")
        else:
            nome = input("Digite o nome do usuário: ")
            senha = input("Digite a senha: ")
            email = input("Digite o email: ")
            telefone = input("Digite o telefone: ")
            cadastro[codigo] = {"nome": nome, "senha": senha, "email": email, "telefone": telefone}
    except ValueError:  # Se não acontece uma exeção
                        # Falhou
        print("Digite valor númerico!")

def login_usuario(login):
    try:
        codigo = int(input("Digite o código do usuário: "))
        if (codigo in login):
            senha = input("Digite a senha: ")
            if (login[codigo]["senha"] == senha):
                print("Usuário autenticado com sucesso!")
            else:
                print("Senha incorreta!")
        else:
            print("Usuário não cadastrado!")
    except ValueError:
        print("Digite valor númerico!")

def gerenciar_conta(gerenciar):
    try:
        codigo = int(input("Digite o código do usuário: "))
        if (codigo in gerenciar):
            print("Digite a opção desejada:")
            print("1 - Alterar nome")
            print("2 - Alterar senha")
            print("3 - Alterar email")
            print("4 - Alterar telefone")
            opcao = input("Opção: ")
            if (opcao == "1"):
                gerenciar[codigo]["nome"] = input("Digite um o novo nome: ")
            elif (opcao == "2"):
                senha_antiga = input("Digite a senha antiga: ")
                if (senha_antiga == gerenciar[codigo]["senha"]):
                    gerenciar[codigo]["senha"] = input("Digite a nova senha: ")
                else:
                    print("Senha incorreta!")
            elif (opcao == "3"):
                gerenciar[codigo]["email"] = input("Digite o novo email: ")
            elif (opcao == "4"):
                gerenciar[codigo]["telefone"] = input("Digite o novo telefone: ")
            else:
                print("Opção inválida!")
        else:
            print("Usuário não cadastrado!")
    except ValueError:
        print("Digite valor númerico!")

def deletar_usuario(deletar):
    try:
        codigo = int(input("Digite o código do usuário: "))
    except ValueError:
        print("Digite valor númerico!")

    else:
        if (codigo in deletar):
            del deletar[codigo]
            print("Usuário deletado")
        else:
            print("Código não encontrado!")

def exibicao_usuario(exibicao):
    try:
        codigo = int(input("Digite o código do usuário: "))
    except ValueError:
        print("Digite valor númerico!")
    else:
        if (codigo in exibicao):
            print(exibicao[codigo])
        else:
            print("Usuário não encontrado!")

if __name__ == "__main__":
    main()