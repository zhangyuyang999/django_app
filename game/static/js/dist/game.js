class AcGameMenu {
    constructor(root) {
        this.root = root
        this.$menu = $(`
        <div class="ac-game-menu">
            <div class ="ac-game-menu-field">
                <div class="ac-game-menu-field-item ac-game-menu-field-item-single-mode">
                    单人模式
                </div>
                <div class="ac-game-menu-field-item ac-game-menu-field-item-multi-mode">
                    多人模式
                </div>
                <div class="ac-game-menu-field-item ac-game-menu-field-item-settings">
                    设置
                </div>
            </div>
        </div>
        `)
        this.root.$ac_game.append(this.$menu);
        this.$singel_mode = this.$menu.find('.ac-game-menu-field-item-single-mode');
        this.$multi_mode = this.$menu.find('.ac-game-menu-field-item-multi-mode');
        this.$settings = this.$menu.find('.ac-game-menu-field-item-settings');
        this.start();

    }

    start() {
        this.add_listening_events();
    }

    add_listening_events() {
        let outer = this;
        this.$singel_mode.click(function () {
            outer.hide()
            outer.root.playground.show()
            console.log("select single mode")
        })
        this.$multi_mode.click(function () {
            outer.hide()
            outer.root.playground.show()
            console.log("select multi mode")
        })
        this.$settings.click(function () {
            outer.hide()
            console.log("select settings")
        })
    }

    show() {
        this.$menu.show()
    }

    hide() {
        this.$menu.hide()
    }
}class AcGamePlayground{
    constructor(root) {
        this.root =root
        this.$playground=$(`
        <div>游戏界面</div>
        
        `)
        this.hide()
        this.root.$ac_game.append(this.$playground)
        this.start()
    }
    start(){

    }
    show(){
        this.$playground.show()
    }
    hide(){
        this.$playground.hide()
    }
}class AcGame{
    constructor(id) {
        this.id=id
        this.$ac_game = $('#'+id)
        this.menu =new AcGameMenu(this)
        this.playground=new AcGamePlayground(this)
        this.start()
    }
    start(){

    }
}