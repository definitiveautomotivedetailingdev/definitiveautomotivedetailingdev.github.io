import { google } from 'googleapis';
import fs from 'fs';

const SERVICE_ACCOUNT_KEY = JSON.parse(fs.readFileSync('./key.json', 'utf-8'));
const SCOPES = ['https://www.googleapis.com/auth/calendar'];

const auth = new google.auth.JWT({
  email: SERVICE_ACCOUNT_KEY.client_email,
  key: SERVICE_ACCOUNT_KEY.private_key,
  scopes: SCOPES,
});

const calendar = google.calendar({ version: 'v3', auth });

async function testAuth() {
  try {
    const response = await calendar.events.list({
      calendarId: 'd33044a819058b1ebe5e91fb04bb6d1799027f741c43f93bc7719613d66aa67b@group.calendar.google.com', // Replace with your calendar ID
      timeMin: new Date().toISOString(),
      timeMax: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    });
    console.log('Events:', response.data.items);
  } catch (error) {
    console.error('Test failed:', error);
  }
}

testAuth();