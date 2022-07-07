const imgUrl = {
    "Male": {
        "hero" : "https://recursionist.io/img/dashboard/lessons/quickstart/male-hero.png",
        "warrior" : "https://recursionist.io/img/dashboard/lessons/quickstart/male-warrior.png",
        "mage" : "https://recursionist.io/img/dashboard/lessons/quickstart/male-mage.png"
    },
    "Female" : {
        "hero" : "https://recursionist.io/img/dashboard/lessons/quickstart/female-hero.png",
        "warrior" : "https://recursionist.io/img/dashboard/lessons/quickstart/female-warrior.png",
        "mage" : "https://recursionist.io/img/dashboard/lessons/quickstart/female-mage.png"
    }
}



var app = new Vue ({
    el: '#app',
    data() {
        return{
            name: "unknown",
            gender: "Male",
            characterClass: 'hero',
            traits: "everyman",
            img: "https://recursionist.io/img/dashboard/lessons/quickstart/male-hero.png",
            strength: 10,
            agility: 10,
            resilience: 10,
            wisdom: 10,
            luck: 10,
        };
    },
    computed: {
        displayStrength: function () {
            if (this.traits == "brave") return this.strength * 1.1;
            else if (this.traits == "tomboy") return this.strength * 1.1;
            else return this.strength;
        },
        displayAgility: function () {
            if (this.traits == "bat out of hell") return this.agility * 1.4;
            else if (this.traits == "brave") return this.agility * 1.1;
            else if (this.traits == "tomboy") return this.agility * 1.1;
            else return this.agility;
        },
        displayLuck: function () {
            if (this.traits == "brave") return this.luck * 1.2;
            else if (this.traits == "lucky devil") return this.luck * 1.5;
            else return this.luck;
        },
        imgSrc: function () {
            return imgUrl[this.gender][this.characterClass];
        }
    }
})
