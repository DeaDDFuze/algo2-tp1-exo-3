Pos_Y = 0
Pos_X = 0
Vert = 0
def Creer_mouvement(Pos_X: number, Pos_Y: number, True_Hor_False_Ver: bool):
    if True_Hor_False_Ver == False:
        for index in range(7):
            led.plot_brightness(Pos_X, Pos_Y, 255)
            led.plot_brightness(Pos_X, Pos_Y - 1, 117)
            led.plot_brightness(Pos_X, Pos_Y - 2, 53)
            basic.pause(200)
            Pos_Y += 1
            led.unplot(Pos_X, Pos_Y - 3)
    else:
        for index2 in range(7):
            led.plot_brightness(Pos_X, Pos_Y, 255)
            led.plot_brightness(Pos_X - 1, Pos_Y, 117)
            led.plot_brightness(Pos_X - 2, Pos_Y, 53)
            basic.pause(200)
            Pos_X += 1
            led.unplot(Pos_X - 3, Pos_Y)

def on_forever():
    global Vert, Pos_X, Pos_Y
    while True:
        Vert = randint(1, 2)
        if Vert == 2:
            Pos_X = randint(0, 4)
            Creer_mouvement(Pos_X, 0, False)
        else:
            Pos_Y = randint(0, 4)
            Creer_mouvement(0, Pos_Y, False)
basic.forever(on_forever)

def on_forever2():
    global Vert, Pos_X, Pos_Y
    basic.pause(500)
    while True:
        Vert = randint(1, 2)
        if Vert == 2:
            Pos_X = randint(0, 4)
            Creer_mouvement(Pos_X, 0, False)
        else:
            Pos_Y = randint(0, 4)
            Creer_mouvement(0, Pos_Y, False)
basic.forever(on_forever2)
