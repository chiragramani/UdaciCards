import { AsyncStorage } from "react-native";
import { Notifications, Permissions } from "expo";
const DECKS_STORAGE_KEY = "UdaciCards:Decks";
const NOTIFICATION_KEY = "UdaciCards:DecksNotification";

export function saveDeck(deckName, deck) {
  return AsyncStorage.mergeItem(
    DECKS_STORAGE_KEY,
    JSON.stringify({
      [deckName]: deck
    })
  );
}

export function addCardToDeck(question, deck) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(results => {
    const data = JSON.parse(results);
    const updatedDeck = data[deck.title];
    updatedDeck.questions = deck.questions.concat(question);
    return saveDeck(deck.title, updatedDeck);
  });
}

export function deleteDeckFromDB({ title }) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(results => {
    const data = JSON.parse(results);
    data[title] = undefined;
    delete data[title];
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data));
  });
}

function formatDeckResults(results) {
  return results === null ? {} : JSON.parse(results);
}

export function fetchDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(formatDeckResults);
}

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  );
}

function createNotification() {
  return {
    title: "Quiz is waiting to be completed!",
    body: "👋 Please complete one quiz today!",
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: "high",
      sticky: false,
      vibrate: true
    }
  };
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(data => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === "granted") {
            Notifications.cancelAllScheduledNotificationsAsync();

            let tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(20);
            tomorrow.setMinutes(0);

            Notifications.scheduleLocalNotificationAsync(createNotification(), {
              time: tomorrow,
              repeat: "day"
            });

            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
          }
        });
      }
    });
}
