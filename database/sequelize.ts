import {Error, Sequelize} from "sequelize"
export  const sequelize = new Sequelize('dvdrental', 'postgres', 'hewertonc', {
    host:'localhost',
    dialect:'postgres',
    define:{
        freezeTableName: true,
        timestamps:false
    },
    logging:false
})

export default ()=>{
    sequelize
        .authenticate()
        .then(()=>{
            console.log('Connection done!')
        })
        .catch((error: Error)=>{
            console.log(`erro na conexao: ${error}`)
        })
}