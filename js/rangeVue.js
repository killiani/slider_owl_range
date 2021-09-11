const help = new Vue({
        el: '#vue-history',
        delimiters: ['${', '}'],
        data: {
            count: '',
            window: {
                width: 0,
                height: 0
            }
        },

        methods: {

            countf: function (){

                const screen_m = 900;
                const screen_l = 1280;

                let screen_value = this.window.width;
                let display_element = 0;

                let element = document.getElementById('vue-history');
                let calc = element.querySelectorAll(".ce_text").length;

                    if(screen_value > screen_l){
                        display_element = 3;
                    }
                    else if(screen_value < screen_l && screen_value > screen_m){
                        display_element = 2;
                    }
                    else {
                        display_element = 1;
                    }

                this.count = calc - display_element;

            },

            handleResize() {
                this.window.width = window.innerWidth;
                this.window.height = window.innerHeight;
            }

        },

        created() {
            window.addEventListener('resize', this.handleResize);
            this.handleResize();
        },
        destroyed() {
            window.removeEventListener('resize', this.handleResize);
        },

        beforeMount(){
            this.countf()
        }
    });