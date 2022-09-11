import { gapi } from 'gapi-script';
import { Moment } from 'moment';

const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];
const SCOPES = 'https://www.googleapis.com/auth/calendar.events';

export const initClient = (callback: (bool: boolean) => void): void => {
  gapi.load('client:auth2', async () => {
    try {
      await gapi.client.init({
        apiKey: import.meta.env.VITE_GOOGLE_CALENDAR_API,
        clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      });
      if (typeof callback === 'function') {
        callback(true);
      }
    } catch (error) {
      console.log(error);
    }
  });
};

export const checkSignInStatus = async () => {
  try {
    const status: boolean = await gapi.auth2.getAuthInstance().isSignedIn.get();
    return status;
  } catch (error) {
    console.log(error);
  }
};

export const signInToGoogle = async () => {
  try {
    const user: Record<string, unknown> = await gapi.auth2.getAuthInstance().signIn({ prompt: 'consent' });
    return user !== undefined;
  } catch (error) {
    console.log(error);
  }
};

interface Auth2 {
  signOut: () => Promise<void>;
  disconnect: () => void;
  currentUser: {
    get: () => { getBasicProfile: () => { getEmail: () => string; getName: () => string } };
  };
}

export const signOutFromGoogle = async () => {
  try {
    const auth2: Auth2 = gapi.auth2.getAuthInstance();
    await auth2.signOut();
    auth2.disconnect();
    return true;
  } catch (error) {
    console.log(error);
  }
};

export const getSignedInUserName = async () => {
  try {
    const status = await checkSignInStatus();
    if (status) {
      const auth2: Auth2 = gapi.auth2.getAuthInstance();
      const profile = auth2.currentUser.get().getBasicProfile();
      return profile.getName();
    } else {
      return '';
    }
  } catch (error) {
    console.log(error);
  }
};

type CalendarInputEvent = {
  summary: string;
  location: string;
  description: string;
  colorId: string;
  start: {
    dateTime: Moment;
    locale: string;
  };
  end: {
    dateTime: Moment;
    timeZone: string;
  };
  reminders: {
    useDefault: boolean;
    overrides: { method: string; minutes: number }[];
  };
};

export const publishTheCalenderEvent = (event: CalendarInputEvent) => {
  try {
    gapi.client.load('calendar', 'v3', () => {
      const request = gapi.client.calendar.events.insert({
        calendarId: 'primary',
        resource: event,
      });

      request.execute(function (e: { htmlLink: string }) {
        console.log('Event created: ' + e.htmlLink);
      });
    });
  } catch (error) {
    console.log(error);
    alert('ERRO: Avisa o André que deu ruim');
  }
};
