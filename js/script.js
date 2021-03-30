var app = new Vue({
    el: '#app',

    data: {
        searchQuery: '',
        defaultMessage: ["ok", "vabene", "ci sentiamo dopo", "ho da fare, ti scrivo dopo"],
        indexContatti: 0,
        textArea: "",
        contatti: [
            {
                nome: "Luisa",
                img: "img/avatar_io.jpg",
                display: true,
                data: "ultimo accesso 13.48",
                chat: [{
                    textChat: "Hai parlato con Marco?",
                    dataChat: "13.05",
                    drop: false,
                    typeMessage: "recived"
                },
                {
                    textChat: "Non Ancora",
                    dataChat: "13.30",
                    drop: false,
                    typeMessage: "send"
                }]
            },

            {
                nome: "Arianna",
                img: "img/avatar_6.jpg",
                display: true,
                data: "Online",
                chat: [{
                    textChat: "Ti va di uscire oggi?",
                    dataChat: "13.50",
                    drop: false,
                    typeMessage: "recived"
                },

                {
                    textChat: "certo!",
                    dataChat: "14.06",
                    drop: false,
                    typeMessage: "send"
                },
                {
                        textChat: "per che ora?",
                        dataChat: "14.07",
                        drop: false,
                        typeMessage: "send"
                    }]
            },
            {
                nome: "Fabio",
                img: "img/avatar_7.jpg",
                display: true,
                data: "accesso ore 10.30",
                chat: [{
                    textChat: "Ho portato giu il cane",
                    dataChat: "10.30",
                    drop: false,
                    typeMessage: "recived"
                },
                {
                    textChat: "Ok",
                    dataChat: "11.00",
                    drop: false,
                    typeMessage: "send"
                }]
            },
            {
                nome: "Samuele",
                img: "img/avatar_8.jpg",
                display: true,
                data: "accesso ore 14.02",
                chat: [{
                    textChat: "Che mi Racconti di bello?",
                    dataChat: "11.50",
                    drop: false,
                    typeMessage: "recived"
                },
                {
                    textChat: "Ho qualche novita! ci incontriamo così ne parliamo?",
                    dataChat: "12.47",
                    drop: false,
                    typeMessage: "send"
                }]
            },
        ]
    },
    methods: {
        contactActive: function (indice) {
            this.indexContatti = indice;
            this.scrollToEnd();
        },
        addMessage: function () {
            this.contatti[this.indexContatti].chat.push({
                textChat: this.textArea,
                dataChat: this.getTime(),
                drop: false,
                typeMessage: "send"
            });
            this.textArea = "";

            this.scrollToEnd();
            setTimeout(() => {
                this.contatti[this.indexContatti].chat.push({
                    textChat: this.defaultMessage[Math.floor(Math.random() * this.defaultMessage.length)],
                    dataChat: this.getTime(),
                    drop: false,
                    typeMessage: 'recived'
                });
                this.scrollToEnd();
            }, 1000);
        },
        scrollToEnd: function () {
            setTimeout(() => {
                var overflow = this.$el.querySelector("#container-chat");
                overflow.scrollTop = overflow.scrollHeight;
            }, 0)
        },
        resultQuery() {
            this.contatti.forEach(e => {

                if (e.nome.toLowerCase().includes(this.searchQuery.toLowerCase())) {
                    e.display = true;

                } else {
                    e.display = false;
                }
            });
        },
        getTime: function () {
            let today = new Date();
            let date = (today.getMonth() + 1) + '/' + today.getFullYear();
            let time = today.getHours() + ":" + today.getMinutes();
            let dateTime = time + ' ' + date;
            return dateTime
        },
        dropdownMenu: function (e) {
            if (this.contatti[this.indexContatti].chat[e].drop === false) {
                this.contatti[this.indexContatti].chat[e].drop = true;
            } else if (this.contatti[this.indexContatti].chat[e].drop === true) {
                this.contatti[this.indexContatti].chat[e].drop = false;
            }
        },
        // deleteMsg: function () {
        //     /* this.contatti[this.indexContatti].chat.splice(i, 1); */
        //     if (this.contatti[this.indexContatti].typeMessage !== "send"){
        //         app.$set.textChat === "Messaggio eliminato";
        //         app.$set.typeMessage === "recived";
        //     } else {
        //         this.contatti[this.indexContatti].chat[ {
        //             textChat: "Messaggio eliminato",
        //             typeMessage: "send"
        //         }];
        //     }    
        // }
    }
});

