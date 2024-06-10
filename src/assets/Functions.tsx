export function delayLoad(promise : any) {
    return new Promise(resolve => {
      setTimeout(resolve, 0);
    }).then(() => promise);
  }



 