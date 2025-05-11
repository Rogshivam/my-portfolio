import { connectToDatabase } from '../../utils/mongodb';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Connect to MongoDB
    const { db } = await connectToDatabase();

    // Store the message in the database
    const result = await db.collection('messages').insertOne({
      name,
      email,
      message,
      createdAt: new Date(),
    });

    return res.status(200).json({ message: 'Message sent successfully', id: result.insertedId });
  } catch (error) {
    console.error('Error storing message:', error);
    // return res.status(500).json({ message: 'Error sending message' });
    return res.status(500).json({ message: 'Error sending message', error: error.message });

  }
} 