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
    const userId = req.body.UserId;
    const commentaireDTO = new CommentaireDTO(
      uuid.v4(),
      req.body.Commentaire,
      req.body.DateHeure,
      userId             
    );
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
    const updatedUserId = req.body.UserId;

    // Vérifiez si l'utilisateur authentifié correspond à l'utilisateur du commentaire
    if (req.user.id !== updatedUserId) {
      return res.status(403).json({ error: "You are not authorized to update this comment." });
    }

    const commentaireDTO = new CommentaireDTO(
      req.body.CommentaireId,
      req.body.Commentaire,
      req.body.DateHeure,
      updatedUserId
  );

    const updatedCommentaire = await commentaireService.update(id, commentaireDTO);
    res.json(updatedCommentaire);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCommentaire = async (req, res) => {
  try {
    const id = req.params.id;

    // Récupérez l'ID de l'utilisateur authentifié (keycloack!)
    const authenticatedUserId = req.user.id;

    // Récupérez l'ID de l'utilisateur du commentaire
    const commentaire = await commentaireService.getById(id);
    const userIdOfComment = commentaire.UserId;

    // Vérifiez si l'utilisateur authentifié correspond à l'utilisateur du commentaire
    if (authenticatedUserId !== userIdOfComment) {
      return res.status(403).json({ error: "You are not authorized to delete this comment." });
    }

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
