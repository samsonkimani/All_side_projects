import dbClient from '../utils/db.js';
import crypto from 'crypto';

const UsersController = {
	async postNew(req, res) {
		const { email, password } = req.body;

		if (!email) {
			return res.status(400).json({ error: 'Missing email'});
		}

		if (!password) {
			return res.status(400).json({ error: 'missing password'} );
		}

		const userExists = await dbClient.client
			.db()
			.collection('user')
			.findOne({ email });
		if (userExists) {
			return res.status(400).json( {error: 'Already Exixts' });
		}

		const hashedPassword = crypto
			.createHash('sha1')
			.update(password)
			.digest('hex');

		const newUser = {
			email,
			password: hashedPassword,
		};

		const result = await dbClient.client
		.db()
		.collection('users')
		.insertOne(newUser);

		const response = {
			id: result.insertedId,
			email: newUser.email,
		};

		res.status(201).json(response);
	},
};

export default UsersController;
