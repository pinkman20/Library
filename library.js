class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut=false;
        this._ratings=[];
    }
    get title() {
        return this._title;
    }
    get isCheckedOut() {
        return this._isCheckedOut
    }
    get ratings() {
        return this._ratings
    }
    set isCheckedOut(value) {
        this._isCheckedOut=value;
    }
    toggleCheckedOut (){
        this.isCheckedOut=!this.isCheckedOut
    }
    getAverageRating() {
       let sum = this.ratings.reduce((acc,rat)=>acc+rat,0);
       return sum/this.ratings.length
    }
    addRating (value) {
        this.ratings.push(value)

    }
}

class Book extends Media {
    constructor(author,title,pages) {
        super(title);
        this._author=author;
        this._pages=pages;

    }
    get author() {
        return this._author;

    }
    get pages() {
        return this._pages;
    }
}

class Movie extends Media {
    constructor(director,title,runTime) {
        super(title);
        this._director=director;
        this._runTime=runTime
    }
    get director() {
        return this._director
    }
    get runTime() {
        return this._runTime
    }
}

const historyOfEverything = new Book('Bill Bryson','A Short History of Nearly Everything',544)
historyOfEverything.toggleCheckedOut();

console.log(historyOfEverything.isCheckedOut)

historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
historyOfEverything.addRating(4);

console.log(historyOfEverything.getAverageRating())


const inception = new Movie ('Christopher Nolan', 'Inception', 148)

inception.toggleCheckedOut()
console.log(inception.isCheckedOut)

inception.addRating(5);
inception.addRating(3);
inception.addRating(4);

console.log(inception.getAverageRating())

console.log(inception.title)