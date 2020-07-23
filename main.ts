let Pos_Y = 0
let Pos_X = 0
let Vert = 0
function Creer_mouvement(Pos_X: number, Pos_Y: number, True_Hor_False_Ver: boolean) {
    if (True_Hor_False_Ver == false) {
        for (let index = 0; index < 7; index++) {
            led.plotBrightness(Pos_X, Pos_Y, 255)
            led.plotBrightness(Pos_X, Pos_Y - 1, 117)
            led.plotBrightness(Pos_X, Pos_Y - 2, 53)
            basic.pause(200)
            Pos_Y += 1
            led.unplot(Pos_X, Pos_Y - 3)
        }
    } else {
        for (let index2 = 0; index2 < 7; index2++) {
            led.plotBrightness(Pos_X, Pos_Y, 255)
            led.plotBrightness(Pos_X - 1, Pos_Y, 117)
            led.plotBrightness(Pos_X - 2, Pos_Y, 53)
            basic.pause(200)
            Pos_X += 1
            led.unplot(Pos_X - 3, Pos_Y)
        }
    }
    
}

basic.forever(function on_forever() {
    
    while (true) {
        Vert = randint(1, 2)
        if (Vert == 2) {
            Pos_X = randint(0, 4)
            Creer_mouvement(Pos_X, 0, false)
        } else {
            Pos_Y = randint(0, 4)
            Creer_mouvement(0, Pos_Y, false)
        }
        
    }
})
basic.forever(function on_forever2() {
    
    basic.pause(500)
    while (true) {
        Vert = randint(1, 2)
        if (Vert == 2) {
            Pos_X = randint(0, 4)
            Creer_mouvement(Pos_X, 0, false)
        } else {
            Pos_Y = randint(0, 4)
            Creer_mouvement(0, Pos_Y, false)
        }
        
    }
})
