var { PrismaClient } = require('@prisma/client');
const moment = require('moment');
//instanciando classe do PrismaClient
var prisma = new PrismaClient();
 
const selectAllAdm = async () => {

    let sql = 'select * from tbl_administrador;'
    let rsAdm = await prisma.$queryRawUnsafe(sql)

    if (rsAdm.length > 0) {
        return rsAdm
    }
    else {
        return false
    }
}
const insertAdm = async (dadosAdm) => {
    let sql = `insert into tbl_administrador
    (nome,email,senha)
        values
        ('${dadosAdm.nome}',
        '${dadosAdm.email}',
        '${dadosAdm.senha}'
          ) ;`;
    let rsAdm = await prisma.$queryRawUnsafe(sql)

    if (rsAdm) {
        return true;
    }
    else {
        return false;
    }
}
const deleteADM = async function (id) {
    let sql = `delete from tbl_administrador where id = ${id}`;

    let result = await prisma.$executeRawUnsafe(sql);

    if (result) {
        return true;
    }
    else {
        return false;

    }

}
const updateAdm  = async function(dadosAdm) {
    let sql = `update  tbl_administrador set
        nome  = '${dadosAdm.nome}',
        email = '${dadosAdm.email}',
        senha = '${dadosAdm.senha}'
        where id = ${dadosAdm.id} `

        console.log(dadosAdm);
        
    let rsAdm = await prisma.$executeRawUnsafe(sql)

    if (rsAdm) {
        return true;
    }
    else {
        return false;
    }
    
    }
///////////////GG

const selectAllNews = async () => {

    let sql = 'select * from tbl_noticias;'
    let rsNews = await prisma.$queryRawUnsafe(sql)

    if (rsNews.length > 0) {
        return rsNews
    }
    else {

        return false
    }
}

const updateNews  = async function(dadosNews) {
    let sql = `update  tbl_noticias set
       
    titulo       = '${dadosNews.titulo}',
    nome_autor   = '${dadosNews.nome_autor}',
    descricao    = '${dadosNews.descrissscao}',
    capa_noticia = '${dadosNews.capa_noticia}',
    tema         = '${dadosNews.tema}',
    data_noticia = '${dadosNews.data_noticia}',
   corpo_noticia = '${dadosNews.corpo_noticia}',
    where id     =  ${dadosNews.id} `

    let rsNEW = await prisma.$executeRawUnsafe(sql)

    if (rsNEW) {
        return true;
    }
    else {
        return false;
    }
    
    }


const insertNews = async (dadosNews) => {


    let sql = `insert into tbl_noticias 
    (titulo,nome_autor,descricao,capa_noticia,tema,data_noticia,corpo_noticia)
        values
        ('${dadosNews.titulo}',
        '${dadosNews.nome_autor}',
        '${dadosNews.descricao}',
        '${dadosNews.capa_noticia}',
        '${dadosNews.tema}',
        '${dadosNews.data_noticia}',
        '${dadosNews.corpo_noticia}'
          ) `;

    let rsNews = await prisma.$queryRawUnsafe(sql)

    if (rsNews) {
        return true;
    }
    else {
        return false;
    }
}

const deleteNews = async function (id) {
    let sql = `delete from tbl_noticias where id = ${id}`;

    let result = await prisma.$executeRawUnsafe(sql);

    if (result) {
        return true;
    }
    else {
        return false;

    }

}

//

//AULAS

// const selectAllCLasses = async () => {

//     let sql = 'SELECT p.id, p.nome, p.area_de_atuacao, p.horarios, a.comeco_aula, a.termino_aula FROM tbl_professor p INNER JOIN tbl_aulas a ON p.id = a.id_professor;'
//     let rsClasses = await prisma.$queryRawUnsafe(sql)

//     if (rsClasses.length > 0) {
//         return rsClasses
//     }
//     else {

//         return false
//     }
// }


//BAIRRO
// const selectAllrsNeighbor = async () => {

//     let sql = 'select * from tbl_bairro;'
//     let rsNeighbor = await prisma.$queryRawUnsafe(sql)

//     if (rsNeighbor.length > 0) {
//         return rsNeighbor
//     }
//     else {

//         return false
//     }
// }

// const insertNeighborhood = async(dadosneighborhood) => {
//     let sql =`insert into tbl_bairro
//     (nome)
//         values
//         ('${dadosneighborhood.nome}'
//           ) `;
//           let rsBor = await prisma.$queryRawUnsafe(sql)


//           if(rsBor) {
//               return true;
//           }
//           else{
//              return false;
//           }
//     }

// //CIDADE
// const selectAllrsCity = async () => {

//     let sql = 'select * from tbl_cidade;'
//     let rsCity = await prisma.$queryRawUnsafe(sql)

