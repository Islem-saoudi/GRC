const ActionServiceImpl = require('../../services/actionServiceImpl');
const ActionDTO = require('../../core/dto/actionDTO');
const ActionRepository = require('../../repositories/actionRepository');
const uuid = require('uuid');


const actionRepository = new ActionRepository();
const actionService = new ActionServiceImpl(actionRepository); // Inject the repository into the service

const getAllActions = async (req, res) => {
  try {
    const actions = await actionService.getAll();
    res.json(actions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const getPaginatedActions = async (req, res) => {
  try {
    const pageSize = parseInt(req.query.pageSize) || 10; 
    const page = parseInt(req.query.page) || 1; 
    
    const actions = await actionService.getAllPaginated(page, pageSize);
    const totalCount = await actionService.getTotalCount();
    const pageNumber = Math.ceil(totalCount / pageSize); 
    
    res.json({ actions, totalCount, pageNumber });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const createAction = async (req, res) => {
  try {
    const commentaireId = req.body.CommentaireId;
    const coutSuppId =req.body.CoutSuppId;
    const securityId = req.body.SecurityId;


    const actionDTO = new ActionDTO({
      ActionId: uuid.v4(),
      NameAction: req.body.NameAction,
      Description: req.body.Description,
      TypeAction: req.body.TypeAction,
      DateDebut: req.body.DateDebut,
      DateFin: req.body.DateFin,
      Priority: req.body.Priority,
      Cout: req.body.Cout,
      Source: req.body.Source,
      Status: req.body.Status,
      CommentaireId: commentaireId,
      CoutSuppId: coutSuppId,
      DateFinSupp: req.body.DateFinSupp,
      SecurityId: securityId
  });

    const createdAction = await actionService.create(actionDTO);
    res.status(201).json(createdAction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const getActionById = async (req, res) => {
  try {
    const id = req.params.id;
    const action = await actionService.getById(id)
    if (!action) {
      res.status(404).json({ message: 'Action not found' });
    } else {
      res.json(action);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateAction = async (req, res) => {
  try {
    const id = req.params.id;

    const updatedCommentaireId = req.body.CommentaireId; // Mettez à jour avec la nouvelle valeur
    const updatedCoutSuppId = req.body.CoutSuppId; // Mettez à jour avec la nouvelle valeur
    const updatedSecurityId = req.body.SecurityId;
    
    const actionDTO = new ActionDTO({
      ActionId: req.body.ActionId,
      NameAction: req.body.NameAction,
      Description: req.body.Description,
      TypeAction: req.body.TypeAction,
      DateDebut: req.body.DateDebut,
      DateFin: req.body.DateFin,
      Priority: req.body.Priority,
      Cout: req.body.Cout,
      Source: req.body.Source,
      Status: req.body.Status,
      CommentaireId: updatedCommentaireId,
      CoutSuppId: updatedCoutSuppId,
      DateFinSupp: req.body.DateFinSupp,
      SecurityId: updatedSecurityId
  });

    const updatedAction = await actionService.update(id, actionDTO);
    res.json(updatedAction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteAction = async (req, res) => {
  try {
    const id = req.params.id;
    await actionService.delete(id);
    res.json({ message: 'Action deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports = {
  getAllActions,
  getPaginatedActions,
  createAction,
  getActionById,
  updateAction,
  deleteAction,
};
