import DrawerInitiator from '../utils/drawer-initiator';

class App {
    constructor({ button, drawer, content }) {
        this._button = button;
        this._drawer = drawer;
        this._content = content;
    

        this._initialAppShell();
    }

    _initialAppShell() {
        // TODO: initial Drawer
        // kita bisa menginisiasikan komponen lain bila ada
        DrawerInitiator.init({
            button: this._button,
            drawer: this._drawer,
            content: this._content,
        });
    }
}
 
export default App;