const router = require('express').Router();
const Conversation = require('../../models/Conversation');

//NEW CONVERSATION
router.post('/', async (req, res) => {
	const newConversation = new Conversation({
		members: [req.body.senderId, req.body.receiverId]
	});
	try {
		const savedConversation = await newConversation.save();
		res.status(200).json(savedConversation);
	} catch (err) {
		res.status(500).json(err);
	}
});

//GET CONVERSATIONS OF A USER
router.get('/:userId', async (req, res) => {
	try {
		const conversation = await Conversation.find({
			members: { $in: [req.params.userId] }
		});
		res.status(200).send(conversation);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
