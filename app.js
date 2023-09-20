const express = require('express');
const config = require('./config');
const { connectToDatabase } = require('./src/bds/database');
const actionControllers = require('./src/presentation/controllers/actionController');
const acteurActionControllers = require('./src/presentation/controllers/acteurActionController');
const rasciControllers = require('./src/presentation/controllers/rasciController');
const userControllers = require('./src/presentation/controllers/userController');
const commentaireControllers = require('./src/presentation/controllers/commentaireController');
const coutSuppControllers = require('./src/presentation/controllers/coutSuppController');
const securityCheckControllers = require('./src/presentation/controllers/securityCheckController');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

async function startServer() {
  try {

    await connectToDatabase();

    //API Action 
    app.get('/actions', actionControllers.getAllActions.bind(actionControllers));
    app.get('/actions/paginated', actionControllers.getPaginatedActions.bind(actionControllers));
    app.post('/action', actionControllers.createAction.bind(actionControllers));
    app.get('/action/:id', actionControllers.getActionById.bind(actionControllers));
    app.put('/action/:id', actionControllers.updateAction.bind(actionControllers));
    app.delete('/action/:id', actionControllers.deleteAction.bind(actionControllers));

    //API ActeurAction 
    app.get('/acteurActions', acteurActionControllers.getAllActeurActions.bind(acteurActionControllers));
    app.post('/acteurAction', acteurActionControllers.createActeurAction.bind(acteurActionControllers));
    app.get('/acteurAction/:id', acteurActionControllers.getActeurActionById.bind(acteurActionControllers));
    app.put('/acteurAction/:id', acteurActionControllers.updateActeurAction.bind(acteurActionControllers));
    app.delete('/acteurAction/:id', acteurActionControllers.deleteActeurAction.bind(acteurActionControllers));

    //API User 
    app.get('/users', userControllers.getAllUsers.bind(userControllers));
    app.post('/user', userControllers.createUser.bind(userControllers));
    app.get('/user/:id', userControllers.getUserById.bind(userControllers));
    app.put('/user/:id', userControllers.updateUser.bind(userControllers));
    app.delete('/user/:id', userControllers.deleteUser.bind(userControllers));

    //API Commentaire
    app.get('/commentaires', commentaireControllers.getAllCommentaires.bind(commentaireControllers));
    app.post('/commentaire', commentaireControllers.createCommentaire.bind(commentaireControllers));
    app.get('/commentaire/:id', commentaireControllers.getCommentaireById.bind(commentaireControllers));
    app.put('/commentaire/:id', commentaireControllers.updateCommentaire.bind(commentaireControllers));
    app.delete('/commentaire/:id', commentaireControllers.deleteCommentaire.bind(commentaireControllers));

    //API Security Check Family
    app.get('/securityCheckFamilys', securityCheckControllers.getAllSecurityCheck.bind(securityCheckControllers));
    app.post('/securityCheckFamily', securityCheckControllers.createSecurityCheck.bind(securityCheckControllers));
    app.get('/securityCheckFamily/:id', securityCheckControllers.getSecurityCheckById.bind(securityCheckControllers));
    app.put('/securityCheckFamily/:id', securityCheckControllers.updateSecurityCheck.bind(securityCheckControllers));
    app.delete('/securityCheckFamily/:id', securityCheckControllers.deleteSecurityCheck.bind(securityCheckControllers));

    //API Cout Supplementaire
    app.get('/coutSupplementaires', coutSuppControllers.getAllCoutSupp.bind(coutSuppControllers));
    app.post('/coutSupplementaire', coutSuppControllers.createCoutSupp.bind(coutSuppControllers));
    app.get('/coutSupplementaire/:id', coutSuppControllers.getCoutSuppById.bind(coutSuppControllers));
    app.put('/coutSupplementaire/:id', coutSuppControllers.updateCoutSupp.bind(coutSuppControllers));
    app.delete('/coutSupplementaire/:id', coutSuppControllers.deleteCoutSupp.bind(coutSuppControllers));

    //API Rasci 
    app.get('/rascis', rasciControllers.getAllRascis.bind(rasciControllers));
    app.post('/rasci', rasciControllers.createRasci.bind(rasciControllers));
    app.get('/rasci/:id', rasciControllers.getRasciById.bind(rasciControllers));
    app.put('/rasci/:id', rasciControllers.updateRasci.bind(rasciControllers));
    app.delete('/rasci/:id', rasciControllers.deleteRasci.bind(rasciControllers));

    // Start the server
    app.listen(config.port, () => {
      console.log(`Server started on port ${config.port}`);
    });
  } catch (error) {
    console.error("Error during initialization", error);
  }
}

startServer();
