import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

type ContactRequestBody = {
  email: string;
  name: string;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, name, message } = req.body as ContactRequestBody;

  if (
    !email ||
    !email.includes('@') ||
    !name ||
    name.trim() === '' ||
    !message ||
    message.trim() === ''
  ) {
    return res.status(422).json({ message: 'Invalid input' });
  }

  const newMessage = {
    email,
    name,
    message,
  };

  let client: MongoClient;

  try {
    client = await MongoClient.connect(process.env.MONGODB_URI as string);
  } catch (error) {
    return res.status(500).json({ message: 'Could not connect to database' });
  }

  const db = client.db();

  try {
    const result = await db.collection('messages').insertOne(newMessage);

    (newMessage as any).id = result.insertedId;
  } catch (error) {
    client.close();
    return res.status(500).json({ message: 'Storing message failed' });
  }

  client.close();

  return res.status(201).json({
    message: 'Success',
    messageData: newMessage,
  });
}
