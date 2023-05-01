const main = document.createElement("main");

const createMain = () => {
    main.className = "main";
    const body = document.querySelector("body");
    body.appendChild(main);
}

const createTextareaSection = () => {
    const textareaSection = createElement("section", "section textarea-section", main);
    createElement("textarea", "textarea", textareaSection);
}

const createKeyboardSection = () => {
    const keyboardSection = createElement("section", "section keyboard-section", main);
    const keyboard = createElement("div", "keyboard", keyboardSection);
    fillKeyboard(keyboard);
}

const fillKeyboard = keyboard => {
    const keyboardSymbols = [
        "`1234567890-=",
        "qwertyuiop[]\\",
        "asdfghjkl;'",
        "zxcvbnm,./"
    ];

    const specialKeyboardButtons = [
        { afterChars: ["Backspace"] },
        { beforeChars: ["Tab"], afterChars: ["Del"] },
        { beforeChars: ["CapsLock"], afterChars: ["Enter"] },
        { beforeChars: ["Shift"], afterChars: ["▲", "Shift"] },
        { beforeChars: ["Ctrl", "Win", "Alt", "Space"], afterChars: ["Alt", "◄", "▼", "►", "Ctrl"] }
    ];

    for (let i = 0; i < 5; i++) {
        const keyboardRow = createElement("div", "keyboard-row", keyboard);

        specialKeyboardButtons[i].beforeChars?.forEach(spec => {
            const keyboardButton = createElement("button", `keyboard-button keyboard-button-special button-${spec.toLowerCase()}`, keyboardRow);
            keyboardButton.textContent = spec;
        });

        keyboardSymbols[i]?.split("").forEach(char => {
            const keyboardButton = createElement("button", `keyboard-button`, keyboardRow);
            keyboardButton.textContent = char;
        });

        specialKeyboardButtons[i].afterChars.forEach(spec => {
            const keyboardButton = createElement("button", `keyboard-button keyboard-button-special button-${spec.toLowerCase()}`, keyboardRow);
            keyboardButton.textContent = spec;
        });
    }
}

const createInstructionSection = () => {
    const instructionSection = createElement("section", "section instruction-section", main);
}

const createElement = (tag, className, parent) => {
    const element = document.createElement(tag);
    element.className = className;
    parent.appendChild(element);

    return element;
}

createMain();
createTextareaSection();
createKeyboardSection();
createInstructionSection();

alert("Не успела всё доделать, проверьте работу, пожалуйста, в четверг.( Спасибо за понимание!")