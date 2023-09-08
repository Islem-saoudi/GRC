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
    const pageSize = parseInt(req.query.pageSize) || 5; 
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
    const actionDTO = new ActionDTO(
      uuid.v4(),
      req.body.NameAction,
      req.body.Description,
      req.body.TypeAction,
      req.body.DateDebut,
      req.body.DateFin,
      req.body.Priority,
      req.body.Cout,
      req.body.Source,
      req.body.Status,
      req.body.CommentaireId,
      req.body.CoutSuppId,
      req.body.DateFinSupp,
      req.body.SecurityId
    );

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
    const actionDTO = new ActionDTO(
      req.body.ActionId,
      req.body.NameAction,
      req.body.Description,
      req.body.TypeAction,
      req.body.DateDebut,
      req.body.DateFin,
      req.body.Priority,
      req.body.Cout,
      req.body.Source,
      req.body.Status,
      req.body.CommentaireId,
      req.body.CoutSuppId,
      req.body.DateFinSupp,
      req.body.SecurityId
    );

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
