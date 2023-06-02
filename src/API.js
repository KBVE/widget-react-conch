import { Account, Client, Functions } from "appwrite";
import { atom, task } from "nanostores";
import { persistentAtom } from "@nanostores/persistent";
//*         [DATA]
export const _client = new Client()
  .setEndpoint("https://ap.kbve.com/v1")
  .setProject("6436a6dc9a6b48db802f");

export const _aw = new Account(_client);
export const functions = new Functions(_client);
export const session = atom(undefined);
export const api$ = atom(false);
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

export const account = async () => {
  try {
    return _aw.get();
  } catch (error) {
    console.log(error);
  }
};

export const exe = async (functionId, data) => {
  try {
    return functions.createExecution(functionId, data);
  } catch (error) {
    console.log(error);
  }
}

export const whisky = async (functionId, data) => {
  if(api$.get()){ return }
  task(async () => {
    api$.set(true);
    console.log(`Task API -> ${api$.get()}`);
    console.log(`Started Task ${functionId}`);
    console.log(`Data ${data}`);
    funky$.set(await exe(functionId, data));
    api$.set(false);
    console.log(`Task API -> ${api$.get()}`);
    console.log(`Task Ended`);

  });
};
