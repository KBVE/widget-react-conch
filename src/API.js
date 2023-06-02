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

export const account = async () => {
  try {
    return _aw.get();
  } catch (error) {
    console.log(error);
  }
};

export const exe = async (functionId, data) => {
  const promise = functions.createExecution(functionId, data);
  promise.then(
    function (response) {
      console.log(response.response);
      return response.response;
    },
    function (error) {
      console.log(error);
    }
  );
}

export const funky = async (functionId, data) => {
  task(async () => {
    console.log(`Started Task ${functionId}`);
    console.log(`Data ${data}`);
    funky$.set(await exe(functionId, data));
    console.log(`Task Ended`);
    
  });
};
