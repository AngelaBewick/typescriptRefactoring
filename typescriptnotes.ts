// Interfaces
// Classes
// Types

interface Animal {
    legs: number;
    call(): string;
};

const dog: Animal = {
    legs: 4, 
    call: () => {
        return 'woof'
    }
}

type Animal2 = {
    legs: number;
    call(): string;
}

const cat: Animal2 = {
    legs: 4, 
    call: () => {
        return 'meow'
    }
}

class Animal3 {
    legs: 0;
}

const snake = new Animal3();
// Snake has 0 legs upon creation

class NASA {
    constructor(private currentSpaceCraft: SpaceCraft) {}

    public goToSpace(): void {
        this.currentSpaceCraft.fly();
    }
}

// Some outside library
class RocketShip implements SpaceCraft {
    public fly(): void {
        console.log('Blasting off!');
    }

    public getDiagnostics(): Diagnostics {
        return {
            temperatures: [100], 
            pressure: 300,
            language: 'English'
        } as Diagnostics
    }
    
}

class UFO implements SpaceCraft {
    public fly(): void {
        console.log('Zoooooooom!');
    }

    public getDiagnostics(): Diagnostics {
        return {
            temperatures: [1, '3'], 
            pressure: 200,
            language: 'BeepBoop'
        } as Diagnostics
    }
}

interface Diagnostics {
    temperatures: Array<number | string>;
    pressure: number;
}

interface SpaceCraft {
    fly(): void;
    getDiagnostics(): Diagnostics;
}

const rocketShip = new RocketShip();
const ufo = new UFO();

const nasa = new NASA(rocketShip);
nasa.goToSpace();



//// Singletons vs. Multiple Classes

class LoggingService {
    public number;
    count() {
        this.number++;
    }
}
class AuthService {

    constructor(loggingService) {
        
    };
}

class SecurityService {
    
    constructor(loggingService) {
    };
}

class App {
    // constructor(public authService: AuthService, public securityService: SecurityService) {};

    public loggingService = new LoggingService();

    public authService = new AuthService(this.loggingService);
    public securityService = new SecurityService(this.loggingService);
}




