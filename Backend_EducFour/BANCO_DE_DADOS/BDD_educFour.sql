
create database educ_four_database;
use educ_four_database;
create table tbl_usuario(
id int not null auto_increment primary key,
nome varchar(90) not null,
cnpj varchar(15)not null,
cpf varchar(12)not null,
rg varchar(45)not null,
data_nascimento date not null,
declaracao_escolaridade varchar(100) not null,
email varchar(90) not null,
area_de_atuacao varchar(45 )not null,
horarios_disponiveis text not null,
motivo_inscricao text not null,
cep varchar(45) not null,
logradouro varchar(70) not null,
bairro varchar(45) not null,
cidade varchar(45) not null,
telefone varchar(45) not null,
unique index (id)
);
create table tbl_administrador(
id int not null auto_increment primary key,
nome varchar(45),
email varchar(90),
senha varchar(45),
unique index (id)
);
create table tbl_noticias(
id int not null auto_increment primary key,
titulo varchar(300) not null,
nome_autor text not null,
descricao text not null,
capa_noticia text not null,
tema varchar(45) not null,
data_noticia varchar(45) not null,
corpo_noticia text,

unique index (id)

);

##USUARIOS
insert into tbl_usuario
(nome,cnpj,cpf,rg,data_nascimento,declaracao_escolaridade,email,area_de_atuacao,motivo_inscricao,horarios_disponiveis,cep,logradouro,bairro,cidade,telefone)
values('Maria De Lourdes','12345678910','5523743843','129302032','1970-09-13','declaração escolaridade','mariadelourdes@gmail.com','Professor','Quero dar aulas de matematica e fisica','das 9:00 hrs até as 14:00 hrs','06266-230','Rua João Romeira Rodrigues 58','Jd Bonança','Osasco','1196543478');


insert into tbl_noticias(titulo,nome_autor,descricao,capa_noticia,tema,data_noticia,corpo_noticia) 
values(
'Ministro da Educação defende criação de bolsa-auxílio para permanência de alunos no Ensino Médio', 
'Ítalo Reis', 
'Em entrevista no "Roda Viva", Camilo Santana adiantou que projetos do tipo têm sido discutidos internamente entre ministros do governo Lula',
'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2022/12/22/1048233826-sok4mm372ramjlyznm5uhtit3u.jpg',
'Educação',
'01/01/2023',
'O ministro da Educação, Camilo Santana,
 afirmou que tem defendido a criação de uma 
 bolsa financeira que auxilie na permanência de alunos do Ensino Médio nas escolas. 
 A declaração foi dada durante entrevista no programa Roda Viva, da TV Cultura, na noite desta segunda-feira, 12.
Segundo o ministro, políticas do tipo têm sido discutidas internamente e em conjunto 
entre os ministros do governo Lula. "Claro que isso demanda recursos, investimentos. Mas acho fundamental", frisa.');

insert into tbl_noticias(titulo,nome_autor,descricao,capa_noticia,tema,data_noticia,corpo_noticia) 
values(
'Prefeitura de São Vicente abre concurso público na área da educação', 
'Ítalo Reis', 
'São mais de 100 vagas para professores adjuntos. Os salários variam de R$ 1,7 mil a R$ 4,9 mil.',
'https://s2-g1.glbimg.com/a5CwVVWsSnEyL82V98DVwuUnEvc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/X/D/1vWAujT8KOGcLIKGu3Ow/design-sem-nome-72-.jpg',
'Educação',
'17/02/2022',
'A Prefeitura de São Vicente, no litoral de São Paulo, abriu inscrições para um concurso público na área de educação nesta quarta-feira (14). 
Ao todo, são 102 vagas para professores adjuntos de Educação Básica I e II. 
Os salários variam de R$ 1.732 a R$ 4.972, já incluindo benefícios.
As inscrições devem ser realizadas pelo site do Instituto Brasileiro de 
Administração Municipal (Ibam) até o dia 13 de julho, com uma taxa de R$ 114. 
A íntegra do edital está disponível nos sites da Prefeitura de São Vicente e do Instituto.
Segundo a administração municipal, o concurso também constituirá cadastro reserva com 
objetivo de cobrir vagas que, embora não constem do planejamento inicial, possam acabar necessitando de reposição.
');

insert into tbl_noticias(titulo,nome_autor,descricao,capa_noticia,tema,data_noticia,corpo_noticia) 
values(
'Ministro da Educação defende criação de bolsa-auxílio para permanência de alunos no Ensino Médio', 
'Ítalo Reis', 
'Em entrevista no "Roda Viva", Camilo Santana adiantou que projetos do tipo têm sido discutidos internamente entre ministros do governo Lula',
'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2022/12/22/1048233826-sok4mm372ramjlyznm5uhtit3u.jpg',
'Educação',
'02/12/2023',
'O ministro da Educação, Camilo Santana,
 afirmou que tem defendido a criação de uma 
 bolsa financeira que auxilie na permanência de alunos do Ensino Médio nas escolas. 
 A declaração foi dada durante entrevista no programa Roda Viva, da TV Cultura, na noite desta segunda-feira, 12.
Segundo o ministro, políticas do tipo têm sido discutidas internamente e em conjunto 
entre os ministros do governo Lula. "Claro que isso demanda recursos, investimentos. Mas acho fundamental", frisa.');

insert into tbl_noticias(titulo,nome_autor,descricao,capa_noticia,tema,data_noticia,corpo_noticia) 
values(
'Oscar Niemeyer no Livro dos Heróis e Heroínas da Pátria recebe aval da Comissão de Educação', 
'João Bueno', 
'O nome do arquiteto Oscar Niemeyer está a caminho de entrar no Livro dos Heróis e Heroínas da Pátria. 
Proposta nesse sentido foi aprovada nesta terça (13) pela Comissão de Educação. 
Se não houver recurso ao Plenário do Senado, o projeto segue para a Câmara dos Deputados.',
'https://s2.glbimg.com/gKZrtShL0yaidHinge843R1tzbA=/512x320/smart/e.glbimg.com/og/ed/f/original/2020/10/22/oscarniemeyer-696x469.jpg',
'Educação',
'17/06/2022',
'Nesta terça-feira (13), a Comissão de Educação 
(CE) aprovou a inscrição do nome de Oscar 
Niemeyer no Livro dos Heróis e Heroínas da Pátria. 
A relatora, senadora Jussara Lima (PSD-PI), afirmou que o arquiteto foi o nome brasileiro do século. Além disso, 
senadores também aprovaram a criação da Frente Parlamentar em Favor da Educação Profissional e 
Tecnológica e o título de capital nacional do Azeite Extra Virgem ao município de Maria da Fé (MG).');


insert into tbl_noticias(titulo,nome_autor,descricao,capa_noticia,tema,data_noticia,corpo_noticia) 
values(
'Enem 2023: inscrições terminam nesta sexta-feira (16)', 
'Italo', 
'Taxa é de R$ 85 e pode ser paga até 21 de junho; provas ocorrem nos dias 5 e 12 de novembro',
'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/05/como-funciona-enem.jpg?w=876&h=484&crop=1',
'Educação',
'03/03/2022',
'No primeiro dia, nos testes de linguagens, redação e ciências humanas, o participante tem 5 horas e 30 minutos para a realização. 
No segundo dia, em matemática e ciências da natureza, são 5 horas.
O gabarito tem previsão de ser divulgado em 24 de novembro. Os resultados devem ser anunciados no dia 16 de janeiro de 2024.');



insert into tbl_administrador(nome,email,senha) values('admin','admin','admin');
select * from tbl_usuario;

select * from tbl_administrador;


show tables;