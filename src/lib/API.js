import { Account, Client, Functions } from "appwrite";
import { atom, task, onAction } from "nanostores";
import { persistentAtom } from "@nanostores/persistent";
import Util from "./Util";
//*         [DATA]
export const _client = new Client()
  .setEndpoint("https://ap.kbve.com/v1")
  .setProject("6436a6dc9a6b48db802f");

export const _aw = new Account(_client);
export const functions = new Functions(_client);
export const session = atom(undefined);
export const _funky = atom(undefined);
export const user$ = persistentAtom(undefined);
export const funky$ = persistentAtom(undefined);

//?         [FUNCTION]

_aw.getSession("current").then(
  function (response) {
    session.set(response);
  },
  function (error) {
    console.log(error);
  }
);

session.subscribe(async (session) => {
  if (session?.userId) {
    user$.set(await account());
  }
});

onAction(user$, ({ id, actionName, onError, onEnd }) => {
  console.log(`Action ${actionName} was started`);
  onError(({ error }) => {
    console.error(`Action ${actionName} was failed`, error);
  });
  onEnd(() => {
    console.log(`Action ${actionName} was stopped`);
  });
});


onAction(funky$, ({ id, actionName, onError, onEnd }) => {
  console.log(`Action ${actionName} was started`);
  onError(({ error }) => {
    console.error(`Action ${actionName} was failed`, error);
  });
  onEnd(() => {
    console.log(`Action ${actionName} was stopped`);
  });
});

export const account = async () => {
  try {
    return _aw.get();
  } catch (error) {
    console.log(error);
  }
};

export const funky = async (functionId) => {
  
  task(async () => {
    console.log(`Started Task ${functionId}`);
    await Util.sleep(1000);
    console.log(`Task Ended`);
  });
};
