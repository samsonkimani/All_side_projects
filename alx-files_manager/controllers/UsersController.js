import dbClient from '../utils/db.js';
import crypto from 'crypto';

const UsersController = {
  async postNew (req, res) {
    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Missing email' });
    }

    if (!password) {
      return res.status(400).json({ error: 'missing password' });
    }

    console.log(email);

    const userExists = await dbClient.client
      .db()
      .collection('user')
      .findOne({ email: email });
    if (userExists === null) {
      console.log(userExists);
      return res.status(400).json({ error: 'Already Exixts' });
    }
    console.log(userExists);

    const hashedPassword = crypto
      .createHash('sha1')
      .update(password)
      .digest('hex');

    const newUser = {
      email,
      password: hashedPassword
    };

    const result = await dbClient.client
      .db()
      .collection('users')
      .insertOne(newUser);

    const response = {
      id: result.insertedId,
      email: newUser.email
    };

    res.status(201).json(response);
  },
	 async getMe (request, response) {
    const token = request.header('X-Token');
    const key = `auth_${token}`;
    const userId = await redisClient.get(key);
    if (userId) {
		  const users = dbClient.db.collection('users');
		  const idObject = new ObjectID(userId);
		  users.findOne({ _id: idObject }, (err, user) => {
        if (user) {
			  response.status(200).json({ id: userId, email: user.email });
        } else {
			  response.status(401).json({ error: 'Unauthorized' });
        }
		  });
    } else {
		  response.status(401).json({ error: 'Unauthorized' });
    }
  }
};

export default UsersController;
