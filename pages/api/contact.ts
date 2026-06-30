import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

type ContactRequestBody = {
  email: string;
  name: string;
  message: string;
};

type ContactMessage = {
  email: string;
  name: string;
  message: string;
  status: 'new';
  source: 'contact-form';
  createdAt: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, name, message } = req.body as ContactRequestBody;

  const trimmedEmail = email?.trim();
  const trimmedName = name?.trim();
  const trimmedMessage = message?.trim();

  if (
    !trimmedEmail ||
    !trimmedEmail.includes('@') ||
    !trimmedName ||
    !trimmedMessage ||
    trimmedMessage.length < 10
  ) {
    return res.status(422).json({
      message: 'Please provide a valid email, name and message.',
    });
  }

  const connectionString = process.env.MONGODB_URI;

  if (!connectionString) {
    return res.status(500).json({ message: 'Missing database configuration' });
  }

  const newMessage: ContactMessage = {
    email: trimmedEmail,
    name: trimmedName,
    message: trimmedMessage,
    status: 'new',
    source: 'contact-form',
    createdAt: new Date().toISOString(),
  };

  let client: MongoClient;

  try {
    client = await MongoClient.connect(connectionString);
  } catch (error) {
    return res.status(500).json({ message: 'Could not connect to database' });
  }

  const db = client.db();

  try {
    const result = await db.collection('messages').insertOne(newMessage);

    return res.status(201).json({
      message: 'Success',
      messageData: {
        ...newMessage,
        id: result.insertedId.toString(),
      },
    });
  } catch (error) {
    return res.status(500).json({ message: 'Storing message failed' });
  } finally {
    await client.close();
  }
}
