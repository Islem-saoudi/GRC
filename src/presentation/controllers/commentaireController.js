const CommentaireServiceImpl = require('../../services/commentaireServiceImpl');
const CommentaireDTO = require('../../core/dto/commentaireDTO');
const CommentaireRepository = require('../../repositories/commentaireRepository');
const uuid = require('uuid');


const commentaireRepository = new CommentaireRepository();
const commentaireService = new CommentaireServiceImpl(commentaireRepository);

const getAllCommentaires = async (req, res) => {
  try {
    const commentaires = await commentaireService.getAll();
    res.json(commentaires);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createCommentaire = async (req, res) => {
  try {
    const commentaireDTO = new CommentaireDTO({
      CommentaireId: uuid.v4(),
      Commentaire: req.body.Commentaire,
      DateHeure: req.body.DateHeure,
      UserId: req.body.UserId
  });

    const createdCommentaire = await commentaireService.create(commentaireDTO);
    res.status(201).json(createdCommentaire);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const getCommentaireById = async (req, res) => {
  try {
    const id = req.params.id;
    const commentaire = await commentaireService.getById(id)
    if (!commentaire) {
      res.status(404).json({ message: 'Comment not found' });
    } else {
      res.json(commentaire);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCommentaire = async (req, res) => {
  try {
    const id = req.params.id;
    const commentaireDTO = new CommentaireDTO({
      CommentaireId: req.body.CommentaireId,
      Commentaire: req.body.Commentaire,
      DateHeure: req.body.DateHeure,
      UserId: req.body.UserId
  });

    const updatedCommentaire = await commentaireService.update(id, commentaireDTO);
    res.json(updatedCommentaire);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCommentaire = async (req, res) => {
  try {
    const id = req.params.id;
    await commentaireService.delete(id);
    res.json({ message: 'Comment deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports = {
  getAllCommentaires,
  createCommentaire,
  getCommentaireById,
  updateCommentaire,
  deleteCommentaire,
};