//     if (rsCity.length > 0) {
//         return rsCity
//     }
//     else {

//         return false
//     }
// }

// const insertCity = async(dadosCity) => {
//     let sql =`insert into tbl_cidade
//     (nome)
//         values
//         ('${dadosCity.nome}') `;
//           let rsCity = await prisma.$queryRawUnsafe(sql)


//           if(rsCity) {
//               return true;
//           }
//           else{
//              return false;
//           }
//     }
//LOGRADOURA

// const selectAllrsComplement = async () => {

//     let sql = 'select * from tbl_endereco;'
//     let rsAddress = await prisma.$queryRawUnsafe(sql)

//     if (rsAddress.length > 0) {
//         return rsAddress
//     }
//     else {

//         return false
//     }
// }

// const insertComplement = async(dadosaddress) => {
   
//     let sql = `insert into tbl_endereco
//     (cep, logradouro)
//         values
//         ('${dadosaddress.cep}',
//         '${dadosaddress.logradouro}'
//           ) `;
//           let rsEnd = await prisma.$queryRawUnsafe(sql)
//           if(rsEnd) {
//               return true;
//           }
//           else{
//              return false;
//           }
//     }

    // const selectUserTeacher = async () => {

    //     let sql = 'SELECT p.id, p.nome, p.cnpj, p.cpf, p.rg, p.data_nascimento, p.declaracao_escolaridade, p.email, p.area_de_atuacao, e.cep, e.logradouro, t.numero AS telefone FROM tbl_professor p  INNER JOIN tbl_endereco e ON p.id_endereco = e.id INNER JOIN tbl_telefone t ON p.id_telefone = t.id;'
    //     let rsTeacher = await prisma.$queryRawUnsafe(sql)
    
    //     if (rsTeacher.length > 0) {
    //         return rsTeacher
    //     }
    //     else {
    
    //         return false
    //     }
    // }

    const insertUser = async (dadosUser) => {
        const dataNascimento = moment(dadosUser.data_nascimento, 'YYYY-MM-DD');
        if (!dataNascimento.isValid()) {
          return false; // Retorna false se a data de nascimento for inválida
        }
      
        const dataNascimentoFormatted = dataNascimento.format('YYYY-MM-DD');
      
        let sql = `INSERT INTO tbl_usuario
          (nome, cnpj, cpf, rg, data_nascimento, declaracao_escolaridade, email, area_de_atuacao, motivo_inscricao, horarios_disponiveis, cep, logradouro, bairro, cidade, telefone)
          VALUES (
            '${dadosUser.nome}',
            '${dadosUser.cnpj}',
            '${dadosUser.cpf}',
            '${dadosUser.rg}',
            '${dataNascimentoFormatted}',
            '${dadosUser.declaracao_escolaridade}',
            '${dadosUser.email}',
            '${dadosUser.area_de_atuacao}',
            '${dadosUser.motivo_inscricao}',
            '${dadosUser.horarios_disponiveis}',
            '${dadosUser.cep}',
            '${dadosUser.logradouro}',
            '${dadosUser.bairro}',
            '${dadosUser.cidade}',
            '${dadosUser.telefone}'
          );`;
      
        let rsEnd = await prisma.$queryRawUnsafe(sql);
        if (rsEnd) {
          return true;
        } else {
          return false;
        }
      };
      
module.exports = {
  insertUser: insertUser,
};

    

    const selectUser = async () => {

        let sql = 'select * from tbl_usuario;'
        let rsTeacher = await prisma.$queryRawUnsafe(sql)
    
        if (rsTeacher.length > 0) {
            return rsTeacher
        }
        else {
    
            return false
        }
    }

//Telefone
// const selectAllrsTell = async () => {

//     let sql = 'select * from tbl_telefone;'
//     let rsTell = await prisma.$queryRawUnsafe(sql)

//     if (rsTell.length > 0) {
//         return rsTell
//     }
//     else {

//         return false
//     }
// }
// const insertTell = async(dadosTell) => {
//     let sql =`insert into tbl_telefone
//     (numero)
//         values
//         ('${dadosTell.numero}') `;
//           let rsTell = await prisma.$queryRawUnsafe(sql)


//           if(rsTell) {
//               return true;
//           }
//           else{
//              return false;
//           }
//     }



module.exports = {
    selectAllAdm,
    selectAllNews,
    insertNews,
    insertAdm,
    deleteADM,
    // selectAllCLasses,
    deleteNews,
    updateAdm,
    updateNews,
    // insertNeighborhood,
    // selectAllrsNeighbor,
    // insertCity,
    // selectAllrsCity,
    // selectUserTeacher,
    selectUser,
    insertUser
    // selectAllrsComplement,
    // insertComplement,
    // selectAllrsTell,
    // insertTell
}