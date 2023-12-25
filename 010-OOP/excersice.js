class Phone {
    constructor(color, weight, screenResolution, camResolution, ram) {
        this.color = color;
        this.weight = weight;
        this.screenResolution = screenResolution;
        this.camResolution = camResolution;
        this.ram = ram;
        this.isOn = true;
    }
    getInfor() {
        return `This phone is <b>${this.color}</b>,
        it weights <b>${this.weight}</b> grams,
        its screen resolution is <b>${this.screenResolution}</b>,
        its camera resolution is <b>${this.camResolution}</b>
        and it has <b>${this.ram}</b> GB of RAM`;
    }
    onButton() {
        if (this.isOn === true) {
            this.isOn = false;
            return `The phone is on, turning it off`;
        } else {
            this.isOn = true;
            return `The phone is off, turning it on`;
        }
    }
    restart() {
        if (this.isOn) {
            this.isOn = false;
            this.isOn = true;
            return `The phone is restarting`;
        } else {
            return `The phone is off`;
        }
    }
    takePhoto() {
        if (this.isOn) {
            return `The photo was taken in ${this.camResolution}`;
        } else {
            return `The phone is off`;
        }
    }
    recordVideo() {
        if (this.isOn) {
            return `The video was recorded in ${this.camResolution}`;
        } else {
            return `The phone is off`;
        }
    }
}

class SmartPhone extends Phone {
    constructor(color, weight, screenResolution, camResolution, ram, os, appStore) {
        super(color, weight, screenResolution, camResolution, ram);
        this.os = os;
        this.appStore = appStore;
    }
    getInfor() {
        return `${super.getInfor()} and it uses ${this.os}`;
    }
    installApp(app) {
        if (this.isOn) {
            return `The app ${app} was installed`;
        } else {
            return `The phone is off`;
        }
    }
    uninstallApp(app) {
        if (this.isOn) {
            return `The app ${app} was uninstalled`;
        } else {
            return `The phone is off`;
        }
    }
    useApp(app) {
        if (this.isOn) {
            return `The app ${app} is being used`;
        } else {
            return `The phone is off`;
        }
    }
}

class App {
    constructor(name, totalDownloads, rating, weight) {
        this.name = name;
        this.totalDownloads = totalDownloads;
        this.rating = rating;
        this.weight = weight;
        this.isInstalled = false;
        this.isOpen = false;
    }
    getInfor() {
        return `The app ${this.name} has ${this.totalDownloads} downloads,
        its rating is ${this.rating} and its weight is ${this.weight}`;
    }
    installApp() {
        if (this.isInstalled) {
            return `The app ${this.name} is already installed`;
        } else {
            this.isInstalled = true;
            return `The app ${this.name} was installed`;
        }
    }
    uninstallApp() {
        if (this.isInstalled) {
            this.isInstalled = false;
            return `The app ${this.name} was uninstalled`;
        } else {
            return `The app ${this.name} is not installed`;
        }
    }
    openApp() {
        if (this.isInstalled) {
            if (this.isOpen) {
                return `The app ${this.name} is already open`;
            } else {
                this.isOpen = true;
                return `The app ${this.name} was opened`;
            }
        } else {
            return `The app ${this.name} is not installed`;
        }
    }
    closeApp() {
        if (this.isInstalled) {
            if (this.isOpen) {
                this.isOpen = false;
                return `The app ${this.name} was closed`
            } else {
                return `The app ${this.name} is already close`;
            }
        } else {
            return `The app ${this.name} is not installed`;
        }
    }
}

const phones = [];

const phone1 = new Phone("black", 200, "1920x1080", "12MP", 4);
phones.push(phone1);
const phone2 = new Phone("white", 150, "1280x720", "8MP", 2);
phones.push(phone2);
const phone3 = new Phone("red", 180, "1920x1080", "12MP", 4);
phones.push(phone3);
const phone4 = new SmartPhone("blue", 200, "1920x1080", "12MP", 4, "Android", "Google Play");
phones.push(phone4);

document.write(`<h1>Phones</h1>`);
for (let i = 0; i < phones.length; i++) {
    document.write(`<h2>Phone ${i + 1}</h2>`);
    document.write(`<p>${phones[i].getInfor()}</p>`);
}

const apps = [];

const app1 = new App("Flappy Bird", 200, 5, 5);
apps.push(app1);
const app2 = new App("Facebook", 1000, 5, 2);
apps.push(app2);

document.write(`<h1>Apps</h1>`);
for (const app of apps) {
    document.write(`<h2>App ${app.name}</h2>`);
    document.write(`<p>${app.getInfor()}</P>`);
}