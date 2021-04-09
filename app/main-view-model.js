const Observable = require("@nativescript/core").Observable;

function createViewModel(page) {
    const viewModel = new Observable();
    viewModel.counter = 42;

    viewModel.onTap = () => {
        viewModel.counter--;
        let fl = NSFlex.alloc().init();
        page.ios.view.tag = 12
        let children = [];
        page.eachChildView(c => {
            children.push(c)
            c.eachChildView(v => {
                children.push(v)
            })
        });
        for (let i = 0; i < children.length; i++) {
            children[i].ios.tag = i;
        }
        fl.setup(page.ios.view, c => {
            console.log(c);
            const navigationEntry = {
                moduleName: "details",
                context: { view:  children[c]},
                animated: true
            };
            page.frame.navigate(navigationEntry);
        });
    };

    return viewModel;
}

exports.createViewModel = createViewModel;
