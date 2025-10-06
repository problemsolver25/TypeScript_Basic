class Profile {
    // default public, properties are public

    private _timezone: string = "UTC";
    private readonly _uid: string = "";
    protected _role: string; // backing property  // accessible in subclass, not outside
    
    constructor(
        public email: string, 
        public name: string, 
        private _city: string,
        role: string
    ) {
        this._uid  = this.generateUID()
        this.email = email;
        this.name  = name; 
        this._city = _city; 
        this._timezone = this.getTimezone(_city); // call method
        this._role = role; // initialize backing property
    }

    // Method inside the class (no 'function' keyword)
    private getTimezone(city: string): string {
        const cityTimezones: { [city: string]: string } = {
            "New York": "America/New_York",
            "Toronto": "America/Toronto",
            "London": "Europe/London",
            "Tokyo": "Asia/Tokyo",
        };

        return cityTimezones[city] || "UTC"; // default if city not found
    }

    private generateUID(): string {
        return Date.now().toString(36) + Math.floor(Math.random() * 1000).toString(36);
    }

    get city(): string {
        return this._city;
    }

    // no return type for setter
    set city(newcity: string) {
        this._city = newcity;
        this._timezone = this.getTimezone(newcity);
    }

    public getInfo(): string {
        return `${this.name} lives in ${this._city} and timezone is ${this._timezone}`;
    }

    get role(): string {
        return this._role; // returns backing property
    }

    set role(newRole: string) {
        this._role = newRole; // sets backing property
    }

    public getRoleInfo(): string {
        return `${this.name} has role ${this.role}`;
    }

}

class User extends Profile {
    //profile: Profile; // nested object

    // ✅ accessible in subclass
    constructor(email: string, name: string, city: string, role: string) {
        super(email, name, city, role);  // call parent constructor
        //this.profile = new Profile(email, name, city); // ✅ composition, no inheritance
    }

    // Role-based actions
    public canPerformAction(): string {
        switch (this.role) {
            case "Admin":
                return `${this.name} can manage users and system settings.`;
            case "Editor":
                return `${this.name} can edit content.`;
            default:
                return `${this.name} has standard permissions.`;
        }
    }
    
}

const rose = new User("rose@example.net", "Rose", "New York", "Guest");
console.log("User Profile: ", rose.getInfo()); 
console.log(rose.getRoleInfo());
console.log(rose.canPerformAction());

rose.city = "Toronto";
rose.role = "Admin";
console.log("Updated Profile: ", rose.getInfo()); 
console.log(rose.getRoleInfo());
console.log(rose.canPerformAction());

// ---------------------------------------------------------------------
//      INTERFACE: contract, blue print strictly implement it. 
//      Supports multiple inheritance. 
//      Allow declaration merging
// ---------------------------------------------------------------------
interface TakePhoto {
    cameraMode: string,
    filter:string,
    burst: number
}

// declaration merging
interface TakePhoto {
    shareOptions(): [];
}

interface Story {
    createStory(): void;
}

// ---------------------------------------------------------------------
//      ABSTRACT CLASS: can't create objects, blue print (contract) and base implementation
//      implement concrete methods + abstract onest
//      allows Access modifiers
//      Can define constructors
//      Use case: When you need shared logic or default behavior
// ---------------------------------------------------------------------
abstract class AbstractTakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {

    }

    abstract getSepia(): void 

    // shared logic
    getCameraMode() {
        console.log(`Camera Mode is ${this.cameraMode}`);
    }
}

// ---------------------------------------------------------------------
//      class extend only one abstract class
//      class can be implemented by multiple interfaces.
// ---------------------------------------------------------------------
class Instagram extends AbstractTakePhoto implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter, burst)
    }

    getSepia() {

    }

    shareOptions(): [] {
        return [];
    }

    getReelTime(): number {
        // some complex calculation
        return 8;
    }
}

class YouTube implements TakePhoto, Story {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: number
    ) {
        
    }

    createStory(): void {
        console.log("Story was created!")
    }

    shareOptions(): [] {
        return [];
    }
}

const obj = new Instagram("front", "black-white", 10);
console.log(obj);
console.log(obj.getReelTime());
console.log(obj.getCameraMode());

export {}