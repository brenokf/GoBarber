# 💇‍♂️ GoBarber Web 💪

![](https://img.shields.io/github/last-commit/brenokf/GoBarber)![](https://img.shields.io/github/repo-size/brenokf/GoBarber)![](https://img.shields.io/github/languages/count/brenokf/GoBarber)![](https://img.shields.io/github/languages/top/brenokf/GoBarber)



A aplicação Gobaber Web foi desenvolvida no BootCamp da RocketSeat.


Gobarber Web é aplicação React Js que consiste em cadastro de novos barbeiros e gerenciamento de atendimento aos seus clientes. O profissional de barbearia consegue organizar os seus horários tendo acesso ao dia e horários de cada dia, é um app completo que possibilita agilidade eficácia no atendimento de cada precioso cliente .

![](https://github.com/brenokf/GoBarber/blob/master/Front-End/github/GoBarber.gif?raw=true)


#### Bibliotecas Utilizadas

 - Axios
 - Yup
 - React Dom
 - Unform Web
 - Unform Core
 - React Icons
 - Styled Components


### Abaixo mostro o código de validação do Logim GoBarber .
```typescript
 const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: SingInFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido '),
          password: Yup.string().required('Senha Obrigatória'),
        });
        await schema.validate(data, { abortEarly: false });
        signIn({ email: data.email, password: data.password });
      } catch (err) {
        if (err) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }
      }
    },
    [signIn],
  );
```
###  Como Rodar o Projeto na sua Maquina
###### Para rodar na sua mquina  , recomendo por prot comando ou comando e dever ter o gereciador de packages **Yarn**  acessando a raiz do projeto no comando você pode apenas dar o comando abaixo
    yarn

###### Todas as depencias serão instaladas no seu projeto o **node_modules**


### Rodando o Projeto 
###### Para rodar o projeto você precisa do seguinte comando 


    yarn start

##### Fique tranquilo ja deu tudo certo , agora será aberta uma janela no seu navegador padrão e pronto e vualá este projeto está rodando no seu pc 
😃 🤩
