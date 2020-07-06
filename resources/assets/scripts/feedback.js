import star from "./star";

class feedback extends star {
    constructor () {
        super()
        this._init = {
            rate: null,
            message: null,
            useful: null,
            info: this.info()
        }
    }
    tabCheckStar(args) {
        if(!super.star_select) {
            args.nextElementSibling.setAttribute('style','display:block')
            return false
        }else{

            this._init = {
                rate: super.star_select,
                message: this.init.message,
                useful: this.init.useful,
                info: this.init.info
            }

            this.nextTab(args)
        }
    }

    tabUncheck(args) {
        let textarea = document.getElementById( args.dataset.textarea )
        this._init = {
            rate: this.init.rate,
            message: textarea.value,
            useful: this.init.useful,
            info: this.init.info
        }
        this.nextTab(args)
    }

    submit(args) {
        
        let input = args.dataset.validation
        input = JSON.parse(input)
        let val = document.getElementsByName(input.input_name)
        let useful = {
            yes: val[0].checked,
            no: val[1].checked 
        }
        this._init = {
            rate: this.init.rate,
            message: this.init.message,
            useful: useful,
            info: this.init.info
        }
        for( let i of val ) {
            if(i.checked){
                this.nextTab(args)
                break
            }
        }
        val[0].focus()
        args.nextElementSibling.setAttribute('style','display:block')

        

        console.log(this.init)
    }

    nextTab(args) {
        document.getElementById(args.dataset.current).setAttribute('class', 'hide')
        document.getElementById(args.dataset.next).setAttribute('class', 'active')
    }

    get init() {
        return this._init;
    }
    set init(args) {
        this._init = {
            rate: args.rate,
            message: args.message,
            useful: args.useful,
            info: this.info()
        }
    }
    info() {
        return {
            time: new Date(),
            timestamp: new Date().getTime(),
            window : {
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight
            },
            screen : {
                width: screen.width,
                height: screen.height,
                availWidth: screen.availWidth,
                availHeight: screen.availHeight,
                colorDepth: screen.colorDepth,
                pixelDepth: screen.pixelDepth
            },
            location : {
                href: window.location.href,
                pathname: window.location.pathname
            },
            navigator : {
                appName: navigator.appName,
                appCodeName: navigator.appCodeName,
                platform: navigator.platform
            }
        }
    }
}
export default feedback