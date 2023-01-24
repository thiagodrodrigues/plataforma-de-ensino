export default {
    USERS: {
        MESSAGES: {
            ERROR: {
                USER_NOT_FOUND: `Usuário {USER_ID} não encontrado`,
                USER_ALREADY_EXISTS: `Usuário {USER_ID} já existe existe`,
                USER_UNAUTHENTICATED: `Dados incorretos. Usuário não autenticado.`,
                VOID_NAME: `O campo 'Nome' deve ser preenchido`,
                VOID_EMAIL: `O campo 'Email' deve ser preenchido`,
                VOID_PASSWORD: `O campo 'Senha' deve ser preenchido`,
                VOID_BIRTHDATE: `O campo 'Data de Nascimento' deve ser preenchido`,
                VOID_USERNAME: `O campo 'Nome de Usuário' deve ser preenchido`,
                VOID_PHOTO: `O campo 'Foto' deve ser preenchido`,
                UNAUTHORIZED: `Usuário logado deve ser igual ao informado no parâmetro. Não autorizado.`,
                REQUIRE_LOGIN: `Você precisa estar logado para executar essa ação.`
            }
        }
    },
    CLASSES: {
        MESSAGES: {
            ERROR: {
                REQUIRE_LOGIN: `Faça login para continuar.`,
            }
        }
    },
    COURSES: {
        MESSAGES: {
            ERROR: {
                REQUIRE_LOGIN: `Faça login para continuar.`,
                VOID_NAME: `O campo 'Nome' deve ser preenchido`,
                VOID_WORKLOAD: `O campo 'Carga Horária' deve ser preenchido`,
                VOID_VIDEO: `O campo 'Vídeo' deve ser preenchido`,
                UNAUTHORIZED: `Usuário logado deve ser um administrador para executar esta função. Não autorizado.`,
            }
        }
    }
}