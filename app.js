const express = require('express');
const config = require('./config');
const { connectToDatabase } = require('./src/bds/database');
const actionControllers = require('./src/presentation/controllers/actionController');
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
    app.post('/actions', actionControllers.createAction.bind(actionControllers));
    app.get('/actions/:id', actionControllers.getActionById.bind(actionControllers));
    app.put('/actions/:id', actionControllers.updateAction.bind(actionControllers));
    app.delete('/actions/:id', actionControllers.deleteAction.bind(actionControllers));

    //API Commentaire
    app.get('/commentaires', commentaireControllers.getAllCommentaires.bind(commentaireControllers));
    app.post('/commentaires', commentaireControllers.createCommentaire.bind(commentaireControllers));
    app.get('/commentaires/:id', commentaireControllers.getCommentaireById.bind(commentaireControllers));
    app.put('/commentaires/:id', commentaireControllers.updateCommentaire.bind(commentaireControllers));
    app.delete('/commentaires/:id', commentaireControllers.deleteCommentaire.bind(commentaireControllers));

    //API Security Check Family
    app.get('/securityCheckFamily', securityCheckControllers.getAllSecurityCheck.bind(securityCheckControllers));
    app.post('/securityCheckFamily', securityCheckControllers.createSecurityCheck.bind(securityCheckControllers));
    app.get('/securityCheckFamily/:id', securityCheckControllers.getSecurityCheckById.bind(securityCheckControllers));
    app.put('/securityCheckFamily/:id', securityCheckControllers.updateSecurityCheck.bind(securityCheckControllers));
    app.delete('/securityCheckFamily/:id', securityCheckControllers.deleteSecurityCheck.bind(securityCheckControllers));

    //API Cout Supplementaire
    app.get('/coutSupplementaire', coutSuppControllers.getAllCoutSupp.bind(coutSuppControllers));
    app.post('/coutSupplementaire', coutSuppControllers.createCoutSupp.bind(coutSuppControllers));
    app.get('/coutSupplementaire/:id', coutSuppControllers.getCoutSuppById.bind(coutSuppControllers));
    app.put('/coutSupplementaire/:id', coutSuppControllers.updateCoutSupp.bind(coutSuppControllers));
    app.delete('/coutSupplementaire/:id', coutSuppControllers.deleteCoutSupp.bind(coutSuppControllers));

    // Start the server
    app.listen(config.port, () => {
      console.log(`Server started on port ${config.port}`);
    });
  } catch (error) {
    console.error("Error during initialization", error);
  }
}

startServer();
