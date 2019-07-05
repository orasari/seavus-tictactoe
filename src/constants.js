export function checkWhosWinner(xSquares, oSquares, posibleSolution) {
    if (
      xSquares &&
      xSquares.includes(posibleSolution[0]) &&
      xSquares.includes(posibleSolution[1]) &&
      xSquares.includes(posibleSolution[2])
    ) {
      return "X";
    } else if (
      oSquares &&
      oSquares.includes(posibleSolution[0]) &&
      oSquares.includes(posibleSolution[1]) &&
      oSquares.includes(posibleSolution[2])
    ) {
      return "O";
    } else return;
  }
  
  export function prepareFromStorage(localStorageObject) {
    let xSqaureArrayNumbers = [];
    if (localStorageObject) {
      localStorageObject.replace(",", "");
      let xSqaureArray = localStorageObject.split("");
      xSqaureArray.map((item, i) => {
        xSqaureArrayNumbers.push(parseInt(item));
      });
    }
    return xSqaureArrayNumbers;
  }
  
  export function setLocalStorageItems(
    oIsNext,
    history,
    xSquares,
    oSquares,
    selectedSquares
  ) {
    localStorage.setItem("oIsNext", oIsNext);
    localStorage.setItem("history", history);
    localStorage.setItem("xSquares", xSquares);
    localStorage.setItem("oSquares", oSquares);
    localStorage.setItem("selectedSquares", selectedSquares);
  
    let localStorageObject = {
      oIsNext,
      history,
      xSquares,
      oSquares,
      selectedSquares
    };
    localStorage.setItem(
      "localStorageObject",
      JSON.stringify(localStorageObject)
    );
  }
  
  export function getFromLocalStorage(varName) {
    let localStorageObject = localStorage.getItem("localStorageObject")
      ? JSON.parse(localStorage.getItem("localStorageObject"))
      : {};
    let history = {};
    let oIsNext;
    let xSquares = [];
    let oSquares = [];
    let selectedSquares = {};
    switch (varName) {
      case "history":
        history = localStorageObject.history
          ? JSON.parse(localStorageObject.history)
          : null;
        return history;
      case "oIsNext":
        oIsNext = localStorageObject.oIsNext;
        return oIsNext;
      case "xSquares":
        xSquares = localStorageObject.xSquares ? localStorageObject.xSquares : [];
        return xSquares;
      case "oSquares":
        oSquares = localStorageObject.oSquares ? localStorageObject.oSquares : [];
        return oSquares;
      case "selectedSquares":
        selectedSquares = localStorageObject.selectedSquares
          ? JSON.parse(localStorageObject.selectedSquares)
          : {};
        return selectedSquares;
      default:
        return null;
    }
  }
  