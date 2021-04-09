const Observable = require("@nativescript/core").Observable;

function getMessage(counter) {
    if (counter <= 0) {
        return "Hoorraaay! You unlocked the NativeScript clicker achievement!";
    } else {
        return `${counter} taps left`;
    }
}

function createViewModel(page, view) {
    const viewModel = new Observable();

    const items = [
        {title: "Class", subtitle: view.constructor.name},
        {title: "Native description", subtitle: view.ios},
        {title: "Color", subtitle: view.style.color},
        {title: "Margin", subtitle: view.style.margin},
        {title: "Padding", subtitle: view.style.padding},
        {title: "Font size", subtitle: view.style.fontSize},
        {title: "Width", subtitle: view.style.width},
        {title: "Height", subtitle: view.style.height}
    ]

    viewModel.set("items", items);

    console.log(view.style.width);
    return viewModel;
}

exports.createViewModel = createViewModel;
